/* eslint-disable @next/next/no-img-element */
import formatRupiah from '@/lib/formatRupiah';
import React from 'react';

function CardSnack({snack}) {
  return (
    <div className="card-snack border border-primaryVm  rounded-lg flex flex-col justify-center items-center ">
      <div className="code-snack font-semibold  w-full texy-left ">
        <h3 className='max-w-8 p-1 bg-primaryVm rounded-tl-lg rounded-br-lg dark:bg-primaryVmDark'>{snack.snackCode}</h3>
      </div>
      <div className="images-snack w-20">
        <img
          src={snack.imgUrl}
          alt={snack.name}
        />
      </div>
      <div className="info-snack text-xs bg-primaryVm rounded-b-lg  dark:bg-primaryVmDark  w-full text-center">
        <p><span>{snack.name}</span> | <span>{`${snack.stock}pcs`}</span></p>
        <p>{formatRupiah(snack.price)}/pcs</p>
      
      </div>
    </div>
  );
}

export default CardSnack;
