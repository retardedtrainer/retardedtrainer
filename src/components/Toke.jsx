import Image from "next/image";
import React from "react";
import pokeball from "../../public/pngegg.png";

export const Toke = () => {
  return (
    <div className="flex flex-col items-center justify-center m-10">
      <h1 className="text-yellow-400 font font-extrabold text-center text-4xl">
        TOKENOMICS
      </h1>

      <div className="flex lg:flex-row flex-col gap-3">
        <Image src={pokeball} className=" w-24 lg:w-32  m-5" />
        <div className="flex items-center">
          <div className=" justify-center  bg-white rounded-lg p-4  gap-4  shadow-primary shadow-lg flex flex-col font-bold">
            <p>SUPPLY: 1M</p>
            <p>TAX: 0/0</p>
            <p>TICKERS: $BLUE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
