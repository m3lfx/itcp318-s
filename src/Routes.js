import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';
const RoutedApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/create" element={<Create />} />
                <Route path="/posts/:id" element={<SinglePost />} />
                <Route path="/posts/edit/:id" element={<UpdatePost />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutedApp