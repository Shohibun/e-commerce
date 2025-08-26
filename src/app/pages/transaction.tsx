import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import items1 from "../../../public/images/items_1.jpg";
import items2 from "../../../public/images/items_2.jpg";
import items3 from "../../../public/images/items_3.jpg";
import items4 from "../../../public/images/items_4.jpg";
import items5 from "../../../public/images/items_5.jpg";

export default function TransactionMain() {
  return (
    <div className="flex justify-center items-center mb-10 mt-5">
      <div className="w-8/12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/layouts/home"
                className="hover:text-green-500"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-green-500">
                Transaction
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl text-green-600 font-bold mt-10">
          Order Summary
        </h1>

        <div className="mt-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <Image src={items1} alt="items1" className="rounded-lg" />
            </div>

            <div className="col-span-10">
              <p className="text-sm font-bold">Bluetooth Headphones</p>
              <p className="text-sm text-gray-500">
                Size: L, Color: Black, Quantity: 2
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm font-bold text-gray-500">$160.00</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-1">
              <Image src={items2} alt="items2" className="rounded-lg" />
            </div>

            <div className="col-span-10">
              <p className="text-sm font-bold">Cotton T-Shirt</p>
              <p className="text-sm text-gray-500">
                Size: M, Color: White, Quantity: 1
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm font-bold text-gray-500">$19.00</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-1">
              <Image src={items3} alt="items3" className="rounded-lg" />
            </div>

            <div className="col-span-10">
              <p className="text-sm font-bold">Stainless Cookware</p>
              <p className="text-sm text-gray-500">
                Size: S, Color: silver, Quantity: 3
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm font-bold text-gray-500">$120.00</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-1">
              <Image src={items4} alt="items4" className="rounded-lg" />
            </div>

            <div className="col-span-10">
              <p className="text-sm font-bold">Mystery Novel</p>
              <p className="text-sm text-gray-500">
                Size: -, Color: -, Quantity: 1
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm font-bold text-gray-500">$12.00</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-2">
            <div className="col-span-1">
              <Image src={items5} alt="items5" className="rounded-lg" />
            </div>

            <div className="col-span-10">
              <p className="text-sm font-bold">Smartwatch</p>
              <p className="text-sm text-gray-500">
                Size: M, Color: Black, Quantity: 1
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm font-bold text-gray-500">$199.00</p>
            </div>
          </div>
        </div>

        <h1 className="text-xl text-green-600 font-bold mt-8">
          Payment Method
        </h1>

        <RadioGroup defaultValue="option-one" className="mt-4">
          <div className="flex items-center space-x-2 border-2 p-3 rounded-lg">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Cash On Delivery</Label>
          </div>
          <div className="flex items-center space-x-2 border-2 p-3 rounded-lg">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Bank Transfer</Label>
          </div>
          <div className="flex items-center space-x-2 border-2 p-3 rounded-lg">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three">QRIS</Label>
          </div>
        </RadioGroup>

        <div className="mt-8">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 font-bold">Subtotal</p>

            <p className="text-sm text-gray-500">$510.00</p>
          </div>

          <div className="flex justify-between mt-2">
            <p className="text-sm text-gray-500 font-bold">Shipping</p>

            <p className="text-sm text-gray-500">$5.00</p>
          </div>

          <div className="flex justify-between mt-2">
            <p className="text-sm text-gray-500 font-bold">Total</p>

            <p className="text-sm text-gray-500">$515.00</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <AlertDialog>
            <AlertDialogTrigger className="w-full">
              <Button className="w-4/12 bg-green-500 mt-10 rounded-lg cursor-pointer hover:bg-green-400">
                Confirm Order
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-green-500 font-bold">
                  Successful!
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This purchase was successful.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-green-500 text-white hover:bg-green-400">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
