import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Order {
  price: number;
  size: number;
}

interface OrderBookData {
  product_id: string;
  best_bid: number;
  best_ask: number;
  best_bid_size: number;
  best_ask_size: number;
  // Add more fields if necessary
}

const DepthChart: React.FC<{ orderBookData: OrderBookData }> = ({ orderBookData }) => {
  // Example data extraction from orderBookData or other props
  const bids: Order[] = [
    { price: orderBookData.best_bid, size: orderBookData.best_bid_size },
    // Add more bid data by extending this example
  ];

  const asks: Order[] = [
    { price: orderBookData.best_ask, size: orderBookData.best_ask_size },
    // Add more ask data by extending this example
  ];

  const data = {
    labels: [...bids.map(order => order.price), ...asks.map(order => order.price)],
    datasets: [
      {
        label: 'Bids',
        data: bids.map(order => order.size),
        borderColor: 'rgba(0, 255, 0, 0.5)', // Green
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Asks',
        data: asks.map(order => order.size),
        borderColor: 'rgba(255, 0, 0, 0.5)', // Red
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear' as const,
        title: {
          display: true,
          text: 'Price',
        },
      },
      y: {
        type: 'linear' as const,
        title: {
          display: true,
          text: 'Cumulative Size',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Depth Chart',
      },
    },
  };

  return <div style={{ height: '300px' }}><Line data={data} options={options} /></div>;
};

export default DepthChart;
