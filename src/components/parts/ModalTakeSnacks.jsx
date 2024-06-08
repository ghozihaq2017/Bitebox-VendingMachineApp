/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CardMoney from './CardMoney';
import formatRupiah from '@/lib/formatRupiah';
import toast from 'react-hot-toast';

function ModalTakeSnacks({ purchasedSnacks, setPurchasedSnacks }) {
  if (!purchasedSnacks) {
    return null;
  }

  const handleTakeStacks = () => {
    setPurchasedSnacks([]);
    toast.success('Successfully retrieved the snacks');
  };

  const isDisabled = purchasedSnacks.length === 0;

  // console.log(purchasedSnacks);
  return (
    <Dialog>
      <DialogTrigger asChild className="p-2">
        <div className="flex justify-center items-center w-full h-full">
          <Button
            disabled={isDisabled}
            variant="outline"
            className="w-4/6  bg-blue-800 text-lightBg hover:bg-blue-900 hover:text-lightBg"
          >
            Take Snacks
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-primaryVm dark:bg-primaryVmDark  w-11/12 md:w-full">
        <DialogHeader>
          <DialogTitle>Take Snacks</DialogTitle>
          <DialogDescription>Are you sure you want to take your snacks?</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {purchasedSnacks.map((snack) => {
            return (
              <div
                className="card-snack py-3 border border-black dark:border-white flex flex-col justify-center items-center  "
                key={snack.id}
              >
                <div className="images-snack w-20">
                  <img src={snack.imgUrl} alt={snack.name} />
                </div>
                <div className="info-snack text-sm">
                  <p>
                    <span>{snack.name}</span> x <span>{`${snack.total}pcs`}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => setPurchasedSnacks([])} type="button">
              Take Snacks
            </Button>
          </DialogClose>
        </DialogFooter> */}
        <DialogFooter className="sm:justify-evenly justify-evenly">
          <DialogClose
            asChild
            className="bg-blue-800 hover:bg-blue-950 dark:bg-lightBg dark:hover:bg-primaryVm  w-1/3 "
          >
            <Button onClick={handleTakeStacks} type="button">
              Take Snacks
            </Button>
          </DialogClose>
          <DialogClose
            asChild
            className="bg-red-800 hover:bg-red-950 dark:bg-lightBg dark:hover:bg-primaryVm w-1/3"
          >
            <Button>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalTakeSnacks;
