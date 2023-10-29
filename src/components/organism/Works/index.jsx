import React from "react";
import Image from "next/image";
import Person from "../../../../public/Image/person.png";
import Profile from "../../../../public/Image/profile.png";
import Transfer from "../../../../public/Image/transfer.png";
import Earn from "../../../../public/Image/earn.png";
import "../../../../src/style.css";
import Link from "next/link";

const Works = () => {
  return (
    <div className="w-[100%] bg-white px-4 py-10 text-center flex-col flex justify-center items-center h-auto">
      <h1 className="text-[#5B2682] font-semibold text-[2.5em] px-4">
        How Fincove works
      </h1>
      <p>
        Fincove is a friendly user- centric web app that enables user to easily
        navigate through and start <br /> enjoying unlimited P2P lending and
        uninterrupted insight of financial projection
      </p>
      <div className="md:w-[80%] w-[100%] p-4 flex flex-col md:flex-row justify-around items-center gap-10 pt-10">
        <Image
          src={Person}
          alt="Person.png"
          width={700}
          height={300}
          className="w-[300px] h-[300px]"
        />

        <div className="flex flex-col justify-start items-center gap-5">
          <span className="flex justify-center items-center self-start">
            <Image
              src={Profile}
              alt="Person.png"
              width={700}
              height={300}
              className="w-[70px] h-[70px] rounded-full"
            />
            <p className="px-4 text-start">Create your account</p>
          </span>
          <span className="flex justify-center items-center self-start">
            <Image
              src={Transfer}
              alt="transfer.png"
              width={700}
              height={300}
              className="w-[70px] h-[70px] rounded-full"
            />
            <p className="px-4 text-start">Transfer fund to other Fincove users</p>
          </span>
          <span className="flex justify-center items-center self-start">
            <Image
              src={Earn}
              alt="earn.png"
              width={700}
              height={300}
              className="w-[70px] h-[70px] rounded-full"
            />
            <p className="px-4 text-start">Earn passive interest everyday</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Works;
