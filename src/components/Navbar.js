import { Avatar, CPUicon, Crossed, MOBO, Memory, Monitor, MonitorIcon, Others, PSU, Storage } from "@/assets/icons";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const { data: session } = useSession();


  return (
    <header
      className="relative shadow-md z-50 bg-curiousGreen"
    >
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-3">
            <div className="flex space-x-5">
          <Link href="/" className="-m-1.5 p-1.5">
              <div className={"flex justify-center items-center space-x-2 hover:opacity-75 duration-300"}>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  height={50}
                  width={50}
                  style={{ borderRadius: 10 }}
                />
                <h1 className="text-white font-bold text-xl">Rog Reboot</h1>
              </div>
            </Link>

            <Link
              href="/products"
              className="-mx-3 btn btn-ghost block rounded-lg px-3 py-2 text-base leading-7 text-white hover:opacity-75 font-bold"
            >
              Products
            </Link>
            </div>
            <div className="flex">
            <Link href={"/pc_builder"}>
                <h1 className="flex justify-center px-6 py-2 btn btn-ghost hover:opacity-75 text-white rounded-md font-bold">
                  PC Builder
                </h1>
              </Link>
              {session?.user.email ? (
              <h1 as button
                onClick={() => signOut()}
                className="-mx-3 flex justify-center btn btn-ghost rounded-lg px-3 text-base font-bold text-white hover:opacity-75 ml-2"
              >
                Log Out <span aria-hidden="true"></span>
              </h1>
            ) : (
              <Link
                href="/login"
              >
                <h1 ad button className="-mx-3 flex justify-center btn btn-ghost rounded-lg px-3 py-1 text-base font-bold text-white hover:opacity-75 ml-2">
                  Log in <span aria-hidden="true"></span>
                </h1>
              </Link>
            )}
            </div>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
