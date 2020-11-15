import React, { useContext, useEffect, useState } from 'react'
import { CurrencyPair } from '.';
import { getQuery } from '../utils';

interface AverageRateForCurrencyProps {

}
type res = {

  ask: string
  bid: string
  high: string
  last: string
  low: string
  open: string
}

const fetchData = async (symbol: string) => {
	const data = await getQuery(
		`https://www.bitstamp.net/api/v2/ticker/${symbol}/`
	);
	return data as res;
};

export const AverageRateForCurrency: React.FC<AverageRateForCurrencyProps> = () => {
  const { pair } = useContext(CurrencyPair);
  const [data, setData] = useState<res>()
    useEffect(() => {
      if (pair) fetchData(pair).then(res => setData(res))
  
    }, [pair])
    return (
      <div>
        {data && data?.high}
      </div>
    );
}