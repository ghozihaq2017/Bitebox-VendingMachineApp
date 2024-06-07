/* eslint-disable @next/next/no-img-element */
import formatRupiah from '@/lib/formatRupiah';
import React from 'react';

function CardSnack({snack}) {
  return (
    <div className="card-snack border border-primaryVm flex flex-col justify-center items-center ">
      <div className="code-snack">
        <h3>{snack.snackCode}</h3>
      </div>
      <div className="images-snack w-20">
        <img
          src={snack.imgUrl}
          alt={snack.name}
        />
      </div>
      <div className="info-snack text-sm">
        <p><span>{snack.name}</span> | <span>{`${snack.stock}pcs`}</span></p>
        <p>{formatRupiah(snack.price)}/pcs</p>
      
      </div>
    </div>
  );
}

export default CardSnack;
