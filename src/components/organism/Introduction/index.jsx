import Image from "next/image";
import React from "react";
import Earth from "../../../../public/Image/earth.png";
import Link from "next/link";
import "../../../../src/style.css";

// import Earth from '../../../../public/Image/earth.png'

const Introduction = () => {
  return (
    <div className="flex justify-between items-center gap-10 bg-white h-[100vh]">
        <div className="px-10 md:w-[600px]">
          <h1 className="text-[2.5em] font-semibold">Experience Fintech Evolution with FinCove</h1>
          <p className="text-primary">
            Step into and take advantage of the latest <br /> Evolution Embracing
            Web3 for a New Financial Frontier
          </p>
          <div className="flex flex-col md:flex-row gap-10 mt-5">
            <Link
              href={"/auth/signin"}
              className="md:flex text-white py-2 px-4 rounded signin"
            >
              Sign In
            </Link>
            <Link
              href={"/auth/signup"}
              className="md:flex text-primary py-2 px-4 rounded border border-primary hover:border-[#BF894F]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      <Image
        src={Earth}
        alt="earth.png"
        width={700}
        height={300}
        className="w-[500px] h-[700px]"
      />
    </div>
  );
};

export default Introduction;
