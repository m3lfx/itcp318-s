import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item pr-3 pt-3 pb-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item pr-3 pt-3 pb-3">
                        <Link to="/create">Create</Link>
                    </li>
                    <li className="nav-item pr-3 pt-3 pb-3">
                        <Button variant="outlined" color="error" onClick={handleClickOpen}>
                            Login
                        </Button>
                    </li>
                </ul>
            </div>
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
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pass"
                        label="password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        //onClick={handleSubmit}
                    >Login
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Nav