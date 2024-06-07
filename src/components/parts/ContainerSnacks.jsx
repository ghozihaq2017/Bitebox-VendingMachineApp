import React, { useEffect, useState } from 'react';
import CardSnack from '@/components/parts/CardSnack';

function ContainerSnacks({ snacks }) {
  if (!snacks) {
    return <h1>LOADINGG</h1>;
  }

  return (
    <div className="stock-snacks w-full h-5/6 bg-lightBg dark:bg-darkBg rounded-2xl grid grid-cols-2 gap-2 p-2">
      {snacks.map((snack) => (
        <CardSnack key={snack.id} snack={snack} />
      ))}
    </div>
  );
}

export default ContainerSnacks;
