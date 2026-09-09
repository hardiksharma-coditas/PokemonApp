import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login/Login.tsx'
import AdminPage from './pages/AdminPage/AdminPage.tsx'
import Users from './pages/Users/Users.tsx'
import Pokemons from './pages/Pokemons/pokemons.tsx'
import User from './pages/User/User.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/admin" element={<AdminPage/>}>
          <Route index element={<Users/>} />
          <Route path="pokemons" element={<Pokemons/>} />
        </Route >
        
        <Route path='/user' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
