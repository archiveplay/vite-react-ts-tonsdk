import React, { createContext, useEffect, useState, useContext } from "react";
import WebApp from "@twa-dev/sdk";

type TelegramState = {
  viewport?: any;
  theme?: string;
};

const TelegramAppContext = createContext<TelegramState | null>(null);

export const TelegramAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<TelegramState>({});

  useEffect(() => {
    WebApp.expand();
    WebApp.ready();

    const onViewportChanged = (payload: any) => {
      setState((prev) => ({ ...prev, viewport: payload }));
    };
    WebApp.onEvent("viewportChanged", onViewportChanged);

    const onThemeChanged = (payload: any) => {
      console.log("onThemeChanged", payload);
      setState((prev) => ({
        ...prev,
        theme: payload?.themeParams?.bg_color || "light",
      }));
    };
    WebApp.onEvent("themeChanged", onThemeChanged);

    const onSettingsClicked = (payload: any) => {
      console.log("settingsButtonClicked", payload);
    };
    WebApp.onEvent("settingsButtonClicked", onSettingsClicked);

    return () => {
      WebApp.offEvent("viewportChanged", onViewportChanged);
      WebApp.offEvent("themeChanged", onThemeChanged);
      WebApp.offEvent("settingsButtonClicked", onSettingsClicked);
    };
  }, []);

  return (
    <TelegramAppContext.Provider value={state}>
      {children}
    </TelegramAppContext.Provider>
  );
};

export const useTelegramApp = () => {
  const ctx = useContext(TelegramAppContext);
  if (ctx === null) {
    throw new Error("useTelegramApp must be used within TelegramAppProvider");
  }
  return ctx;
};
