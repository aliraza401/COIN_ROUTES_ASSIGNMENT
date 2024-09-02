import { ReadonlyURLSearchParams } from 'next/navigation';
import CurrencyInfo from '../components/CurrencyInfo';
import CurrencySelect from './../components/CurrencySelect';
import { DEFAULT_CURRENCY } from '../components/constants';

interface PagePrams {
  searchParams: {
    currency: string
  }
}

const Header = ({ searchParams }: PagePrams) => {
  const selectedCurrency = searchParams?.currency || DEFAULT_CURRENCY;

  return (
    <div className='mx-4'>
      <div className="flex justify-end mt-5">
        <CurrencySelect />
      </div>

      <CurrencyInfo curreny={selectedCurrency} />
    </div>
  );
};

export default Header;
