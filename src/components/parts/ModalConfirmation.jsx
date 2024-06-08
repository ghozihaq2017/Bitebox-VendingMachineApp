/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog';



function ModalConfirmation({ message, action, buttonName }) {
  console.log(buttonName);
  return (
    <Dialog>
      <DialogTrigger asChild className="p-2">
        <div>
          <Button
            variant="outline"
            className={`w-full  ${
              buttonName === 'Reset Machine'
                ? ' bg-red-800 text-lightBg hover:bg-red-900 hover:text-lightBg'
                : ' bg-blue-800 text-lightBg hover:bg-blue-900 hover:text-lightBg'
            }`}
          >
            {buttonName}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-primaryVm dark:bg-primaryVmDark  w-11/12 md:w-full">
        <div className="message-modal w-full min-h-40  flex justify-center items-center">
          <h3 className="text-xl">{message}</h3>
        </div>
        <DialogFooter className="sm:justify-evenly justify-evenly">
          <DialogClose
            asChild
            className="bg-blue-800 hover:bg-blue-950 dark:bg-lightBg dark:hover:bg-primaryVm  w-1/3 "
          >
            <Button onClick={action}>Yes</Button>
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

export default ModalConfirmation;
