'use client';

import React from 'react';
import useCoinBase from '../hooks/useCoinBase';
import BestBid from './UI/BestBid';
import CurrencyChart from './CurrencyChart';
import { MarketPageLoader } from './UI/Loader';

const CurrencyInfo: React.FC<{ curreny: string }> = ({ curreny }) => {
  const { ob, pastData, isLoading } = useCoinBase(curreny);

  if (isLoading) return <MarketPageLoader />;

  return (
    <>
      <BestBid
        bestBid={ob.best_bid}
        bestAsk={ob.best_ask}
        best_bid_size={ob.best_bid_size}
        best_ask_size={ob.best_ask_size}
      />
      <CurrencyChart pastData={pastData} curreny={curreny} />
    </>
  );
};

export default CurrencyInfo;
