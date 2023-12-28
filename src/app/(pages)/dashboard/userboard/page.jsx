"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Lend from "../../../../../public/Image/give.png";
import Download from "../../../../../public/Image/download.png";
import Wallet from "../../../../../public/Image/wallet2.png";
import Ads from "../../../../../public/Image/ads.png";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdArrowUpward, MdFileCopy } from "react-icons/md";
import "../../../../style.css";

const Diagram = () => {
  const array = [
    {
      src: Lend,
      text: "Loan requested from Abel",
      time: "6 minutes",
      amount: "+N30,000",
    },
    {
      src: Download,
      text: "Application Login",
      time: "10:00am",
      amount: "",
    },
    {
      src: Lend,
      text: "Accepted Loan Request",
      time: "12:30px",
      amount: "+ N30,000",
    },
    {
      src: Download,
      text: "Application Login",
      time: "11:00pm",
      amount: "",
    },
    {
      src: Wallet,
      text: "Wallet Transfer",
      time: "7:35px",
      amount: "+N30,000",
    },
  ];

  const income = [
    {
      title: "Total Expenses",
      amount: "N100,000",
      rate: "2.31%",
      date: "From 2 months",
    },
    {
      title: "Total Income",
      amount: "N300,000",
      rate: "1.31%",
      date: "From last months",
    },
    {
      title: "Loan Debt",
      amount: "N10,000",
      rate: "2.31%",
      date: "From last months",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center pb-[10%] md:pb-0 mb-0 md:mb-[8%]">
      <div className="md:w-[80%] p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center md:h-[200px]">
          <div className="cryptoDiv text-white">
            <p className="text-white">N ******</p>
            <div className="flex">
              <p className="text-white pr-2">903274983449</p>
              <MdFileCopy size={20} className="text-white" />
            </div>
            <div className="flex gap-4 mt-4">
              <span className="flex justify-center items-center bg-yellow-400 p-1 rounded-md">
                <MdArrowUpward className="text-[10px] text-black" />
                <p className="text-[10px] text-black">Top Up</p>
              </span>
              <span className="flex justify-center items-center bg-yellow-400 p-1 rounded-md">
                <MdArrowUpward className="text-[10px] text-black" />
                <p className="text-[10px] text-black">Withdraw</p>
              </span>
            </div>
          </div>
          <div className="cryptoDiv text-white">
            <p className="text-white">**Crypto**</p>
            <div className="flex">
              <p className="text-white pr-2">0a92dheUdU3489Wy</p>
              <MdFileCopy size={20} className="text-white" />
            </div>
            <div className="flex gap-4 mt-4">
              <span className="flex justify-center items-center bg-yellow-400 p-1 rounded-md">
                <MdArrowUpward className="text-[10px] text-black" />
                <p className="text-[10px] text-black">Top Up</p>
              </span>
              <span className="flex justify-center items-center bg-yellow-400 p-1 rounded-md">
                <MdArrowUpward className="text-[10px] text-black" />
                <p className="text-[10px] text-black">Withdraw</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-3 gap-10 py-6 mt-10">
          {income.map((list, i) => (
            <div className="border border-primary p-4 rounded-md" key={i}>
              <div className="flex justify-between items-center pb-4 border-b-primary border border-t-transparent border-r-transparent border-l-transparent">
                <h2 className="font-semibold text-[18px]">{list.title}</h2>
                <MdArrowForward className="text-primary" size={30} />
              </div>
              <div className="py-4">
                <h1 className="text-[1.5em] font-semibold">{list.amount}</h1>
                <span className="flex justify-start items-center gap-2">
                  <span className="flex justify-center items-center bg-yellow-400 p-1 rounded-md">
                    <MdArrowUpward className="text-[10px]" />{" "}
                    <p className="text-[10px]">{list.rate}</p>
                  </span>
                  <p className="text-[13px]">{list.date}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-10 py-6 md:mb-[8%]">
          <div className="md:border-r-primary border-r-transparent border border-t-transparent border-b-transparent border-l-transparent md:px-8">
            <button className="py-3 px-4 rounded-md bg-primary text-white text-[15px]">
              Recent Activities
            </button>
            <p className="pt-4">Today</p>
            <div className="flex justify-between items-center gap-5">
              <div className="flex justify-start items-center py-4">
                <Image
                  src={Lend}
                  alt="earth.png"
                  width={700}
                  height={300}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="flex flex-col justify-start items-start pl-2">
                  <h2 className="font-semibold text-[18px] text-start text-primary">
                    Loan requested from Abel
                  </h2>
                  <p className="text-start text-primary">12:30px</p>
                </div>
              </div>
              <p className="text-[15px] text-start">+N45,000</p>
            </div>
            <div className="w-[100%]">
              <p>Yesterday</p>
              {array.map((usage, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-5"
                >
                  <div className="flex justify-start items-center py-4">
                    <Image
                      src={usage.src}
                      alt="earth.png"
                      width={700}
                      height={300}
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <div className="flex flex-col justify-start items-start pl-2">
                      <h2 className="font-semibold text-[18px] text-start text-primary">
                        {usage.text}
                      </h2>
                      <p className="text-start text-primary">{usage.time}</p>
                    </div>
                  </div>
                  <p className="text-[15px] text-start">{usage.amount}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src={Ads}
            alt="earth.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Diagram;
