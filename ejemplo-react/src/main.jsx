import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import { ReporteUsuarios } from './ReporteUsuarios'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('reporte_usuarios')).render(
  <React.StrictMode>
    <ReporteUsuarios />
  </React.StrictMode>,
)