import React from 'react';
import ButtonAction from '../elements/ButtonAction';

function ContainerActionBuy({ snacks, handlePurchase }) {
  if (!snacks) {
    return null;
  }
  return (
    <div className="container-action-buy grid grid-cols-2 gap-1 md:gap-3 mt-5 md:px-4 px-1 py-1">
      {snacks.map((snack) => (
        <ButtonAction key={snack.id} handlePurchase={handlePurchase} snack={snack} />
      ))}
    </div>
  );
}

export default ContainerActionBuy;
