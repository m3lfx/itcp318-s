import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Login from './Login';

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
           {open && <Login open={open} handleClose={handleClose}/>}
            
        </>
    )
}

export default Nav