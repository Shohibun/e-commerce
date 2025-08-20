import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center items-center mt-20 pt-5 pb-10 bg-green-400 border-2">
      <div className="w-8/12">
        <div className="flex justify-between">
          <Link href="/" className="text-white text-sm hover:font-bold">
            About
          </Link>

          <Link href="/" className="text-white text-sm hover:font-bold">
            Contact
          </Link>

          <Link href="/" className="text-white text-sm hover:font-bold">
            Privacy Policy
          </Link>

          <Link href="/" className="text-white text-sm hover:font-bold">
            Terms of Service
          </Link>
        </div>

        <hr className="bg-white mt-10 h-1" />

        <p className="text-white text-sm flex justify-center items-center mt-2">
          <Copyright className="text-white w-4 inline mr-1" />
          2025 ShopAll. All right reserved.
        </p>
      </div>
    </div>
  );
}
