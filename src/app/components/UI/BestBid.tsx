

import React from 'react';

interface BestBidProps {
    bestBid: number;
    bestAsk: number;
    best_bid_size: number,
    best_ask_size: number
}

const BestBid: React.FC<BestBidProps> = ({ bestBid, bestAsk, best_bid_size, best_ask_size }) => {
    return (
        <div className='flex w-full justify-between mt-5'>
            <h1 className='w-[45%] bg-slate-50 p-4 rounded'>
                <p>Best Bid: <strong>{bestBid}</strong></p>
                <p>Best Bid Size: <strong>{best_bid_size}</strong></p>
            </h1>
            <h1 className='w-[45%] bg-slate-50 p-4 rounded'>
                <p>Best Ask: <strong>{bestAsk}</strong></p>
                <p>Best Ask Size: <strong>{best_ask_size}</strong></p>
            </h1>
        </div>
    );
};

export default BestBid;
