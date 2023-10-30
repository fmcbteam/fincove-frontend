"use client";
import React, { useState } from "react";
import { Home, AdminPanelSettings, People, ModelTraining, Analytics, Settings, Money } from "@mui/icons-material";
import Image from "next/image";
import "../../../src/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toolbar } from "@mui/material";


const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const SideList = [
    {
        title: "Dashboard",
        icon: <Home />,
        path: "/dashboard",
      },
      {
        title: "Profile",
        icon: <People />,
        path: "/notFound",
      },
      {
        title: "Account",
        icon: <AdminPanelSettings />,
        path: "/notFound",
      },
      {
        title: "P2P Loan",
        icon: <Money />,
        path: "/notFound",
      },
      {
        title: "Intelligence",
        icon: <ModelTraining />,
        path: "/notFound",
      },
      {
        title: "Setting",
        icon: <Settings />,
        path: "/notFound",
      },
      {
        title: "Support",
        icon: <Analytics />,
        path: "/notFound",
      }
  ];
  const pathname = usePathname();

  return (
    <div className="relative w-[100%] hidden lg:block">
      <section
        className={`background h-screen duration-300 ${
          hovered ? "w-60" : "w-[70px]"
        } p-3 pt-[25px]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <ul
          className={`${
            hovered ? "mt-[20px]" : "mt-[20px]"
          } flex flex-col justify-start align-start items-start gap-[10px]`}
        >
          {SideList.map((item, i) => (
            <li key={i} className={`${pathname == item.path ? 'bg-[#4d94ff14]  border-l-[5px] border-primary border' : ''} rounded-lg  flex w-[100%] justify-start items-center hover:bg-light`}>
              <span className="py-2 ml-2 text-[25px] text-white">{item.icon}</span>
              <Link
                className={`px-2 text-[15px] text-white rounded  w-[80%] self-center ${
                  hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                } duration-100`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
