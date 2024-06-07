/* eslint-disable @next/next/no-img-element */

import React from 'react';
import ContainerMachine from '@/components/parts/ContainerMachine';
import Header from '@/components/parts/Header';
import Footer from '@/components/parts/Footer';

function PlayMachineApp() {
  return (
    <section
      id="machine-page"
      className="min-h-screen w-full bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText"
    >
      <Header />
      <div className="body flex justify-center items-center min-h-screen pt-24 ">
        <ContainerMachine />
      </div>
      <Footer />
    </section>
  );
}

export default PlayMachineApp;
