import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <label>İletişime geçmek için tıklayınız</label>
        <button onClick={()=>navigate("Contact")}>Contact</button>
        <button onClick={()=>navigate(-1)}>Geri</button>
    </div>
  )
}

export default Home