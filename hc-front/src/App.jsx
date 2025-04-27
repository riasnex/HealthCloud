import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagLogin } from './paginas/paglogin'
import { PagRegistro } from './paginas/pagregistro'


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagLogin/>} />
        <Route path="/registro" element={<PagRegistro/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
