import React, { Suspense } from 'react';
import {
	AverageRateForCurrency,
	AverageTicker,
	CurrencyPairContext,
	PairsCollection,
} from './components';



const App = () => {
	return (
		<div	className="h-screen grid gap-2 md:grid-cols-2 sm:grid-cols-1 bg-gray-200">
			<div>
				<AverageTicker/>
			</div>
			<div>
				<CurrencyPairContext>
					<div className='overflow-auto h-48 m-5'>
						<PairsCollection />
					</div>
          <Suspense fallback={<div>Loading...</div>}>
					  <AverageRateForCurrency/>
          </Suspense>
				</CurrencyPairContext>
			</div>
		</div>
	);
};

export default App;
