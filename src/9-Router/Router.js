import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import ContacrDetal from './pages/ContactDetal'

const Router = () => {
    return (
        <BrowserRouter >
            <Routes>
               <Route path="/" element={<Layout />}>
                   <Route index element={<Home/>}/> 
                   <Route path="Blogs" element={<Blogs/>}/>
                   <Route path="Contact" element={<Contact/>}/>
                   <Route path="contact/:id" element={<ContacrDetal/>}/>
                   <Route path="*" element={<NoPage/>}/>
               </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router