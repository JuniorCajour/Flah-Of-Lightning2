import axios from "axios";

export function isConnected() {
    return localStorage.getItem('eth_connected') === 'y'
}

export async function bnbPrice() {
    const res = await axios(`https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD`);
    return res.data.USD || 0.0;
}