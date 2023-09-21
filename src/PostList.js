import React from 'react'

import { Container, Typography, Link, Button } from '@mui/material'
import axios from 'axios';

const PostList = ({ post, fetchPosts }) => {
    const deleteConfirm = id => {
        let answer = window.confirm('Are you sure you want to delete this post?');
        if (answer) {
            deletePost(id);
        }
    };
    const deletePost = id => {
        axios
            .delete(`${process.env.REACT_APP_API}/posts/${id}`)
            .then(response => {
                console.log(response)
                fetchPosts();
                // navigate('/')
            })
            .catch(error => alert('Error deleting post'));
    };
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

            <Button
                variant="contained"
                color="error"
                onClick={() => deleteConfirm(post.id)}
            >delete</Button>



        </Container>


    )
}

export default PostList