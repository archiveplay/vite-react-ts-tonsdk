import React, { createContext, useContext, useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { PaymentStatus } from "@/types/payment";

type InvoiceEvent = {
  url: string;
  status: PaymentStatus;
};

type TelegramAppState = {
  lastInvoice?: InvoiceEvent;
};

const TelegramAppContext = createContext<TelegramAppState | null>(null);

export const TelegramAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<TelegramAppState>({});

  useEffect(() => {
    const onInvoiceClosed = (invoice: InvoiceEvent) => {
      if (invoice.status === "paid") {
        WebApp.HapticFeedback.notificationOccurred("success");
        WebApp.showAlert("✅ Payment success!");
      } else {
        WebApp.HapticFeedback.notificationOccurred("error");
        WebApp.showPopup({
          title: "Error",
          message: `❌ Payment failed: ${invoice.status}`,
          buttons: [{ id: "close", type: "default", text: "OK" }],
        });
      }
      setState((prev) => ({ ...prev, lastInvoice: invoice }));
    };
    WebApp.onEvent("invoiceClosed", onInvoiceClosed);

    return () => {
      WebApp.offEvent("invoiceClosed", onInvoiceClosed);
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
  if (!ctx)
    throw new Error("useTelegramApp must be used within TelegramAppProvider");
  return ctx;
};
