import React from 'react'
import { GJNumberLabel } from './GJNumberLabel';

interface GJNumbersViewProps {
  title: string,
  data: [string, number][]
}

export const GJNumbersView: React.FC<GJNumbersViewProps> = ({title, data}) => {
    return (
      <div className='text-center p-4'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <div className='grid sm:grid-cols-3 lg:grid-cols-6 gap-2'>
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