"use client";
import React, { useState } from "react";
import Link from "next/link";
import  {Logo, Downarrow } from "@/app/Images";


const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false); 

    const mobilemenuOpen = () => {
        setMenuOpen(!isMenuOpen); // Toggle menu state
    }

  return (
    <header className={`z-[998] w-full bg-transparent fixed pt-12 px-[5%] top-0 bottom-auto inset-x-0 ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        
      <div className="z-[999] justify-center items-center flex relative">
        <div className="h-full min-h-[3rem] gap-x-6 gap-y-4 bg-white justify-between items-center flex shadow-[0_2px_17px_rgba(0,0,0,0.1)] max-w-[922px] w-full px-5 rounded-[3rem]">
          <Link href="/" className="text-blue-500">
            <Logo />
          </Link>
          <nav className={`md:block ${isMenuOpen ? 'block w-full absolute left-0 top-16 bg-white rounded-[3rem] p-5' : 'hidden'}`}>
          

            <div className={`h-full gap-x-5 items-center flex ${isMenuOpen ? 'opacity-100 w-full translate-x-0 translate-y-0 transition-opacity duration-[3s] ease-linear delay-[5s] text-center h-[55dvh] bg-[white] flex-col gap-x-5 rounded-[1.25rem]' : ''}`}>
            
            
              <ul className={`gap-x-5  flex relative m-0 p-0" ${isMenuOpen ? "w-full flex-col items-start": "items-center" }`}>
                <li className={`m-0  z-[900] ${isMenuOpen ? "border-b border-[#dfdfdf] w-full ": ""}`}>
                  <Link
                    href="/about"
                    className={`  font-medium  no-underline gap-x-2 text-black hover:text-[#003366] flex-row justify-start items-center flex whitespace-nowrap text-left relative mx-auto px-0  ${isMenuOpen ? "text-lg py-2.5" : "text-[0.925rem] py-2"}`}
                  >
                    About
                  </Link>
                </li>
                <li className={`group m-0  z-[900] ${isMenuOpen ? "border-b border-[#dfdfdf] w-full ": ""}`}>
                  <Link
                    href=""
                    className={`  font-medium  no-underline gap-x-2 text-black hover:text-[#003366] flex-row justify-start items-center flex whitespace-nowrap text-left relative mx-auto px-0  ${isMenuOpen ? "text-lg py-2.5 justify-between" : "text-[0.925rem] py-2"}`}
                  >
                    Services
                    <Downarrow/>
                  </Link>
                  <div className={`mobile-services opacity-0 bg-transparent block invisible  
                  translate-y-[15px] translate-x-[-71%] transition-all duration-[0.3s] ease-[ease-in-out] 
                  min-w-full absolute pt-8
                  group-hover:absolute group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:translate-x-[-71%] ${isMenuOpen ? "relative opacity-100 translate-x-0 translate-y-0 visible" : ""}
                  `}>
                    <ul className={`gap-x-6 gap-y-6 grid-rows-[auto_auto] grid-cols-[16rem_16rem] auto-cols-[1fr] grid bg-white border shadow-[0_2px_18px_rgba(0,0,0,0.1)] mt-0 p-6 rounded-[1.25rem] border-solid border-[#003366]  ${isMenuOpen ? "grid-rows-[auto] grid-cols-[16rem] shadow-none border-[none]": "" }`  }>
                      <li className="m-0"> <Link href="/" className="gap-x-3 items-start no-underline transition-[color] duration-[0.4s] flex text-base text-black hover:text-[#003366]" >Graphics Design Service</Link> </li>
                      <li className="m-0"> <Link href="/" className="gap-x-3 items-start no-underline transition-[color] duration-[0.4s] flex text-base text-black hover:text-[#003366]" >Content Writing</Link> </li>
                      <li className="m-0"> <Link href="/" className="gap-x-3 items-start no-underline transition-[color] duration-[0.4s] flex text-base text-black hover:text-[#003366]" >Wordpress Development</Link> </li>
                      <li className="m-0"> <Link href="/" className="gap-x-3 items-start no-underline transition-[color] duration-[0.4s] flex text-base text-black hover:text-[#003366]" >Software Developemnt</Link> </li>
                      <li className="m-0"> <Link href="/" className="gap-x-3 items-start no-underline transition-[color] duration-[0.4s] flex text-base text-black hover:text-[#003366]" >SaaS Designing</Link> </li>
                      <li className="m-0"> <Link href="/" className="gap-x-3 items-start no-underline transition-[color] duration-[0.4s] flex text-base text-black hover:text-[#003366]" >Website Design & Development</Link> </li>
                    </ul>
                  </div>
                </li>
                <li className={`m-0  z-[900] ${isMenuOpen ? " w-full mt-8": ""}`}>
                <Link
                    href="/contact"
                    className="cursor-pointer text-sm px-4 py-2 text-white bg-[#003366] rounded-full border border-transparent  hover:bg-[#d9f0ff] hover:text-black transition-all"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="h-[1.875rem] min-w-0 text-[black] text-center bg-[#00ce84] text-base font-medium leading-[normal] no-underline transition-[background-color] duration-[0.4s] block md:hidden float-right cursor-pointer select-none relative px-4 py-0 rounded-[3rem] border-[blue]">
              <div className="text-[black] text-center text-base font-medium leading-[normal] cursor-pointer pt-1" onClick={mobilemenuOpen}>{isMenuOpen ? 'Close' : 'Menu'}</div>
              
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
