import React from "react";
import Image from "next/image";
import Person from "../../../../public/Image/person.png";
import Profile from "../../../../public/Image/profile.png";
import Transfer from "../../../../public/Image/transfer.png";
import Logo from "../../../../public/Image/logo.png";
import "../../../../src/style.css";
import Emails from "../../atoms/emailsField";
import Link from "next/link";
import {
  MdWhatsapp,
  MdFacebook,
  MdInstallMobile,
  MdPlayArrow,
} from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-[100%] bg-white px-4 pt-10 shadow-md h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center px-8 gap-10">
        <div className="flex flex-col justify-start">
          <Image
            src={Logo}
            alt="Logo.png"
            width={700}
            height={300}
            className="w-[130px] h-[70px]"
          />
          <h3 className="font-semibold">Follow Us:</h3>
          <div className="flex justify-start items-center gap-3">
            <span className="rounded-md w-[30px] h-[30px] bg-primary flex justify-center items-center">
              <MdWhatsapp className="text-[#BF894F]" />
            </span>
            <span className="rounded-md w-[30px] h-[30px] bg-primary flex justify-center items-center">
              <MdFacebook className="text-[#BF894F]" />
            </span>
            <span className="rounded-md w-[30px] h-[30px] bg-primary flex justify-center items-center">
              <MdInstallMobile className="text-[#BF894F]" />
            </span>
            <span className="rounded-md w-[30px] h-[30px] bg-primary flex justify-center items-center">
              <MdPlayArrow className="text-[#BF894F]" />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold">Menu</h2>
          <ul className="flex flex-col gap-5">
            <li className="text-[15px]">Home</li>
            <li className="text-[15px]">Blog</li>
            <li className="text-[15px]">About</li>
            <li className="text-[15px]">Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold">Subscribe to our newsletter</h2>
          <p className="text-[15px]">
            Subscribe to our newsletter to get update and news on the new
            development about Fincove. Do not miss out on new update and giveaway
          </p>
          <Emails />
          <Link
            href={"/auth/signup"}
            className="text-white py-2 px-4 rounded bg-primary w-[200px] text-center flex"
          >
            Subscibe
          </Link>
        </div>
      </div>
      <div className="py-5 text-center">
        <hr className="bg-primary"/>
        <span className="py-2">Copyright <strong>@FINCOVE</strong>|Sponsored by <Link href={'fcmb.com'} className="text-primary font-semibold">FCMB</Link></span>
      </div>
    </div>
  );
};

export default Footer;
