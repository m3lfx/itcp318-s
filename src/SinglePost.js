import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePost = () => {
    let { id, } = useParams()
    const [post, setPost] = useState({})
    console.log(id)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/posts/${id}`)
      .then(response => {
        console.log(response);
        // setPost(response.data);
      })
      .catch(error => {
        alert('Error fetching posts')
        console.log(error)
      });
      }, [])
  return (
    <div>SinglePost</div>
  )
}

export default SinglePost