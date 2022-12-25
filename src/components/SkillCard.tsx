import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography, makeStyles } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type props = {
  title: string
  icon: string
}

export default function SkillCard({ title, icon }: props) {
  return (
    <Link href={"https://www.youtube.com/"} passHref>
      <Card
        sx={{
          borderRadius: "0.5em",
          width: 150,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        elevation={2}
      >

        <Stack sx={{display:"flex", alignItems:"center"}}>
            <CardContent>
                <Typography variant="subtitle2">
                    {title}
                </Typography>
            </CardContent>
            <Box sx={{height: "80%", width: "80%", }}>
                <CardMedia
                    component="img"
                    image={icon}
                    title={title}
                    alt={title}
                />
            </Box>
        </Stack>
      </Card>
    </Link>
  );
}