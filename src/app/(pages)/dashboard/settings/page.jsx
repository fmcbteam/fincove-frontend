"use client";
import React, { useState } from "react";
import { SecurityIcon, PeopleIcon, NotificationsIcon, Error, TuneIcon } from "@mui/icons-material";
import { usePathname } from "next/navigation";
// import "../../../src/style.css";
import Link from "next/link";

const Settings =() => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
    const settingsList = [
        {
            title: "General Information",
            icon: <Error />,
            path: "/notFound",
        },
        {
            title: "Notification",
            icon: <NotificationsIcon />,
            path: "/notFound",
        },
        {
            title: "Security",
            icon: <SecurityIcon />,
            path: "/notFound",
        },
        {
            title: "Account Manager",
            icon: <PeopleIcon />,
            path: "/notFound",
        },
        {
            title: "Preference",
            icon: <TuneIcon />,
            path: "/notFound",
        }
    ];
    const pathname = usePathname();

    return (
        <div className="w-full flex-grow lg:px-[15%] px-4 py-4 bg-background">
            <div className="py-4 flex-col items-center justify-evenly">
            <ul
            className={`${
                hovered ? "mt-[40px]" : "mt-[40px]"
            } flex flex-col justify-start align-start items-start gap-[10px]`}
            >
            {settingsList.map((item, i) => (
                <li key={i} className={`${pathname == item.path ? 'bg-[#4d94ff14]  border-l-[5px] border-primary border' : ''} rounded-lg  flex w-[100%] justify-start items-center hover:bg-light`}>
                <span className="py-2 ml-2 text-[25px] text-primary">{item.icon}</span>
                    <Link
                        className={`text-gray-800 px-2 text-[15px] rounded  w-[80%] self-center ${
                        hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                        } duration-100`}
                        href={item.path}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
            </ul>
            </div>
        </div>
    )
}

export default Settings;