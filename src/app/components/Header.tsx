import Link from 'next/link';
import { DEFAULT_CURRENCY } from './constants';


export default function Index() {
  return (
    <div>
      <nav
        className="bg-white border-b-2 border-gray-200"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">
              Task
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/market?currency=${DEFAULT_CURRENCY}`} className="hover:text-blue-500">
                  Market
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
