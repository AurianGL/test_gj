import React from 'react'
import { GJNumberLabel } from './GJNumberLabel';

interface GJNumbersViewProps {
  title: string,
  data: [string, number][]
}

export const GJNumbersView: React.FC<GJNumbersViewProps> = ({title, data}) => {
    return (
      <div className='text-center p-4'>
        <h2 className='font-bold text-xl m-4'>{title}</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
          {data.map((pair) => (
            <div key={pair[0]}>
              <GJNumberLabel number={pair[1]} label={pair[0]} />
            </div>
          )
          )} 
        </div>

      </div>
    );
}