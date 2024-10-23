import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FragmentosAninhados from './components/FregmentosAninhados'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FragmentosAninhados />
  </StrictMode>,
)
