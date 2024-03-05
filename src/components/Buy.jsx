import Image from "next/image";
import React from "react";
import pokebase from "../../public/baba.jpg";
import retard2 from "../../public/IMG_1111.png";

export const Buy = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:w-10/12 m-auto">
      <div className=" flex">
        <Image src={retard2} className="rounded-lg" />
      </div>
      <div className="flex m-2 lg:m-5">
        <div className="flex flex-col items-center  text-black gap-4">
          <div className=" bg-yellow-300 rounded-lg flex flex-col p-4 items-center  lg:w-2/3 ">
            <h1>step1</h1>
            <p>
            First and foremost, make sure you have Ethereum (ETH) in your wallet.<br /> If you don't, you can purchase ETH on an exchange like Coinbase, Binance, or any other platform that supports Ethereum.<br /> Create an account, follow the required verification process, and buy ETH using your preferred payment method.
            </p>
          </div>
          <div className=" bg-yellow-300 rounded-lg flex flex-col p-4  items-center lg:w-2/3 ">
            <h1>step2</h1>
            <p>
            Once you have ETH, it's time to transfer them to the L2 of your choice that supports $BLUE tokens,<br /> using Orbiter Finance for the bridge. <br />

            Go to Orbiter Finance. Ensure you're on the correct site to avoid scams. <br />
            Connect your wallet, such as MetaMask, by clicking on "Connect Wallet" at the top right of the page. <br />
            Select "Ethereum" as the source network and the L2 network of your choice (that supports $BLUE) as the destination. <br />
            Enter the amount of ETH you want to transfer and confirm the transaction in your wallet. Remember to account for transaction fees to ensure you have enough ETH to cover them. <br />
            </p>
          </div>
          <div className=" bg-yellow-300 rounded-lg flex flex-col p-4 items-center lg:w-2/3">
            <h1>step3</h1>
            <p>
            Now that your ETH is on the L2, you're ready to buy $BLUE tokens. <br />

            Visit Uniswap and connect the same wallet you used for the transfer. <br />
            Make sure your wallet is switched to the correct L2 network where you've transferred your ETH. <br />
            Select "Swap" from the menu.  <br />
            In the "From" field, make sure ETH is selected. In the "To" field, search for and select $BLUE. <br />
            Enter the amount of ETH you want to exchange for $BLUE. Uniswap will show you how much $BLUE you'll receive. <br />
            Review the price and transaction fees, then confirm the transaction in your wallet. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
