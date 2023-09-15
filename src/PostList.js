import React from 'react'
import { Container, Typography } from '@mui/material'

const PostList = ({post}) => {
  return (
    <Container>
            <Typography variant="h2" gutterBottom sx={{ color: 'red' }}>
              {post.title}
            </Typography>
            <Typography variant="body1">{post.content}</Typography>
          </Container>
  )
}

export default PostList