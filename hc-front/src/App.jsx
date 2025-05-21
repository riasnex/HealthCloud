import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CodigoQR from './pages/CodigoQR'
import CitasMedicas from './pages/CitasMedicas'
import DetalleCita from './pages/DetalleCita'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/qr" element={<CodigoQR />} />
        <Route path="/citas" element={<CitasMedicas />} />
        <Route path="/cita/:id" element={<DetalleCita />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App