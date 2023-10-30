"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../../src/style.css";
import Image from "next/image";
import Profile from "../../../public/Image/profile.png";
import { MdMessage, MdNotifications } from "react-icons/md";

const Dashnav = () => {
  // const router = useRouter();
  const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   setShow(!show);
  // };

  // const isActive = (path) => {
  //   return router.pathname === path;
  // };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 shadow-md bg-white z-10">
        <h1 className="text-[1.5em] font-semibold">Welcome, Uncle Phil.</h1>
        <div
          className={`${
            show ? "block" : "hidden lg:flex"
          } flex gap-10 justify-center md:justify-between items-center responsive`}
        >
          <div className="flex justify-center items-center flex-row gap-5">
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
        {/* <button onClick={handleShow} className="mx-8 w-[30px] h-[30px] fixed lg:relative top-3 right-3 lg:hidden z-30">
          <MdMenu size={34} />
        </button> */}
      </nav>
    </div>
  );
};

export default Dashnav;
