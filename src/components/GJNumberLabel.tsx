import React from 'react'

interface GJNumberLabelProps {
  number: number,
  label: string
}

export const GJNumberLabel: React.FC<GJNumberLabelProps> = ({number, label}) => {
    return (
      <div>
        <span>{label}</span>
        <span>{number}</span>
      </div>
    );
}