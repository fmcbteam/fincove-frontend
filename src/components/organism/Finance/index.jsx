import Image from "next/image";
import React from "react";
import Wallet from "../../../../public/Image/wallet.png";
import Send from "../../../../public/Image/send.png";
import Report from "../../../../public/Image/report.png";
import Refund from "../../../../public/Image/refund.png";
import Secure from "../../../../public/Image/secure.png";
import Chat from "../../../../public/Image/chat.png";
import "../../../../src/style.css";
import Link from "next/link";

const Finance = () => {
  const array = [
    {
      src: Wallet,
      text: "Easy to create wallet",
      paragraph: "Fincove enable users to create a secure instant wallet",
    },
    {
      src: Send,
      text: "Send & Receive anytime",
      paragraph:
        "With Fincove sending and receiving of crypto and fiat currency as been made easy",
    },
    {
      src: Report,
      text: "Reports & analytics",
      paragraph:
        "Fincove let you have full insight of your financial projection",
    },
    {
      src: Refund,
      text: "Get Refund on your lending",
      paragraph: "Repayment made easy on our P2P lending structure",
    },
    {
      src: Secure,
      text: "Secured-grade Security",
      paragraph: "Enjoy unlimited security system on your finance",
    },
    {
      src: Chat,
      text: "24/7 Customer Support",
      paragraph:
        "Fincove customer service are available 24/7 to answer your complains and request",
    },
  ];

  return (
    <div className="w-[100%] px-4 py-10 text-center flex-col flex justify-center items-center bg-white">
        <h1 className="self-start items-start text-[#5B2682] font-semibold text-[2.5em] px-4">Why Fincove is for you?</h1>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {array.map((list, index) => (
          <div key={index} className="p-4 rounded-md bg-[#FFB3ED] h-[300px] flex flex-col justify-center items-center">
            <Image
              src={list.src}
              alt="earth.png"
              width={700}
              height={300}
              className="w-[100px] h-[100px] p-4 bg-primary rounded-full"
            />
            <h2 className="py-4 font-semibold text-[20px] text-center">
              {list.text}
            </h2>
            <p className="text-[15px] text-center">{list.paragraph}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-5 text-center">
        <Link
          href={"/auth/signin"}
          className="md:flex text-white py-2 px-4 rounded signin"
        >
          Sign In
        </Link>
        <Link
          href={"/auth/signup"}
          className="md:flex text-primary py-2 px-4 rounded border-2 border-primary hover:border-[#BF894F]"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Finance;
