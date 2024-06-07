/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Marquee from 'react-fast-marquee';

function TopMachine() {
  return (
    <div className="top-machine shadow-inner w-full rounded-t-md  bg-primaryVm px-3 py-5  dark:bg-primaryVmDark h-1/6">
      <div className="container-logos h-full flex justify-center items-center">
        <Marquee>
          <div className="logo max-h-10 max-w-20 mr-10">
            <img
              src="https://res.cloudinary.com/dshibiync/image/upload/v1717778600/pngwing.com_9_zvp7rt.png"
              alt="OREO"
            />
          </div>
          <div className="logo max-h-10 max-w-20 mr-10">
            <img
              src="https://res.cloudinary.com/dshibiync/image/upload/v1717778601/pngegg_pawjf2.png"
              alt="Tango"
            />
          </div>
          <div className="logo max-h-10 max-w-20 mr-10">
            <img
              src="https://res.cloudinary.com/dshibiync/image/upload/v1717778599/images-removebg-preview_q8or1w.png"
              alt="Biskuat"
            />
          </div>
          <div className="logo max-h-10 max-w-20 mr-10">
            <img
              src="https://res.cloudinary.com/dshibiync/image/upload/v1717778602/04e2a475b0634ad821b07a25bc4a7b5c-removebg-preview_olsgts.png"
              alt="Silverqueen"
            />
          </div>
          <div className="logo max-h-10 max-w-20 mr-10">
            <img
              src="https://res.cloudinary.com/dshibiync/image/upload/v1717779853/Chitato_xvudub.png"
              alt="Chitato"
            />
          </div>
        </Marquee>
      </div>
      {/* <Marquee>
    <h4>tes</h4>
    <h4>tis</h4>
    <h4>tos</h4>
  </Marquee> */}
    </div>
  );
}

export default TopMachine;
