import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListCharacter from './pages/ListCharacter/ListCharacter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListCharacter/>
  </StrictMode>,
)
