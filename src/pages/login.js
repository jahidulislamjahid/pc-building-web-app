import { Github, Google } from "@/assets/icons";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Rog Reboot</title>
      </Head>
      <div className="h-screen mt-64">

      <div className="flex px-6 py-12 lg:px-8 border-none items-center">
        <div className="flex w-4/12 mx-auto justify-between items-center px-20 border py-20 drop-shadow-md rounded-md">
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              height={40}
              width={180}
              className="cursor-pointer"
            />
          </div>
          <div>
          <button
              onClick={() =>
                signIn("google", {
                  // callbackUrl: "http://localhost:3000",
                  callbackUrl: process.env.NEXT_PUBLIC_NEXT_APP_URL,
                })
              }
              className="flex w-full justify-center items-center rounded-md bg-curiousGreen p-3 my-2 text-sm  leading-6 text-white shadow-sm btn btn-ghost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-bold"
            >
              <Google />
              <span className="ml-2">Sign in with Google</span>
            </button>

            <button
              onClick={() =>
                signIn("github", {
                  // callbackUrl: "http://localhost:3000",
                  callbackUrl: process.env.NEXT_PUBLIC_NEXT_APP_URL,
                })
              }
              className="flex w-full justify-center btn btn-ghost items-center rounded-md bg-curiousGreen p-3 my-2 text-sm  leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-bold"
            >
              <Github />
              <span className="ml-2">Sign in with Github</span>
            </button>
          </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
