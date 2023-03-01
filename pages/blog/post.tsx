import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

interface PostProps {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
}

const Post: React.FC<PostProps> = ({ title, date, excerpt, slug }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </Typography>
                <Typography color="text.secondary">{date}</Typography>
                <Typography variant="body2">{excerpt}</Typography>
            </CardContent>
        </Card>
    );
};

export default Post;
