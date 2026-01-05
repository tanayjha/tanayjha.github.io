import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./PhotoResizer.css";

// Declare PDF.js type for TypeScript
declare global {
  interface Window {
    pdfjsLib: any;
  }
}

const PhotoResizer: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
  const [resizedImageData, setResizedImageData] = useState<string | null>(null);
  const [originalAspectRatio, setOriginalAspectRatio] = useState<number>(1);
  const [originalFileName, setOriginalFileName] = useState<string>("");
  const [originalFileType, setOriginalFileType] = useState<string>("");
  const [originalFileSize, setOriginalFileSize] = useState<number>(0);
  const [targetWidth, setTargetWidth] = useState<string>("");
  const [targetHeight, setTargetHeight] = useState<string>("");
  const [quality, setQuality] = useState<number>(85);
  const [lockAspectRatio, setLockAspectRatio] = useState<boolean>(true);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [showDownload, setShowDownload] = useState<boolean>(false);
  const [estimatedSize, setEstimatedSize] = useState<string>("");
  const [showEstimatedSize, setShowEstimatedSize] = useState<boolean>(false);
  const [previewSrc, setPreviewSrc] = useState<string>("");
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load PDF.js library
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.min.mjs";
    script.async = true;
    script.type = "module";
    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs";
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const estimateFileSize = (img: HTMLImageElement, width: number, height: number, qual: number, fileType: string) => {
    if (!img || !width || !height || width < 1 || height < 1) return;

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCanvas.width = width;
    tempCanvas.height = height;
    tempCtx.drawImage(img, 0, 0, width, height);

    let qualityValue = qual / 100;
    let mimeType = fileType;

    if (fileType === "image/png") {
      mimeType = "image/png";
      qualityValue = 1;
    } else if (fileType === "image/webp") {
      mimeType = "image/webp";
    } else {
      mimeType = "image/jpeg";
    }

    const dataUrl = tempCanvas.toDataURL(mimeType, qualityValue);
    const base64Length = dataUrl.split(",")[1].length;
    const estimatedSizeBytes = (base64Length * 3) / 4;

    setEstimatedSize(formatFileSize(estimatedSizeBytes));
    setShowEstimatedSize(true);
  };

  const handlePDFUpload = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const page = await pdf.getPage(1);

    const viewport = page.getViewport({ scale: 2 });
    const pdfCanvas = document.createElement("canvas");
    const pdfCtx = pdfCanvas.getContext("2d");

    if (!pdfCtx) return;

    pdfCanvas.width = viewport.width;
    pdfCanvas.height = viewport.height;

    await page.render({
      canvasContext: pdfCtx,
      viewport: viewport,
    }).promise;

    const img = new Image();
    img.onload = () => {
      setOriginalImage(img);
      setOriginalAspectRatio(img.width / img.height);
      setOriginalFileType("image/jpeg");
      setPreviewSrc(img.src);
      setOriginalFileName(file.name + " (converted from PDF)");
      setTargetWidth(img.width.toString());
      setTargetHeight(img.height.toString());
      setShowPreview(true);
      setShowControls(true);
      setShowDownload(false);
      setShowEstimatedSize(false);
    };
    img.src = pdfCanvas.toDataURL("image/jpeg", 0.85);
  };

  const handleImageFile = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setOriginalImage(img);
        setOriginalAspectRatio(img.width / img.height);
        setPreviewSrc(e.target?.result as string);
        setOriginalFileName(file.name);
        setTargetWidth(img.width.toString());
        setTargetHeight(img.height.toString());
        setShowPreview(true);
        setShowControls(true);
        setShowDownload(false);
        setShowEstimatedSize(false);
      };
      img.src = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  };

  const handleImageUpload = async (file: File) => {
    setOriginalFileName(file.name);
    setOriginalFileType(file.type);
    setOriginalFileSize(file.size);

    if (file.type === "application/pdf") {
      await handlePDFUpload(file);
    } else {
      handleImageFile(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
    if (file && validTypes.includes(file.type)) {
      handleImageUpload(file);
    } else if (file) {
      alert("Please upload a valid file: JPEG, PNG, WebP, or PDF");
    }
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const width = e.target.value;
    setTargetWidth(width);
    if (lockAspectRatio && originalImage && width) {
      const newHeight = Math.round(parseInt(width) / originalAspectRatio);
      setTargetHeight(newHeight.toString());
    }
    if (originalImage && width && targetHeight) {
      estimateFileSize(originalImage, parseInt(width), parseInt(targetHeight), quality, originalFileType);
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = e.target.value;
    setTargetHeight(height);
    if (lockAspectRatio && originalImage && height) {
      const newWidth = Math.round(parseInt(height) * originalAspectRatio);
      setTargetWidth(newWidth.toString());
    }
    if (originalImage && targetWidth && height) {
      estimateFileSize(originalImage, parseInt(targetWidth), parseInt(height), quality, originalFileType);
    }
  };

  const handleQualityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qual = parseInt(e.target.value);
    setQuality(qual);
    if (originalImage && targetWidth && targetHeight) {
      estimateFileSize(originalImage, parseInt(targetWidth), parseInt(targetHeight), qual, originalFileType);
    }
  };

  const handleResize = () => {
    if (!originalImage || !canvasRef.current) return;

    const width = parseInt(targetWidth);
    const height = parseInt(targetHeight);

    if (!width || !height || width < 1 || height < 1) {
      alert("Please enter valid dimensions");
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(originalImage, 0, 0, width, height);

    let qualityValue = quality / 100;
    let mimeType = originalFileType;

    if (originalFileType === "image/png") {
      mimeType = "image/png";
      qualityValue = 1;
    } else if (originalFileType === "image/webp") {
      mimeType = "image/webp";
    } else {
      mimeType = "image/jpeg";
    }

    const resizedData = canvas.toDataURL(mimeType, qualityValue);
    setResizedImageData(resizedData);
    setPreviewSrc(resizedData);
    setShowDownload(true);
  };

  const handleDownload = () => {
    if (!resizedImageData) return;

    const link = document.createElement("a");
    const nameWithoutExt =
      originalFileName.substring(0, originalFileName.lastIndexOf(".")) || originalFileName;

    let extension = "jpg";
    if (originalFileType === "image/png") extension = "png";
    else if (originalFileType === "image/webp") extension = "webp";
    else if (originalFileType === "image/jpeg") extension = "jpg";

    link.download = `${nameWithoutExt}_resized_${targetWidth}x${targetHeight}.${extension}`;
    link.href = resizedImageData;
    link.click();
  };

  return (
    <Container fluid className="photo-resizer-section">
      <Container className="photo-resizer-container">
        <h1 className="photo-resizer-title">📸 Photo Resizer</h1>

        <div
          className={`upload-area ${isDragOver ? "dragover" : ""}`}
          onClick={handleUploadAreaClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="upload-icon">⬆️</div>
          <div className="upload-text">
            Click to upload or drag and drop
            <br />
            JPEG, PNG, WebP, or PDF
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            accept="image/jpeg,image/png,image/webp,application/pdf"
            style={{ display: "none" }}
          />
        </div>

        {showPreview && (
          <div className="image-preview">
            <img src={previewSrc} className="preview-img" alt="Preview" />

            <div className="image-info">
              <div className="info-row">
                <span className="label">File Name:</span>
                <span>{originalFileName}</span>
              </div>
              <div className="info-row">
                <span className="label">Original Resolution:</span>
                <span>
                  {originalImage?.width} × {originalImage?.height}
                </span>
              </div>
              <div className="info-row">
                <span className="label">Original Size:</span>
                <span>{formatFileSize(originalFileSize)}</span>
              </div>
              {showEstimatedSize && (
                <div className="info-row">
                  <span className="label">Estimated New Size:</span>
                  <span style={{ color: "#667eea", fontWeight: 600 }}>{estimatedSize}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {showControls && (
          <div className="resize-controls">
            <div className="resize-title">Resize Settings</div>

            <div className="aspect-ratio-lock">
              <input
                type="checkbox"
                id="lockAspectRatio"
                checked={lockAspectRatio}
                onChange={(e) => setLockAspectRatio(e.target.checked)}
              />
              <label htmlFor="lockAspectRatio">Lock aspect ratio</label>
            </div>

            <div className="input-group">
              <div className="input-field">
                <label htmlFor="targetWidth">Width (px)</label>
                <input
                  type="number"
                  id="targetWidth"
                  min="1"
                  placeholder="Width"
                  value={targetWidth}
                  onChange={handleWidthChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="targetHeight">Height (px)</label>
                <input
                  type="number"
                  id="targetHeight"
                  min="1"
                  placeholder="Height"
                  value={targetHeight}
                  onChange={handleHeightChange}
                />
              </div>
            </div>

            <div className="quality-control">
              <div className="quality-label">
                <span>Compression Level</span>
                <span>{quality}%</span>
              </div>
              <input
                type="range"
                className="quality-slider"
                min="1"
                max="100"
                value={quality}
                onChange={handleQualityChange}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "5px",
                }}
              >
                <span>Smaller file</span>
                <span>Best quality</span>
              </div>
            </div>

            <button className="btn btn-primary" onClick={handleResize}>
              Resize Image
            </button>
          </div>
        )}

        {showDownload && (
          <button className="btn btn-secondary" onClick={handleDownload}>
            Download Resized Image
          </button>
        )}

        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      </Container>
    </Container>
  );
};

export default PhotoResizer;
