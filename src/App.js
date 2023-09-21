import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material'
import './App.css';
import Footer from './Footer';


import Nav from './Nav';
import Title from './Title';
import axios from 'axios'
import PostList from './PostList';
function App() {
  const [posts, setPosts] = useState([])
  const fetchPosts = () => {

    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        // console.log(response.data);
        setPosts(response.data);
      })
      .catch(error => {
        alert('Error fetching posts')
        console.log(error)
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [])
  console.log(posts)

  return (
    <>
      <Nav />
      <Title title="My Blog Posts" message="welcome" />
      {posts.map(post => {
        return (
        <PostList post={post} key={post.id} fetchPosts={fetchPosts}/>
        )
      })}
      <Footer />

    </>


  );
}

export default App;
