import React from "react";
import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import TransactionMain from "@/app/pages/transaction";

export default function Transaction() {
  return (
    <>
      <Navbar />
      <TransactionMain />
      <Footer />
    </>
  );
}
