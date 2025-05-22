import { useState, useEffect, useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'

function CodigoQR() {
  const [qrValue, setQrValue] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)
  const timerRef = useRef(null)
  const countdownRef = useRef(null)

  const generateQR = () => {
    const patientProfile = {
      id: '123456',
      name: 'Juan Perez',
      email: 'juan.perez@example.com',
    }

    const expiration = Date.now() + 15 * 60 * 1000
    const token = btoa(JSON.stringify({ patientProfile, expiration }))

    setQrValue(token)
    setTimeLeft(15 * 60)

    if (timerRef.current) clearTimeout(timerRef.current)
    if (countdownRef.current) clearInterval(countdownRef.current)

    timerRef.current = setTimeout(() => {
      setQrValue('')
      setTimeLeft(0)
    }, 15 * 60 * 1000)

    countdownRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(countdownRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (countdownRef.current) clearInterval(countdownRef.current)
    }
  }, [])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  return (
    <div className="bg-[url('/FondoRegistro.png')] bg-cover bg-center flex flex-col items-center justify-center min-h-screen gap-8">
      <button
        onClick={generateQR}
        className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-lg hover:bg-red-700"
        aria-label="Generar Código QR"
        title="Generar Código QR"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h6v6H3V3zM15 3h6v6h-6V3zM3 15h6v6H3v-6zM15 15h6v6h-6v-6z"
          />
        </svg>
      </button>

      {qrValue && (
        <>
          <QRCodeSVG value={qrValue} size={256} level="H" includeMargin={true} />
          <p className="text-gray-700 mt-2">Expira en: {formatTime(timeLeft)}</p>
        </>
      )}
    </div>
  )
}

export default CodigoQR