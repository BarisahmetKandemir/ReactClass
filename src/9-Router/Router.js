import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

const Router = () => {
    return (
        <BrowserRouter >
            <Routes>
               <Route path="/" element={<Layout />}>
                   <Route index element={<Home/>}/> 
                   <Route path="Blogs" element={<Blogs/>}/>
                   <Route path="Contact" element={<Contact/>}/>
                   <Route path="*" element={<NoPage/>}/>
               </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router