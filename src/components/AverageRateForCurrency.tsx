import React, { useContext, useEffect, useState } from 'react'
import { CurrencyPair } from '.';
import { getQuery } from '../utils';
import { GJNumbersView } from './GJNumbersView';

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
  // return data as res;
  var result = Object.keys(data).map((key) => [key, parseFloat(data[key])]);
  return result
};

export const AverageRateForCurrency: React.FC<AverageRateForCurrencyProps> = () => {
  const { pair } = useContext(CurrencyPair);
  const [data, setData] = useState<[string, number][]>()
    useEffect(() => {
      if (pair) fetchData(pair).then(res => setData(res as [string, number][]))
  
    }, [pair])
    return (
      <div>
        {data && 
          <GJNumbersView title={`data for ${pair}`} data={data}/>
        }
      </div>
    );
}