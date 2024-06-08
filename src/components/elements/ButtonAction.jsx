import React from 'react';
import ModalConfirmation from '../parts/ModalConfirmation';

function ButtonAction({ handlePurchase, snack }) {
  const handlePurchaseSnack = () => {
    handlePurchase(snack);
  };
  return (
    <div>
      <ModalConfirmation
        buttonName={snack.snackCode}
        action={handlePurchaseSnack}
        message={`Are you sure to buy ${snack.name} ?`}
      />
    </div>
  );
}

export default ButtonAction;
