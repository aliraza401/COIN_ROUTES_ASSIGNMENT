'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AVAILABLE_CURRENCIES, DEFAULT_CURRENCY } from './constants';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const CurrencySelect = () => {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    setDropdownOpen(false);

    router.push(`?currency=${newCurrency}`);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 flex items-center"
      >
        <span>{currency}</span>
        {
          dropdownOpen ?
            <CaretUpOutlined /> :
            <CaretDownOutlined />
        }
      </button>
      <div
        className={`absolute right-0 mt-2 w-40 bg-white z-50 border border-gray-300 rounded-md shadow-md ${dropdownOpen ? '' : 'hidden'}`}
      >
        <ul className="py-2">
          {AVAILABLE_CURRENCIES.map(
            (currencyOption) => (
              <li
                key={currencyOption}
                onClick={() => handleCurrencyChange(currencyOption)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <span>{currencyOption}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CurrencySelect;
