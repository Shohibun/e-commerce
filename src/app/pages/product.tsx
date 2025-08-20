import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import product from "../../../public/images/items_2.jpg";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import user1 from "../../../public/images/user_1.jpeg";
import user2 from "../../../public/images/user_2.jpeg";
import user3 from "../../../public/images/user_3.jpeg";

export default function ProductMain() {
  return (
    <div className="flex justify-center items-center mb-10 mt-5">
      <div className="w-8/12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/layouts/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-green-500">
                Product
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Image
          src={product}
          alt="product"
          className="w-50 h-50 rounded-lg mt-10"
        />

        <h1 className="text-3xl text-green-600 font-bold mt-2">
          Premium Cotton T-Shirt
        </h1>

        <div className="w-4/12 flex justify-start gap-3">
          <p className="text-gray-500 text-sm">5.0 |</p>

          <p className="text-gray-500 text-sm">120 Sold |</p>

          <p className="text-gray-500 text-sm">50 in stock</p>
        </div>

        <div className="w-4/12 border-2 rounded-lg p-2 mt-2">
          <h5 className="font-bold text-lg">Price</h5>

          <p className="text-green-500 text-5xl font-bold">$19.99</p>
        </div>

        <div className="w-3/12 flex justify-start gap-4 mt-5">
          <Button className="bg-green-500 text-white font-bold cursor-pointer hover:bg-green-400">
            Buy Now
          </Button>
          <Button variant={"outline"} className="font-bold cursor-pointer">
            Add to Cart
          </Button>
        </div>

        <div className="mt-5">
          <h5 className="font-bold text-lg">Product Description</h5>

          <p className="text-sm">
            This premium cotton t-shirt is designed for comfort and durability.
            Made from soft, breathable cotton, it is perfect for everyday wear.
            The classic fit and timeless design make it a versatile addition to
            any wardrobe. Available in a range of colors and sizes to suit your
            style.
          </p>
        </div>

        <div className="mt-5">
          <h5 className="font-bold text-lg">Customer Reviews</h5>

          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <p className="font-bold text-3xl">5.0</p>

              <div className="flex justify-start gap-3">
                <Star className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-green-500" />
              </div>

              <p className="text-base">120 Reviews</p>
            </div>

            <div className="col-span-3">
              <span className="flex justify-between items-center">
                5
                <Progress value={100} className="w-11/12 text-green-500" />
                100%
              </span>

              <span>
                4
                <Progress value={0} />
                0%
              </span>

              <span>
                3
                <Progress value={0} />
                0%
              </span>

              <span>
                2
                <Progress value={0} />
                0%
              </span>

              <span>
                1
                <Progress value={0} />
                0%
              </span>
            </div>
          </div>

          <div className="mt-3">
            <div className="">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <Avatar>
                    <AvatarImage src={user1.src} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                <div className="col-span-2">
                  <p className="font-bold text-xs">Kesya Lovrenka</p>
                  <p className="text-gray-500 text-xs">2023-08-15</p>
                </div>
              </div>

              <div className="flex justify-between">
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
              </div>

              <p className="text-xs">
                This t-shirt is amazing! The cotton is so soft and comfortable,
                and it fits perfectly. I have washed it several times, and it
                still looks great. Highly recommend!
              </p>
            </div>

            <div className="mt-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <Avatar>
                    <AvatarImage src={user2.src} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                <div className="col-span-2">
                  <p className="font-bold text-xs">Olivia Bennet</p>
                  <p className="text-gray-500 text-xs">2023-05-15</p>
                </div>
              </div>

              <div className="flex justify-between">
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
              </div>

              <p className="text-xs">
                Great quality t-shirt for the price. The fit is true to size,
                and the fabric is nice and soft. I have received many
                compliments on it.
              </p>
            </div>

            <div className="mt-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <Avatar>
                    <AvatarImage src={user3.src} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                <div className="col-span-2">
                  <p className="font-bold text-xs">Kayla Smith</p>
                  <p className="text-gray-500 text-xs">2023-05-15</p>
                </div>
              </div>

              <div className="flex justify-between">
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
                <Star className="w-5 h-5 bg-green-500" />
              </div>

              <p className="text-xs">
                The t-shirt is okay, but the fabric is a bit thinner than I
                expected. It is comfortable enough, but I am not sure how well
                it will hold up over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
