// app/components/Navbar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { House, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import user from "../../../public/images/user.jpeg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <header className="w-full border-b shadow-sm bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl hover:text-green-400">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="logo"
            className="inline"
          />
          ShopSmart
        </Link>

        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 my-auto">
              <Link href="/layouts/home">
                <House className="cursor-pointer hover:text-green-400" />
              </Link>
            </div>

            <div className="col-span-1 my-auto">
              <Link href="/">
                <ShoppingCart className="cursor-pointer hover:text-green-400" />
              </Link>
            </div>

            <div className="col-span-1 my-auto">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.src} alt="user" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8 mx-4">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="hover:text-primary">
                  Basket
                </Link>
                <Link href="/contact" className="hover:text-primary">
                  Profile
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
