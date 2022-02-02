import axios from "axios";

const BASIC_ENDPOINT = 'https://api.coinbase.com/v2'

export const getRates = async (currency) => {
	const params = {currency};
	const {data} = await axios.get(`${BASIC_ENDPOINT}/exchange-rates`, {params});
	return data?.data?.rates;
}