import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Nav from './Nav';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const SinglePost = () => {
    let { id, } = useParams()
    const [post, setPost] = useState({})
    const [expanded, setExpanded] = useState(false);
    console.log(id)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/posts/${id}`)
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
        <>
            <Nav />
            <Card sx={{ maxWidth: 'lg' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {post.id}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={post.title}
                    subheader={new Date(post.created_at).toLocaleString()}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="/images/ojt1.jpeg"
                    alt="card image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.slug}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{post.content}</Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </>

    )
}

export default SinglePost