import React from 'react'

interface GJNumberLabelProps {
  number: number,
  label: string
}

export const GJNumberLabel: React.FC<GJNumberLabelProps> = ({number, label}) => {
    return (
      <div className="p-2 bg-white rounded">
        <div>{number}</div>
        <div className='text.lg font-bold'>{label} </div>
      </div>
    );
}