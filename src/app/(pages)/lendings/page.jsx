"use client";
import React from "react";
import Req from "../../../../public/Image/Req.png";
import Off from "../../../../public/Image/Offer.png";
import Image from "next/image";
import Link from "next/link";
import "../../../style.css";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Peter Jones",
    email: "peter.jones@example.com",
    phone: "098-765-4321",
  },
];

const Lending = () => {
  return (
    <div className="flex flex-col relative w-[100%] h-screen overflow-hidden justify-start items-center">
      <div className="my-4">
        <h1 className="text-primary text-[2em] font-semibold text-center font-rowdies">
          P2P Loans
        </h1>
        <p className=" text-center">
          Access loan opportunities while earning returns by offering loans to
          others
        </p>
      </div>
      <div className="w-[60%]">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-around items-center gap-5">
            <Link
              href={"/lendings/loanRequest"}
              className="p-4 rounded-md bg-[#fff] h-[150px] flex flex-col justify-center items-center shadow-md gap-3"
            >
              <h1 className="flex flex-col justify-start items-start text-primary text-[1.5em]">
                Request Loan
              </h1>
              <Image
                src={Req}
                alt="earth.png"
                width={700}
                height={300}
                className="w-[100px] h-[100px] rounded-full"
              />
            </Link>
            <Link
              href={"/lendings/loanOffer"}
              className="p-4 rounded-md bg-[#fff] h-[150px] flex flex-col justify-center items-center shadow-md gap-3"
            >
              <Image
                src={Off}
                alt="earth.png"
                width={700}
                height={300}
                className="w-[100px] h-[100px] rounded-full"
              />
              <h1 className="flex flex-col justify-start items-start text-primary text-[1.5em]">
                Offer Loan
              </h1>
            </Link>
            {/* <input
                    type="email"
                    id="email"
                    className="border border-primarydark rounded py-2 px-3 focus:outline-primary"
                    required
                    placeholder="Search Lender"
                  /> */}
          </div>
          {/* <h1 className="text-primarydark text-[1.2em] mt-6">
                  List of Previous Lender
                </h1>
                <div className="mt-4">
                  <TableList users={users} />
                </div> */}
      </div>
    </div>
  );
};

export default Lending;
