"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Logo, Downarrow } from "@/app/Images";
import "./header.css"; // Importing the CSS file

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const mobilemenuOpen = () => {
    setMenuOpen(!isMenuOpen); // Toggle menu state
  };

  const dropDownclick = () => {
    if (window.innerWidth < 767) {
      console.log("click");
      setDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <header className={`main-header  ${isMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="header-stuff  ">
        <div className="header-box ">
          <Link href="/" className="text-black logo-link text-[20px] font-medium">
            {/* <Logo /> */}
            Sankalp Tech
          </Link>
          <nav className={`header-main-nav  `}>
            <div className={`nav-stuff  `}>
              <ul className={`main-ul  `}>
                <li className={` `}>
                  <Link href="/about" className={``}>
                    About
                  </Link>
                </li>
                <li className={`group service-menu `} onClick={dropDownclick}>
                  <Link
                    href=""
                    className={` ${isMenuOpen ? "flex !justify-between" : ""}`}
                  >
                    Services
                    <Downarrow />
                  </Link>
                  <div
                    className={`inner-services ${
                      isDropdownOpen ? "open" : "hide"
                    }`}
                  >
                    <ul className={` `}>
                      <li>
                        <Link href="/">Graphics Design Service</Link>
                      </li>
                      <li>
                        <Link href="/">Content Writing</Link>
                      </li>
                      <li>
                        <Link href="/">Wordpress Development</Link>
                      </li>
                      <li>
                        <Link href="/">Software Developemnt</Link>
                      </li>
                      <li>
                        <Link href="/">SaaS Designing</Link>
                      </li>
                      <li>
                        <Link href="/">Website Design & Development</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={`contact-menu  ${
                    isMenuOpen ? " w-full !mt-6 border-none block " : ""
                  }`}
                >
                  <Link href="/contact" className="!text-center block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="mobile-menu ">
            <div className=" menu-text" onClick={mobilemenuOpen}>
              {isMenuOpen ? "Close" : "Menu"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
