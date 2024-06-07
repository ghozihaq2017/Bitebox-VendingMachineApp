import React from 'react';

function ContainerActionBuy({ snacks,handlePurchase }) {
  if (!snacks) {
    return null
  }
  return (
    <div className="container-action-buy grid grid-cols-2 gap-3 mt-5 px-4 py-1">
      {snacks.map((snack) => (
        <button onClick={() => handlePurchase(snack)} key={snack.id} className="btn-buy bg-blue-800 text-lightBg hover:bg-blue-900 rounded-md hover:text-lightBg px-3 py-2">
          {snack.snackCode}
        </button>
      ))}
    </div>
  );
}

export default ContainerActionBuy;
