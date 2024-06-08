/* eslint-disable @next/next/no-img-element */
import React from 'react';

function CardMoney({mny, onSelect, selectedMoney}) {
  if (!mny) {
    return null
  }
  return (
    <div onClick={() => onSelect(mny.value)} className={`card-money  p-2 cursor-pointer ${selectedMoney === mny.value && 'border border-black dark:border-white'}`}>
      <img
        src={mny.imgUrl}
        alt={mny.name}
      />
    </div>
  );
}

export default CardMoney;
