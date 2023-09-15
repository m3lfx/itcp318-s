import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';
import SinglePost from './SinglePost';
const RoutedApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/create" element={<Create />} />
                <Route path="/posts/:id" element={<SinglePost />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutedApp