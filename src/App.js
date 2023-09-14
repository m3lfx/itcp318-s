import React, { useEffect, useState } from 'react';

import './App.css';
import Footer from './Footer';

import Nav from './Nav';
import Title from './Title';
import axios from 'axios'
function App() {
  const [posts, setPosts] = useState([])
  const fetchPosts = () => {

    axios
      .get(`http://localhost:4000/api/posts`)
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
          <div>
            <h1>{post.title}</h1>
            <i>{post.slug}</i>
            <p>{post.content}</p>
          </div>
        )
      })}
      <Footer />

    </>


  );
}

export default App;
