"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../../../public/Image/logo.png";
import Link from "next/link";
import "../../../../../src/style.css";
import Emails from "../../../../components/atoms/emailsField";
import Password from "../../../../components/atoms/passwordField";

const SignIn = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-[100%] justify-center items-center p-4 lg:py-10 lg:px-20 bg-background gap-10">
        <div className="bg-primary p-8 rounded-[20px] md:w-[40%] h-[110vh] hidden md:flex justify-center items-center">
          <div className="self-center">
            <h2 className="text-white text-center text-[3em] font-semibold py-2">
              Welcome Back
            </h2>
            <h4 className="text-white text-center text-[20px] py-2">
              Please, signin to your Account.
            </h4>
            <p className="text-white text-center text-[14px] pt-2">
              Enjoy unlimited Evolution with Fincove
            </p>
            <p className="text-white text-center text-[14px]">
              {" "}
              Unlimited P2P transactions
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[20px] h-[100%] p-8 md:w-[40%] flex flex-col justify-start items-start">
          <Image
            src={Logo}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[120px] h-[50px]"
          />
          <div className="pt-10 flex flex-col justify-center items-center w-[100%]">
            <h2 className="text-primarydark text-[18px] font-semibold text-center">
              Login to Account
            </h2>
            <p className="text-[14px] font-semibold text-center">
              Fill in your account credentials to sign to Account
            </p>
            <div className="pt-4 w-[100%] flex flex-col">
              <label htmlFor="email" className="text-primary text-[14px]">
                Email Address <i className="text-red">*</i>
              </label>
              <Emails />
            </div>
            <div className="py-2 w-[100%]">
              <label htmlFor="email" className="text-primary text-[14px]">
                Password <i className="text-red">*</i>
              </label>
              <Password />
            </div>
           
            <button className="py-2 px-4 w-[100%] rounded-md bg-primary text-white mt-4">
              SignIn
            </button>
          
            <div className="flex items-center gap-[1rem] my-2">
              <div className="md:w-[100%] w-[100%] bg-darkgray h-[1px]"></div>
              <div>Or</div>
              <div className="md:w-[100%] w-[100%] bg-darkgray h-[1px]"></div>
            </div>
            <button className="py-2 px-4 w-[100%] rounded-md bg-primary text-white">
              Connect Wallet
            </button>
            <Link href={'/auth/signup'} className="text-center py-2 px-4 w-[100%] mt-4 rounded-md border border-primary text-primary">
              New here? SignUp Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
