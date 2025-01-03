import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ImgMediaCardProps {
  title: string;
  date: string;
  content: string;
  key: number;    
}

export default function ImgMediaCard(props: ImgMediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
