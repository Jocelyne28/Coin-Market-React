import React from "react";
import CoinRow from "./CoinRow";

const titles = ['#', 'Coin', 'Price', 'Price Change'];
const TableCoins = ({coins, search}) => {
    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
    return (
    <table className="table table-dark mt-4 table-hover">
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <td key={index}>{title}</td>
                ))}
            </tr>
        </thead>
        <tbody>
            {filteredCoins.map ((coin, index, symbol) => (
                <CoinRow coin={coin} key={index} index={index +1} symbol={symbol}/>
            ))}
        </tbody>
    </table>)
};

export default TableCoins;