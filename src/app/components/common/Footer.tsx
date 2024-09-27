import { Facebook, Linkedin,  Twitter } from "@/app/Images";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full md:w-[1320px] mx-auto px-5 md:px-0">
        <div className="py-10">
          <div className="footer_middle-wrapper gap-x-12 justify-between flex items-end">
            <Link href="/" className="text-black logo-link text-[20px] font-medium">Sankalp Tech</Link>
            <div className="gap-y-4 ">
              <ul className="socialmedia gap-x-3 gap-y-0 m-0 p-0 flex">
                <li className="text-black">Follow Us</li>
                <li>
                    <Link href="" className="flex"> <Linkedin/></Link>
                </li>
                <li>
                    <Link href=""><Facebook/></Link>
                </li>
                <li>
                    <Link href=""><Twitter/></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom-wrapper justify-between items-center block md:flex mt-8 pt-6 border-t-[#0f0f0f] border-t border-solid">
            <div className="footer_credit-text mb-6 md:mb-0 text-black">LabsMedia © 2024. All Right Reserved.</div>
                <ul className="gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-8 flex-wrap items-center justify-items-start flex">
                    <li><a  target="" className="footer_legal-link text-black" rel="noreferrer" href="https://www.labsmedia.com/terms-of-use/">Terms of Use</a></li>
                    <li><a  className="footer_legal-link text-black" href="/privacy-policy/">Privacy Policy</a></li>
                    <li><a  className="footer_legal-link text-black" href="/cookie-policy/">Cookie Policy</a></li>
                    <li><a  target="" className="footer_legal-link text-black" rel="noreferrer" href="https://www.labsmedia.com/sitemap/">Sitemap</a></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
