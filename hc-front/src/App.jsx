import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Recuperar } from './Paginas/RecuperarContraseña'
import { PagLogin } from './Paginas/paglogin'
import { PagRegistro } from './Paginas/pagregistro'
import { Cambiar } from './Paginas/CambiarContraseña'
import { Documentos } from './Paginas/Inicio(Documentos)'

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagLogin/>} />
        <Route path="/registro" element={<PagRegistro/>} />
        <Route path="/recuperar" element={<Recuperar/>} />
        <Route path="/cambiar" element={<Cambiar/>} />
        <Route path="/inicio" element={<Documentos/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App

