import React from "react";
import Lend from "../../../../public/Image/lend.png";
import Coin from "../../../../public/Image/coin.png";
import Report from "../../../../public/Image/report.png";
import Invest from "../../../../public/Image/invest.png";
import Image from "next/image";

const Diagram = () => {
  const array = [
    {
      src: Coin,
      text: "Easy to create wallet",
      paragraph: "Fincove enable users to create a secure instant wallet",
    },
    {
      src: Lend,
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
      src: Invest,
      text: "Get Refund on your lending",
      paragraph: "Repayment made easy on our P2P lending structure",
    },
  ];

  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center items-center w-[100%]">
        {array.map((list, index) => (
          <div
            key={index}
            className="p-4 rounded-md bg-[#FFB3ED] h-[200px] flex flex-col justify-center items-center"
          >
            <Image
              src={list.src}
              alt="earth.png"
              width={700}
              height={300}
              className="w-[60px] h-[60px] p-4 bg-primary rounded-full"
            />
            <h2 className="py-4 font-semibold text-[20px] text-center">
              {list.text}
            </h2>
            <p className="text-[15px] text-center">{list.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagram;
