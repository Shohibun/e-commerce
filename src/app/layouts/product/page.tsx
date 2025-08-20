import React from "react";
import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import ProductMain from "@/app/pages/product";

export default function Product() {
  return (
    <>
      <Navbar />
      <ProductMain />
      <Footer />
    </>
  );
}
