import React from 'react';

function ContainerActionBuy({ snacks,handlePurchase }) {
  if (!snacks) {
    return null
  }
  return (
    <div className="container-action-buy grid grid-cols-2 gap-3 mt-5 px-4 py-1">
      {snacks.map((snack) => (
        <button onClick={() => handlePurchase(snack)} key={snack.id} className="btn-buy bg-slate-100 px-3 py-2">
          {snack.snackCode}
        </button>
      ))}
    </div>
  );
}

export default ContainerActionBuy;
