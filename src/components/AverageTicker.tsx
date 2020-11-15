import React, { useEffect, useState } from 'react';
import { getQuery } from '../utils';

interface AverageTickerProps {}

const tickersValueUrls = [
	'https://www.bitstamp.net/api/v2/ticker/btcusd',
	'https://api.coinbase.com/v2/exchange-rates?currency=BTC',
	'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD',
];

const AverageCalc = async () => {
	const DatasetOne: any = await getQuery(tickersValueUrls[0]);
	const DatasetTwo: any = await getQuery(tickersValueUrls[1]);
  const DatasetThree: any = await getQuery(tickersValueUrls[2]);
  const valuesArr: number[] = []
  if (DatasetOne) valuesArr.push(DatasetOne.last)
  if (DatasetTwo) valuesArr.push(DatasetTwo.data.rates.USD)
  if (DatasetThree) valuesArr.push(DatasetThree[0][1])

	const average = valuesArr.reduce((a, b) => a + b, 0) / valuesArr.length
	console.log(average);
	return average;
};

export const AverageTicker: React.FC<AverageTickerProps> = () => {
	const [average, setAverage] = useState<number>();
	useEffect(() => {
		AverageCalc().then(data => setAverage(data));
	}, []);

	return (
		<div>
			<h2>Average Rate for BTC to USD</h2>
			{average && <p>{average}</p>}
      {!average && <div>Loading ...</div>}
		</div>
	);
};
