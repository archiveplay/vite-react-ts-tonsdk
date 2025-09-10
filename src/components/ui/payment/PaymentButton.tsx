import React from "react";
import backendApi from "@/api/back";
import WebApp from "@twa-dev/sdk";

export const TestInvoiceButton: React.FC = () => {
  return (
    <>
      <button
        onClick={async () => {
          try {
            const response = await backendApi.post("/user-payment/top-up", {
              provider: "cryptobot",
              title: "Пополнить баланс",
              description: "Пополнения баланса на 0.01 usdt",
              currency: "USDT",
              payload: "test_order_1",
              amount: 0.1,
            });

            WebApp.openTelegramLink(response.data.mini_app_invoice_url);
          } catch (err) {
            console.error("Ошибка при создании invoice", err);
          }
        }}
      >
        cryptobot usdt
      </button>
      <button
        onClick={async () => {
          try {
            const response = await backendApi.post("/user-payment/top-up", {
              provider: "cryptobot",
              title: "Пополнить баланс",
              description: "Пополнения баланса на 0.01 ton",
              currency: "TON",
              payload: "test_order_1",
              amount: 0.01,
            });

            WebApp.openTelegramLink(response.data.mini_app_invoice_url);
          } catch (err) {
            console.error("Ошибка при создании invoice", err);
          }
        }}
      >
        cryptobot ton
      </button>
      <button
        onClick={async () => {
          try {
            const response = await backendApi.post("/user-payment/top-up", {
              provider: "stars", // строго ограничено enum
              title: "Пополнить баланс",
              description: "Пополнения баланса на 1 star",
              payload: "test_order_1",
              amount: 1,
            });

            console.log("response", response);
            WebApp.openInvoice(response.data.url);
          } catch (err) {
            console.error("Ошибка при создании invoice", err);
          }
        }}
      >
        Пополнить баланс на 1
      </button>
    </>
  );
};
