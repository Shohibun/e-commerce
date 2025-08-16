"use client";

import Image from "next/image";
import jmb from "../../public/images/jmb.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/layouts/home");
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-8/12 mb-10">
        <div className="mt-10 mb-5">
          <Image
            src={jmb}
            width={700}
            height={700}
            className="mx-auto"
            alt="jumbutron"
          />
        </div>

        <h1 className="text-4xl text-green-600 font-bold text-center">
          Welcome Back!
        </h1>

        <div className="mt-12">
          <div className="grid mx-auto w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div className="grid mx-auto w-full max-w-sm items-center gap-3 mt-3">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <h5 className="text-xs text-gray-500 mt-2  text-center cursor-pointer hover:text-blue-500 ">
            Forget Your Password ?
          </h5>

          <div className="w-full flex justify-center">
            <Button
              onClick={handleRedirect}
              className="w-3/12 bg-green-500 mt-10 rounded-lg cursor-pointer hover:bg-green-400"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
