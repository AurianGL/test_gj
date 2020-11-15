import React, { createContext, useState } from "react"


interface currencyPairContextProps {
  
}

export const CurrencyPair: React.Context<any> = createContext(undefined)

export const CurrencyPairContext: React.FC<currencyPairContextProps> = ({children}) => {
  const [pair, setPair] = useState(null);
  
  return (
      <CurrencyPair.Provider
        value={{ pair, setPair }}
      >
        {children}
      </CurrencyPair.Provider>
    );
}