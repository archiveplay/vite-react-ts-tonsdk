import { StrictMode } from 'react'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// mock manifest
const manifestUrl = "https://clayzenx.github.io/twa-gta/tonconnect-manifest.json";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
  </StrictMode>,
)
