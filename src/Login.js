import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';
import { authenticate } from './helpers';

const Login = ({ open, handleClose }) => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate()

    const { email, password } = state;
    const handleChange = name => event => {

        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/login`, { email, password }).then(response => {
            console.log(response);
            authenticate(response, () => navigate("/create"));
            // setState({ ...state, title: '', content: '', user: '' });
            // return navigate("/");
        })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleChange('email')}
                        value={email}
                    />
                    <TextField

                        margin="dense"
                        id="pass"
                        label="password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={handleChange('password')}
                        value={password}
                    />
               
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleSubmit}
                >Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login