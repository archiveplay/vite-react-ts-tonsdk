import React from 'react';
import backendApi from '@/api/back';
import WebApp from '@twa-dev/sdk';

export const TestInvoiceButton: React.FC = () => {
  return (
    <>
      <button
        onClick={async () => {
          try {
            const response = await backendApi.post('/payment/create-link', {
              provider: 'cryptobot', // строго ограничено enum
              title: 'Тестовый товар',
              description: 'Описание тестового товара',
              payload: 'test_order_1',
              amount: 10000,
            });

            console.log('response', response);
            WebApp.openInvoice(response.data.url)
          } catch (err) {
            console.error('Ошибка при создании invoice', err);
          }
        }}
      >
        cryptobot
      </button>
      <button
        onClick={async () => {
          try {
            const response = await backendApi.post('/payment/create-link', {
              provider: 'stars', // строго ограничено enum
              title: 'Тестовый товар',
              description: 'Описание тестового товара',
              payload: 'test_order_1',
              amount: 100,
            });

            console.log('response', response);
            WebApp.openInvoice(response.data.url)
          } catch (err) {
            console.error('Ошибка при создании invoice', err);
          }
        }}
      >
        Купить
      </button>
    </>
  )
};

