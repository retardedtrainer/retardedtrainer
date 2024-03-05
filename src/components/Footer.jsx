import React from "react";
import pokemon from "../../public/image-removebg-preview_8.png";
import Image from "next/image";
import x from "../../public/x.png";
import tg from "../../public/Telegram.png";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer items-center p-3 bg-blue-800 text-neutral-content">
        <aside className="items-center grid-flow-col">
          <Image src={pokemon} className=" hidden md:flex w-28" />
          <p className="text-white md:text-xl ">
            Copyright © 2024 - All right reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 place-self-center md:justify-self-end">
          <a>
            <Image src={tg} className="w-8" />
          </a>
          <a>
            <Image src={x} className="" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
