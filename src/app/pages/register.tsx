"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import jmb from "../../../public/images/jmb.png";

export default function RegisterMain() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center">
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
          Register ShopSmart
        </h1>

        <form className="mt-12">
          <div className="grid mx-auto w-full max-w-sm items-center gap-3 mt-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              suppressHydrationWarning
            />
          </div>

          <div className="grid mx-auto w-full max-w-sm items-center gap-3 mt-3">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              suppressHydrationWarning // Untuk menghilangkan error ketika melakukan render
            />
          </div>

          <div className="grid mx-auto w-full max-w-sm items-center gap-3 mt-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              suppressHydrationWarning
            />
          </div>

          <div className="w-full flex justify-center">
            <Button
              suppressHydrationWarning
              onClick={handleLogin}
              type="submit"
              className="w-3/12 bg-green-500 mt-10 rounded-lg cursor-pointer hover:bg-green-400"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
