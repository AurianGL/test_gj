import React, { useEffect } from 'react'
import { getQuery } from '../utils';

interface AverageTickerProps {

}

const tickersValueUrls = ['https://www.bitstamp.net/api/v2/ticker/btcusd',
	'https://api.coinbase.com/v2/exchange-rates?currency=BTC',
	'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD']

const AverageCalc = async () => {
  const DatasetOne = await getQuery(tickersValueUrls[0])
  const DatasetTwo = await getQuery(tickersValueUrls[1])
  const DatasetThree = await getQuery(tickersValueUrls[2])


}

export const AverageTicker: React.FC<AverageTickerProps> = () => {
  useEffect(() => {
  }, [])

    return (
      <div>

      </div>
    );
}