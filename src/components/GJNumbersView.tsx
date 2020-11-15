import React from 'react'
import { GJNumberLabel } from './GJNumberLabel';

interface GJNumbersViewProps {
  title: string,
  data: {number: number, label: string}[]
}

export const GJNumbersView: React.FC<GJNumbersViewProps> = ({title, data}) => {
    return (
      <div>
        <h2>{title}</h2>
        {data.map((pair) => (
          <GJNumberLabel number={pair.number} label={pair.label}/>
        )

        )} 
      </div>
    );
}