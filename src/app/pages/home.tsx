import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import items1 from "../../../public/images/items_1.jpg";
import items2 from "../../../public/images/items_2.jpg";
import items3 from "../../../public/images/items_3.jpg";
import items4 from "../../../public/images/items_4.jpg";
import items5 from "../../../public/images/items_5.jpg";
import items6 from "../../../public/images/items_6.jpg";
import items7 from "../../../public/images/items_7.jpg";
import items8 from "../../../public/images/items_8.jpg";
import items9 from "../../../public/images/items_9.jpg";
import items10 from "../../../public/images/items_10.jpg";

export default function HomeMain() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-9/12">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />

          <Input
            type="search"
            placeholder="Search for products"
            className="pl-10 w-full rounded-lg bg-white"
          />
        </div>

        <div className="w-5/12 flex justify-between items-center mt-4">
          <Button variant={"outline"} className="cursor-pointer bg-white">
            All
          </Button>
          <Button variant={"outline"} className="cursor-pointer bg-white">
            Electronics
          </Button>
          <Button variant={"outline"} className="cursor-pointer bg-white">
            Clothing
          </Button>
          <Button variant={"outline"} className="cursor-pointer bg-white">
            Home & Kitchen
          </Button>
          <Button variant={"outline"} className="cursor-pointer bg-white">
            Books
          </Button>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-8">
          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items1} alt="items_1" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Wireless Headphones</CardTitle>
                <CardDescription className="text-green-500">
                  $79.99
                </CardDescription>
                <CardDescription>Electronics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <Star className="text-yellow-200 inline w-5 mr-1" />
                    5.0
                  </p>

                  <p className="text-gray-500 text-xs">1 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items2} alt="items_2" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Cooton T-Shirt</CardTitle>
                <CardDescription className="text-green-500">
                  $19.99
                </CardDescription>
                <CardDescription>Clothing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <Star className="text-yellow-200 inline w-5 mr-1" />
                    5.0
                  </p>

                  <p className="text-gray-500 text-xs">10 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items3} alt="items_3" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Stainless Cookware</CardTitle>
                <CardDescription className="text-green-500">
                  $39.99
                </CardDescription>
                <CardDescription>Home & Kitchen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <Star className="text-yellow-200 inline w-5 mr-1" />
                    5.0
                  </p>

                  <p className="text-gray-500 text-xs">5 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items4} alt="items_4" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Mystery Novel</CardTitle>
                <CardDescription className="text-green-500">
                  $13.99
                </CardDescription>
                <CardDescription>Books</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <StarHalf className="text-yellow-200 inline w-5 mr-1" />
                    4.0
                  </p>

                  <p className="text-gray-500 text-xs">3 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items5} alt="items_5" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Smartwatch</CardTitle>
                <CardDescription className="text-green-500">
                  $139.99
                </CardDescription>
                <CardDescription>Electronics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <Star className="text-yellow-200 inline w-5 mr-1" />
                    5.0
                  </p>

                  <p className="text-gray-500 text-xs">52 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items6} alt="items_6" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Denim Jeans</CardTitle>
                <CardDescription className="text-green-500">
                  $49.99
                </CardDescription>
                <CardDescription>Clothing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <Star className="text-yellow-200 inline w-5 mr-1" />
                    5.0
                  </p>

                  <p className="text-gray-500 text-xs">50 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items7} alt="items_7" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Blender</CardTitle>
                <CardDescription className="text-green-500">
                  $29.99
                </CardDescription>
                <CardDescription>Electronics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <StarHalf className="text-yellow-200 inline w-5 mr-1" />
                    4.2
                  </p>

                  <p className="text-gray-500 text-xs">20 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items8} alt="items_8" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Fiction Book</CardTitle>
                <CardDescription className="text-green-500">
                  $9.99
                </CardDescription>
                <CardDescription>Books</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <StarHalf className="text-yellow-200 inline w-5 mr-1" />
                    4.2
                  </p>

                  <p className="text-gray-500 text-xs">27 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items9} alt="items_9" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Bluetooth Speaker</CardTitle>
                <CardDescription className="text-green-500">
                  $123.99
                </CardDescription>
                <CardDescription>Books</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <Star className="text-yellow-200 inline w-5 mr-1" />
                    5.0
                  </p>

                  <p className="text-gray-500 text-xs">33 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1">
            <Card className="py-0">
              <Image src={items10} alt="items_10" className="rounded-t-lg" />

              <CardHeader>
                <CardTitle className="text-lg">Leather Wallet</CardTitle>
                <CardDescription className="text-green-500">
                  $23.99
                </CardDescription>
                <CardDescription>Clothing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-sm flex items-center">
                    <Star className="text-yellow-200 inline w-5 mr-1" />
                    5.0
                  </p>

                  <p className="text-gray-500 text-xs">13 Terjual</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
