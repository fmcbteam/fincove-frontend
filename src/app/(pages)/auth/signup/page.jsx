"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../../../public/Image/logo.png";
import Link from "next/link";
import '../../../../../src/style.css';
import Password from "../../../../components/atoms/passwordField";
import Emails from "../../../../components/atoms/emailsField";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styled from "styled-components";

const StyledConnectButton = styled(ConnectButton)`
  width: 100%;
  background-color: #A7368D;
`;

const SignUp = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-[100%] justify-center items-center p-4 lg:py-10 lg:px-40 bg-background gap-10">
        <div className="bg-primary p-8 rounded-[20px] md:w-[40%] h-[120vh] flex-1 hidden md:flex justify-center items-center">
          <div className="self-center">
            <h2 className="text-white text-center text-[3em] font-semibold py-2">
              Join Us Today.
            </h2>
            <h4 className="text-white text-center text-[20px] py-2">
              Please, create an Account.
            </h4>
            <p className="text-white text-center text-[14px] pt-2">
              Enjoy unlimited Evolution with Fincove
            </p>
            <p className="text-white text-center text-[15px]">
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
          <div className="pt-10">
            <h2 className="text-primarydark text-[18px] font-semibold">
              Register
            </h2>
            <span className="text-[14px] font-semibold">
              Already have an account?{" "}
              <Link href={"/auth/signin"} className="text-primary">
                {" "}
                Sign In
              </Link>
            </span>
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
            <div className="py-2 w-[100%]">
              <label htmlFor="email" className="text-primary text-[14px]">
                Confirm Password <i className="text-red">*</i>
              </label>
              <Password />
            </div>
            <div className="flex items-center gap-[1rem] my-2">
              <div className="md:w-[100%] w-[100%] bg-darkgray h-[1px]"></div>
              <div>Or</div>
              <div className="md:w-[100%] w-[100%] bg-darkgray h-[1px]"></div>
            </div>
            <div className="w-[100%] flex justify-center items-center">
            <StyledConnectButton label={'SignUp with Wallet Address'} className="bg-primary text-semibol" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" className="bg-primary" />
              <p className="text-[14px] py-4">
                I certify that i have read and accept the{" "}
                <i className="text-primary">Terms of Use</i> and{" "}
                <i className="text-primary">Privacy Policy</i>
              </p>
            </div>
            <button className="py-2 px-4 w-[100%] rounded-md bg-primary text-white">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
