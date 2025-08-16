import { StrictMode } from 'react'
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '@/index.css'
import App from '@/App.tsx'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

// mock manifest
const manifestUrl = "https://archiveplay.github.io/vite-react-ts-tonsdk/tonconnect-manifest.json";

const basePath = window.location.pathname.split("/")[1]
  ? `/${window.location.pathname.split("/")[1]}`
  : "";

console.log('basePath', basePath)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <BrowserRouter basename={basePath}>
          <App />
        </BrowserRouter>
      </TonConnectUIProvider>
    </QueryClientProvider>
  </StrictMode>
)
