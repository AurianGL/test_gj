import React, { useContext, useEffect, useState } from 'react';
import { Button, CurrencyPair } from '.';
import { getQuery } from '../utils';

interface pairCollectionProps {}

type pair = {
	name: string;
	symbol: string;
	description: string;
};

const getPair = async () => {
	const data = await getQuery(
		'https://www.bitstamp.net/api/v2/trading-pairs-info/'
	);
	const namesAndSymbols: pair[] = data.map((elem: any) => {
		return {
			name: elem.name,
			symbol: elem.url_symbol,
			desciption: elem.description,
		};
	});
	return namesAndSymbols;
};

export const PairsCollection: React.FC<pairCollectionProps> = () => {
	const [currencyPairs, setCurrencyPairs] = useState<pair[]>([]);
	const { pair, setPair } = useContext(CurrencyPair);

	useEffect(() => {
		getPair().then(data => setCurrencyPairs(data));
	}, []);

	return (
		<div className='grid grid-cols-3 gap-4'>
      {currencyPairs.map(thisPair =>
      <div className='m-4' key={thisPair.symbol}>
				<Button  handleClick={() => setPair(thisPair.symbol)}>
					{thisPair.name}
				</Button>
      </div>
			)}
		</div>
	);
};
