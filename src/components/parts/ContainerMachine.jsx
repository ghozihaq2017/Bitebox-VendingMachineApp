/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import ContainerSnacks from '@/components/parts/ContainerSnacks';
import ModalTakeSnacks from './ModalTakeSnacks';
import ModalInsertMoney from './ModalInsertMoney';
import { Button } from '@/components/ui/button';
import ContainerActionBuy from './ContainerActionBuy';
import { getAllSnacks, resetData, updateSnack } from '@/fetching/snack';
import { getAllMoney } from '@/fetching/money';
import formatRupiah from '@/lib/formatRupiah';
import TopMachine from './TopMachine';
import Marquee from 'react-fast-marquee';
import toast from 'react-hot-toast';
import ModalConfirmation from './ModalConfirmation';

function ContainerMachine() {
  const [snacks, setSnacks] = useState([]);
  const [money, setMoney] = useState([]);
  const [balance, setBalance] = useState(0);
  const [purchasedSnacks, setPurchasedSnacks] = useState([]);

  const isDisabled = purchasedSnacks.length === 0;

  useEffect(() => {
    const getSnacksAndMoney = async () => {
      const resultSnack = await getAllSnacks();
      const resultMoney = await getAllMoney();
      // console.log(result);
      setSnacks(resultSnack);
      setMoney(resultMoney);
    };
    getSnacksAndMoney();
  }, []);

  const handleInsertMoney = (amount) => {
    try {
      setBalance(balance + amount);
      toast.success(`Successfully inserted ${formatRupiah(amount)}`);
    } catch (err) {
      toast.error('Failed insert money');
    }
  };

  const handlePurchase = async (snack) => {
    if (balance >= snack.price && snack.stock > 0) {
      const updatedSnack = { ...snack, stock: snack.stock - 1 };
      await updateSnack(snack.id, updatedSnack);
      setBalance(balance - snack.price);
      const updatedSnacks = snacks.map((s) => (s.id === snack.id ? updatedSnack : s));
      setSnacks(updatedSnacks);

      setPurchasedSnacks((prev) => {
        const existingSnack = prev.find((s) => s.id === snack.id);
        if (existingSnack) {
          return prev.map((s) => (s.id === snack.id ? { ...s, total: s.total + 1 } : s));
        } else {
          return [...prev, { ...snack, total: 1 }];
        }
      });

      toast.success('Successfully purchased snack');
    } else {
      // alert('Insufficient balance or out of stock!');
      toast.error('Insufficient balance or out of stock!');
    }
  };
  // console.log(snacks);

  const handleReset = async () => {
    try {
      await resetData();
      const resultSnack = await getAllSnacks();
      setSnacks(resultSnack);
      setBalance(0);
      setPurchasedSnacks([]);
      toast.success('Successfully reset vending machine to default');
    } catch (error) {
      console.error('Error resetting data:', error);
      toast.success('Failed reset vending machine to default');
    }
  };

  const handleCollectMoney = () => {
    if (balance > 0) {
      setBalance(0);
      toast.success('Successfully collected the money');
    } else {
      toast.error("You don't have any money");
    }
  };

  if (!snacks || !money) {
    return <h1>LOADINGG</h1>;
  }
  return (
    <div className="container-vending-machine shadow-2xl  h-[95svh] w-full px-2 md:px-0 md:w-[550px]">
      <TopMachine />
      <div className="main-machine shadow-inner rounded-b-md bg-primaryVm dark:bg-primaryVmDark h-5/6 w-full p-2 flex ">
        <div className="snacks-machine shadow-inner  bg-primaryVm dark:bg-primaryVmDark h-full w-3/5 ">
          <ContainerSnacks snacks={snacks} />
          <div className="box-boughtSnack  w-full h-1/6 bg-primaryVm dark:bg-primaryVmDark">
            {!isDisabled ? (
              <ModalTakeSnacks
                purchasedSnacks={purchasedSnacks}
                setPurchasedSnacks={setPurchasedSnacks}
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full">
                <Button
                  disabled={isDisabled}
                  className="w-4/6  bg-blue-800 text-lightBg hover:bg-blue-900 hover:text-lightBg"
                >
                  Take Snacks
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="control-machine w-2/5 bg-primaryVm dark:bg-primaryVmDark relative">
          <ModalInsertMoney money={money} onInsertMoney={handleInsertMoney} />
          <div className="lcd-container p-2 text-white">
            <div className="lcd-machine bg-lightBg dark:bg-darkBg dark:text-lightBg text-darkBg h-10 w-full mb-2 flex justify-center items-center">
              <p>Saldo: {formatRupiah(balance)}</p>
            </div>
            <div className="lcd-machine bg-lightBg dark:bg-darkBg dark:text-lightBg text-darkBg h-10 w-full flex justify-center items-center">
              <Marquee>
                <p className="mr-5">Vending Machine App by Ghozi Izzulhaq</p>
              </Marquee>
            </div>
          </div>
          <ContainerActionBuy snacks={snacks} handlePurchase={handlePurchase} />
          <ModalConfirmation
            buttonName={'Collect Money'}
            action={handleCollectMoney}
            message={'Are you sure you want to take the money?'}
          />
          <div className="btn-reset absolute w-full bottom-5">
            <ModalConfirmation
              buttonName={'Reset Machine'}
              action={handleReset}
              message={'Are you sure you want to reset vending machine?'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerMachine;
