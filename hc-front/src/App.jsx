import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagLogin } from './paginas/paglogin'
import { PagRegistro } from './paginas/pagregistro'
import { RegistroPaciente } from './paginas/paciente'
import { RegistroMedico } from './paginas/medico'
import { TerminosCondiciones } from './paginas/terminos'
import { Home } from './paginas/home'
import { PoliticaPrivacidad } from './paginas/privacidad'
import { CentrosMedicos } from './paginas/centros'


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagLogin/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/registro" element={<PagRegistro/>} />
        <Route path="/paciente" element={<RegistroPaciente/>} />
        <Route path="/medico" element={<RegistroMedico/>} />
        <Route path="/terminos" element={<TerminosCondiciones/>} />
        <Route path="/privacidad" element={<PoliticaPrivacidad/>} />
        <Route path="/centros" element={<CentrosMedicos/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
