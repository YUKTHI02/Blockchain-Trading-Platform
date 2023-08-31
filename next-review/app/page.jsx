import Link from 'next/link';
import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';

export default async function HomePage() {
  const review = await getFeaturedReview();
  console.log('[HomePage] rendering');
  return (
    <> 
    
      <br>
      </br>
      <br>
      </br>
      <p className="pb-3">
      A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms. The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system. To use cryptocurrencies, you need a cryptocurrency wallet.
      </p> <br></br>LIST OF CRYPTOCURRENCIES : <ul> <li>BITCOIN</li>
 <li>TETHER</li>
 <li>XRP</li>
 <li>CARDANO</li>
 <li>BINANCE COIN</li>
 <li>DOGECOIN</li>
 <li>ETHEREUM</li>
 <li>LITECOIN</li> </ul>

      <div className="bg-blue border rounded shadow w-80
                      hover:shadow-xl sm:w-full">
        <Link href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row">
          <img src={review.image} alt=""
            width="320" height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}