import React, { Suspense } from 'react';
import {
	AverageRateForCurrency,
	CurrencyPairContext,
	PairsCollection,
} from './components';



const App = () => {
	return (
		<>
			<div></div>
			<div>
				<CurrencyPairContext>
					<div className='overflow-auto h-48 max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full'>
						<PairsCollection />
					</div>
          <Suspense fallback={<div>Loading...</div>}>
					  <AverageRateForCurrency/>
          </Suspense>
				</CurrencyPairContext>
			</div>
		</>
	);
};

export default App;
