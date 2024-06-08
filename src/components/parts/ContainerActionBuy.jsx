import React from 'react';
import ModalConfirmation from './ModalConfirmation';
import ButtonAction from '../elements/ButtonAction';

function ContainerActionBuy({ snacks,handlePurchase }) {
  if (!snacks) {
    return null
  }
  return (
    <div className="container-action-buy grid grid-cols-2 gap-1 md:gap-3 mt-5 md:px-4 px-1 py-1">
      {snacks.map((snack) => (
        // <ModalConfirmation action={handlePurchase(snack)} message={`Are you sure to buy ${snack.name} ?`} key={snack.id}/>
        <ButtonAction key={snack.id} handlePurchase={handlePurchase} snack={snack} />
        // <button onClick={() => handlePurchase(snack)} key={snack.id} className="btn-buy bg-blue-800 text-lightBg hover:bg-blue-900 rounded-md hover:text-lightBg px-3 py-2">
        //   {snack.snackCode}
        // </button>
      ))}
    </div>
  );
}

export default ContainerActionBuy;
