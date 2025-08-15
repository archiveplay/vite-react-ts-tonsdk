import { StrictMode } from 'react'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

// mock manifest
const manifestUrl = "https://clayzenx.github.io/twa-gta/tonconnect-manifest.json";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <App />
      </TonConnectUIProvider>
    </QueryClientProvider>
  </StrictMode>,
)
