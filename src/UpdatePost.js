import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UpdatePost = () => {
    let { id, } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/posts/${id}/edit`)
            .then(response => {
                console.log(response);
                setPost(response.data);
            })
            .catch(error => {
                alert('Error fetching posts')
                console.log(error)
            });
    }, [])
    console.log(post)
  return (
    <div>UpdatePost</div>
  )
}

export default UpdatePost