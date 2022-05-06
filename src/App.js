import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';
import Card from './components/Card';
import Convert from './components/Convert'

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')


  const getData = async ()  => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1");
    console.log(res.data)
    const popularCoins = ['btc', 'eth', 'usdt', 'bnb', 'usdc'];
    const relevantCoins = res.data.filter(coin => {
        if (popularCoins.findIndex(popularCoin => coin.symbol === popularCoin) < 0){
        return false
      } else{
        return true;
      }
    })
    setCoins(relevantCoins)
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <h1 className='text-center'>Coin Market</h1>
      <Card/>
      <div className='row'>
        <input type="text" placeholder='Search a Coin'className='form-control bg-dark text-light border-0 mt-4 text-center'onChange={e => setSearch(e.target.value)}/>
      </div>
      <TableCoins coins={coins} search={search} />
      <h1 className='text-center'>Convert</h1>
      <Convert/>
    </div>
  );
}

export default App;
