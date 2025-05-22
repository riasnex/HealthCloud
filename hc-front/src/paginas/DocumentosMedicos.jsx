import React, { useState } from 'react';

const DocumentosMedicos = () => {
  const [documentos, setDocumentos] = useState([]);
  const [filtros, setFiltros] = useState({ formato: '', fecha: '' });
  const [nuevoDoc, setNuevoDoc] = useState({
    nombre: '',
    categoria: '',
    formato: '',
    fechaSubida: '',
    importante: false,
    archivo: null
  });

  const formatosPermitidos = ['PDF', 'JPG', 'PNG'];

  const handleAgregarDocumento = () => {
    if (
      !nuevoDoc.nombre ||
      !nuevoDoc.categoria ||
      !nuevoDoc.formato ||
      !nuevoDoc.fechaSubida ||
      !nuevoDoc.archivo
    ) {
      alert('Completa todos los campos y sube un archivo');
      return;
    }

    setDocumentos((prev) => [
      ...prev,
      {
        ...nuevoDoc,
        id: Date.now()
      }
    ]);

    setNuevoDoc({
      nombre: '',
      categoria: '',
      formato: '',
      fechaSubida: '',
      importante: false,
      archivo: null
    });
  };

  const toggleImportancia = (id) => {
    setDocumentos((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, importante: !doc.importante } : doc
      )
    );
  };

  const documentosFiltrados = documentos.filter((doc) => {
    const cumpleFormato = filtros.formato ? doc.formato === filtros.formato : true;
    const cumpleFecha = filtros.fecha ? doc.fechaSubida === filtros.fecha : true;
    return cumpleFormato && cumpleFecha;
  });

  return (
    <div className="bg-white p-6 rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4">Gestión de Documentos Médicos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Nombre del archivo"
          value={nuevoDoc.nombre}
          onChange={(e) => setNuevoDoc({ ...nuevoDoc, nombre: e.target.value })}
          className="p-2 border rounded"
        />
        <select
          value={nuevoDoc.categoria}
          onChange={(e) => setNuevoDoc({ ...nuevoDoc, categoria: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">Selecciona categoría</option>
          <option value="Examen">Examen</option>
          <option value="Receta">Receta</option>
          <option value="Imagen">Imagen</option>
        </select>
        <select
          value={nuevoDoc.formato}
          onChange={(e) => setNuevoDoc({ ...nuevoDoc, formato: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">Selecciona formato</option>
          {formatosPermitidos.map((fmt) => (
            <option key={fmt} value={fmt}>{fmt}</option>
          ))}
        </select>
        <input
          type="date"
          value={nuevoDoc.fechaSubida}
          onChange={(e) => setNuevoDoc({ ...nuevoDoc, fechaSubida: e.target.value })}
          className="p-2 border rounded"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="p-2 border rounded w-full sm:w-auto"
          onChange={(e) =>
            setNuevoDoc((prev) => ({
              ...prev,
              archivo: e.target.files[0]
            }))
          }
        />
        <button
          onClick={handleAgregarDocumento}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
        >
          Agregar documento
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <select
          onChange={(e) => setFiltros({ ...filtros, formato: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">Filtrar por formato</option>
          {formatosPermitidos.map((fmt) => (
            <option key={fmt} value={fmt}>{fmt}</option>
          ))}
        </select>
        <input
          type="date"
          onChange={(e) => setFiltros({ ...filtros, fecha: e.target.value })}
          className="p-2 border rounded"
        />
      </div>

      <div className="space-y-2">
        {documentosFiltrados.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between border p-2 rounded shadow-sm bg-gray-50"
          >
            <div>
              <p className="font-semibold">{doc.nombre} ({doc.formato})</p>
              <p className="text-sm text-gray-600">
                {doc.categoria} | {doc.fechaSubida}
              </p>
            </div>
            <button
              onClick={() => toggleImportancia(doc.id)}
              className="text-2xl"
              title="Marcar como importante"
            >
              {doc.importante ? '⭐' : '☆'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentosMedicos;
