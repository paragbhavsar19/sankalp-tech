import { Facebook, Linkedin, Twitter } from "@/app/Images";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f6f8fb] py-16">
        <div className="w-full md:w-[1000px] mx-auto px-5 md:px-0">
          <div className="grid md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold  text-black pb-12">
                Get In Touch
                <br />
              </h2>
              <div className="mb-10">
                <h3 className="text-xl text-black mb-3">Our Office</h3>
                <p className="text-black text-base">Satellite Road, Sarkhej - Gandhinagar Hwy, <br/>Gujarat 380015 -Ahemdabad </p>
              </div>
              <div className="mb-10">
                <h3 className="text-xl text-black mb-3">Email</h3>
                <p className="text-black text-base">sales@sankaptech@gmail.com</p>
                <p className="text-black text-base">sankaptech@gmail.com</p>
              </div>
              <div className="mb-10">
                <h3 className="text-xl text-black mb-3">Contact</h3>
                <p className="text-black text-base">+91 635-643-9445</p>
                
              </div>
            </div>
            <div>
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <p className="text-black text-2xl pb-5 font-medium">Talk to us and get your project moving!</p>
                <p className="text-black text-base">Get a 30-min free consultation from the field expert. Validate your idea for free and get a detailed quote once you fill this form.</p>
                <div className="mt-8">
                  <form>
                     <div><input className=" border border-gray-400 w-full my-3 py-3 px-4 rounded-md" type="text" placeholder="Enter you name"></input></div>
                     <div><input className=" border border-gray-400 w-full my-3 py-3 px-4 rounded-md" type="email" placeholder="Enter you email"></input></div>
                     <div className="text-center mt-3 "><button type="submit" className="w-full text-white bg-[#003366] py-2.5 px-6 rounded-md">Submit</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="w-full md:w-[1320px] mx-auto px-5 md:px-0">
          <div className="py-10">
            <div className="footer_middle-wrapper gap-x-12 justify-between flex items-end">
              <Link
                href="/"
                className="text-black logo-link text-[20px] font-medium"
              >
                Sankalp Tech
              </Link>
              <div className="gap-y-4 ">
                <ul className="socialmedia gap-x-3 gap-y-0 m-0 p-0 flex">
                  <li className="text-black">Follow Us</li>
                  <li>
                    <Link href="" className="flex">
                      {" "}
                      <Linkedin />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Facebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Twitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_bottom-wrapper justify-between items-center block md:flex mt-8 pt-6 border-t-[#0f0f0f] border-t border-solid">
              <div className="footer_credit-text mb-6 md:mb-0 text-black">
                LabsMedia © 2024. All Right Reserved.
              </div>
              <ul className="gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-8 flex-wrap items-center justify-items-start flex">
                <li>
                  <a
                    target=""
                    className="footer_legal-link text-black"
                    rel="noreferrer"
                    href="https://www.labsmedia.com/terms-of-use/"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    className="footer_legal-link text-black"
                    href="/privacy-policy/"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="footer_legal-link text-black"
                    href="/cookie-policy/"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    target=""
                    className="footer_legal-link text-black"
                    rel="noreferrer"
                    href="https://www.labsmedia.com/sitemap/"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
