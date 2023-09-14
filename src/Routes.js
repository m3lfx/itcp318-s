import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';

const RoutedApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutedApp