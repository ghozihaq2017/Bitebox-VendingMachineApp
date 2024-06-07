import Link from 'next/link';
import React from 'react';
import ModeToggle from '@/components/parts/ModeToggle';


function Header() {
  return (
    <header>
      <div className="navbar drop-shadow-xl fixed z-10 w-full bg-lightBg dark:bg-primaryVmDark  opacity-85 backdrop-blur-md">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl ml-0 md:ml-20">
            Bitebox
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex justify-center items-center">
            <li>
            </li>
            <li>
              <a>
                <ModeToggle />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
