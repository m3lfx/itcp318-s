import React from 'react'
import { Container, Typography, Link, Button } from '@mui/material'

const PostList = ({ post }) => {
    return (

        <Container>
            <Link href={`/posts/${post.id}`} underline="hover">
                <Typography variant="h2" gutterBottom sx={{ color: 'red' }}>
                    {post.title}
                </Typography>
            </Link>
            <Typography variant="body1">{post.content}</Typography>
            <Link href={`/posts/edit/${post.id}`} >
                <Button variant="contained">Edit</Button>
            </Link>

        </Container>


    )
}

export default PostList