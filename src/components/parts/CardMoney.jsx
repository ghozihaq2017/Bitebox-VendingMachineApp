/* eslint-disable @next/next/no-img-element */
import React from 'react';

function CardMoney({mny, onSelect, selectedMoney}) {
  if (!mny) {
    return null
  }
  return (
    <div onClick={() => onSelect(mny.value)} className={`card-money border-emerald border-2 p-2 cursor-pointer ${selectedMoney === mny.value ? 'border-emerald' : 'border-black'}`}>
      <img
        src={mny.imgUrl}
        alt={mny.name}
      />
    </div>
  );
}

export default CardMoney;
