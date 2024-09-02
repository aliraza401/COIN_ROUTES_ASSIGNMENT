import { useEffect, useState } from 'react';
import { WS_CLIENT_URL } from '../components/constants';

interface OrderBook {
  product_id: string;
  trade_id: number;
  best_bid: number;
  best_ask: number;
  best_ask_size: number;
  best_bid_size: number;
  sequence: number;
  side: string;
  price: number;
  time: string;
}

const useCoinBase = (product_id: string, depth?: number) => {
  const [pastData, setPastData] = useState<OrderBook[]>([]);
  const [ob, setOB] = useState<OrderBook>({
    product_id,
    trade_id: 0,
    best_bid: 0,
    best_ask: 0,
    sequence: 0,
    best_ask_size: 0,
    best_bid_size: 0,
    side: '',
    price: 0,
    time: '0',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const client = new WebSocket(WS_CLIENT_URL);

    let isClientOpen = false;

    client.onopen = () => {
      isClientOpen = true;
      client.send(
        JSON.stringify({
          type: 'subscribe',
          product_ids: [product_id],
          channels: ['ticker'],
        })
      );
    };

    client.onclose = () => console.log('WebSocket is closed now.');

    client.onerror = (error) => console.error('WebSocket error:', error);

    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      if (data.type !== 'ticker') return;

      const currentData: OrderBook = {
        product_id: data.product_id,
        best_bid: parseFloat(data.best_bid),
        best_ask: parseFloat(data.best_ask),
        sequence: data.sequence,
        side: data.side,
        trade_id: data.trade_id,
        price: parseFloat(data.price),
        time: data.time,
        best_bid_size: data.best_bid_size,
        best_ask_size: data.best_ask_size,
      };

      setOB(currentData);
      setPastData((prevData) => [...prevData, currentData]);

      if (isLoading) setIsLoading(false);
    };

    return () => {
      if (isClientOpen) client.close();
    };
  }, [product_id, depth]);


  return { ob, pastData, isLoading };
};

export default useCoinBase;
