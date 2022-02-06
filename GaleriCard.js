import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function GaleriCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src ={data.thumbnail.formats.thumbnail.url}
          alt="gambar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.Judul}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data.deskripsi}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant ="outlined"     size="small" color="primary">
          Bagikan
        </Button>
      </CardActions>
    </Card>
  );
}