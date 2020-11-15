import React, { useContext, useEffect, useState } from 'react';
import { CurrencyPair } from '.';
import { getQuery } from '../utils';
import { GJNumbersView } from './GJNumbersView';

interface AverageRateForCurrencyProps {}

const fetchData = async (symbol: string) => {
	const data = await getQuery(
		`https://www.bitstamp.net/api/v2/ticker/${symbol}/`
	);
	// return data as res;
	var result = data
		? Object.keys(data).map(key => [key, parseFloat(data[key])])
		: false;
	return result;
};

export const AverageRateForCurrency: React.FC<AverageRateForCurrencyProps> = () => {
	const { pair } = useContext(CurrencyPair);
	const [data, setData] = useState<[string, number][] | null>();
	useEffect(() => {
		if (pair) fetchData(pair).then(res => res ? setData(res as [string, number][]) : setData(null));
	}, [pair]);
	return (
		<div>
			{data && <GJNumbersView title={`data for ${pair}`} data={data} />}
      {!data && <GJNumbersView title={`No Data`} data={[]} />}
		</div>
	);
};
