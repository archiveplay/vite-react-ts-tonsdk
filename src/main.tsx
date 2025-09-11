import { StrictMode } from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoot } from "@telegram-apps/telegram-ui";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "@/index.css";
import App from "@/App.tsx";
import { TelegramAppProvider } from "@/providers/TelegramAppContext";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

// mock manifest
const manifestUrl =
  "https://archiveplay.github.io/vite-react-ts-tonsdk/tonconnect-manifest.json";

const basePath = window.location.pathname.split("/")[1]
  ? `/${window.location.pathname.split("/")[1]}`
  : "";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <BrowserRouter basename={basePath}>
          <TelegramAppProvider>
            <AppRoot>
              <App />
            </AppRoot>
          </TelegramAppProvider>
        </BrowserRouter>
      </TonConnectUIProvider>
    </QueryClientProvider>
  </StrictMode>,
);
