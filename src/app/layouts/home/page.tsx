import React from "react";
import { Navbar } from "@/app/components/navbar";
import HomeMain from "@/app/pages/home";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeMain />
      <Footer />
    </>
  );
}
