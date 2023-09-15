import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import Title from './Title'

const UpdatePost = () => {
    let { id, } = useParams()
    let navigate = useNavigate()
    const [post, setPost] = useState({})
    const [state, setState] = useState({
        title: '',
        content: '',
        user: '',
        userId: '',
    });

    const { title, content, user } = state;

    const handleChange = name => event => {
        console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API}/posts/${id}`, { title, content, user, userId: user.id }).then(response => {
                console.log(response);
                setState({ ...state, title: '', content: '', user: '' });
                // show sucess alert
                // alert(`Post titled ${response.data.title} is created`);
                return navigate("/");
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/posts/${id}/edit`)
            .then(response => {
                console.log(response);
                const { title, content, slug, user } = response.data;
                setState({ ...state, title, content, slug, user, userId: user.id });
            })
            .catch(error => {
                alert('Error fetching posts')
                console.log(error)
            });
    }, [])
    // console.log(post.user.name)
  return (
    <>
    <Nav />
    <div className="container p-5">
        <Title title="CREATE POST" />

        <br />
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input
                    type="text" className="form-control" placeholder="Post title"
                    required
                    onChange={handleChange('title')}
                    value={title}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Content</label>
                <textarea
                    type="text" className="form-control" placeholder="Write something.." required
                    onChange={handleChange('content')}
                    value={content}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">User</label>
                <input
                    type="text" className="form-control" placeholder="Your name"
                    required
                    onChange={handleChange('user')} 
                    value={user.name}/>
            </div>
            <div>
                <button className="btn btn-primary">update</button>
            </div>
        </form>
    </div>
</>
  )
}

export default UpdatePost