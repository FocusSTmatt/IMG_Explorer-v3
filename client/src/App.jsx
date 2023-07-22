import './App.css'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './container/Home'
import Login from './components/Login'

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = sessionStorage.getItem('user') !== 'undefined' ? JSON.parse(sessionStorage.getItem('user')) : sessionStorage.clear();

    if (!userInfo) navigate('/login');
  }, []);

 

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
