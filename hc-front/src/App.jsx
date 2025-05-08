import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagLogin } from './paginas/paglogin'
import { PagRegistro } from './paginas/pagregistro'
import { RegistroPaciente } from './paginas/paciente'
import { RegistroMedico } from './paginas/medico'


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagLogin/>} />
        <Route path="/registro" element={<PagRegistro/>} />
        <Route path="/paciente" element={<RegistroPaciente/>} />
        <Route path="/medico" element={<RegistroMedico/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
