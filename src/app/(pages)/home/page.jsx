import React from "react";
import Link from "next/link";
import { useClient } from "wagmi";
import Image from "next/image";

const Home = () => {
  const client = useClient();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/"
        className="border border-slate-400 hover:border-slate-500 hover:bg-white p-4 rounded-md"
      >
        <p>This is the FinCove Home Page</p>
        <h3 className="font-semibold pt-2">Go back</h3>
      </Link>
      {/* <div className="flex flex-row justify-start items-center">
        <Image
          src={client.getAvatarUrl()}
          alt={client.getName()}
          width={700}
          height={300}
          className="w-[30px] h-[30px] rounded-full"
        />
        <div>
          <h2>{client.getAddress()}</h2>
          <p>{client.getName()}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
