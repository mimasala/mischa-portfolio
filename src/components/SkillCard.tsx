import { Card, CardContent, CardMedia, Typography, makeStyles } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type props = {
    title: string
    icon: string
}

export default function SkillCard({title, icon}:props) {
  return (
    <Link href={"https://www.youtube.com/"} passHref>
        <Card
            sx={{
            borderRadius: "0.5em",
            width: 150,
            height: 180,
            justifyContent: "center",
            alignItems: "center",
            }}
            elevation={2}
        >
            <Card sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.5em",
                height: 30,
                position: "absolute",
                margin: "0.5em",
            }}>
                <Typography gutterBottom variant="body2" component="h2" sx={{margin:"1rem"}}>
                    {title}
                </Typography>
            </Card>
        <CardMedia
            component="img"
            image={icon}
            title={title}
            alt={title}
        />
        </Card>
    </Link>
  );
}