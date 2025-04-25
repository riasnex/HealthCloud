import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagLogin } from './paginas/paglogin'


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagLogin/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
