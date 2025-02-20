import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-start justify-center gap-10 border-b border-gray-500/30 px-6 py-14 text-gray-500 md:flex-row md:px-16 lg:px-32">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex w-1/2 items-center justify-start md:justify-center">
          <div>
            <h2 className="mb-5 font-medium text-gray-900">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="transition hover:underline" href="#">Home</a>
              </li>
              <li>
                <a className="transition hover:underline" href="#">About us</a>
              </li>
              <li>
                <a className="transition hover:underline" href="#">Contact us</a>
              </li>
              <li>
                <a className="transition hover:underline" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-1/2 items-start justify-start md:justify-center">
          <div>
            <h2 className="mb-5 font-medium text-gray-900">Get in touch</h2>
            <div className="space-y-2 text-sm">
              <p>+1234567890</p>
              <p>danushka.dev</p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;