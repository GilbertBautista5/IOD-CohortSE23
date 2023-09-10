import CurrencyChooser from "@/components/CurrencyChooser";
import MoodChanger from "@/components/MoodChanger";

async function getBTCData(currency) {
  const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
  
  return res.json();
}


export default async function BitCoin({searchParams}) {
  const currency = searchParams.currency ? searchParams.currency : 'AUD';
  const btcResponse = await getBTCData(currency); 
  const btcPrice = btcResponse ? btcResponse.bitcoin[currency.toLowerCase()] : 0;

  return (
      <div className="BitCoin">
        <h1>BitCoin Exchange Rates</h1>
        <CurrencyChooser defaultCurrency={currency}/> 
        <MoodChanger/>

        <div>1 BTC is worth {btcPrice} {currency}</div>
      </div>

  );
}
