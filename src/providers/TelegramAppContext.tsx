import React, { createContext, useEffect, useState, useContext } from "react";
import { on } from "@telegram-apps/sdk";

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
    const removeSetting = on("settings_button_pressed", (payload) => {
      console.log("settings_button_pressed", payload);
    });

    const removeViewport = on("viewport_changed", (payload) => {
      setState((prev) => ({ ...prev, viewport: payload }));
    });

    const removeTheme = on("theme_changed", (payload) => {
      setState((prev) => ({
        ...prev,
        theme: payload.theme_params?.bg_color || "light",
      }));
    });

    return () => {
      removeViewport();
      removeTheme();
      removeSetting();
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
