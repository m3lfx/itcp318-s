import React from 'react'
import { Container, Typography, Link } from '@mui/material'

const PostList = ({ post }) => {
    return (
      
        <Container>
            <Link href={`/posts/${post.id}`}  underline="hover">
                <Typography variant="h2" gutterBottom sx={{ color: 'red' }}>
                    {post.title}
                </Typography>
            </Link>
            <Typography variant="body1">{post.content}</Typography>
            
        </Container>
      
        
    )
}

export default PostList