"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../../src/style.css";
import Image from "next/image";
import Profile from "../../../public/Image/profile.png";
import { MdMessage, MdNotifications, MdMenu } from "react-icons/md";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import styled from "styled-components";

const StyledConnectButton = styled(ConnectButton)`
  width: 100%;
  background-color: #a7368d;
`;

const Dashnav = () => {
  const [show, setShow] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // State to store user email
  const router = useRouter();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <div>
      <nav className="flex justify-between items-center p-4 shadow-md bg-white z-10">
        <h1 className="text-[1.2em] font-semibold">
          Welcome, {userEmail ? ` ${userEmail}` : " User."}
        </h1>
        <div
          className={`${
            show ? "block" : "hidden lg:flex"
          } flex gap-10 justify-center md:justify-between items-center responsive`}
        >
          <div className="flex justify-center items-start lg:items-center flex-row gap-5 responsive">
            <ul className="flex flex-col justif-center items-start lg:items-center gap-5 lg:hidden">
              <li> <Link href='/dashboard'>Home</Link> </li>
              <li> <Link href='/dashboard/profile'>Account</Link> </li>
              <li> <Link href='/dashboard/finance'>Finance Intelligence</Link> </li>
              <li> <Link href='/dashboard/loans'>P2P Loans</Link> </li>
              <li> <Link href='/dashboard/settings'>Settings</Link> </li>
              <li> <Link href='/dashboard/support'>Supprts</Link> </li>
            </ul>
            <StyledConnectButton />
            <MdNotifications size={30} className="text-primary" />
            <MdMessage size={30} className="text-primary" />
            <Image
              src={Profile}
              alt="image.png"
              width={700}
              height={300}
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
        </div>
        <button onClick={handleShow} className="mx-8 w-[30px] h-[30px] fixed lg:relative top-3 right-3 lg:hidden z-30">
          <MdMenu size={34} />
        </button>
      </nav>
    </div>
  );
};

export default Dashnav;
