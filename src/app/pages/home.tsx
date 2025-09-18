"use client";
// Semua file yang pakai useEffect, useState, useRouter, atau localStorage harus diberi "use client".

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
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  rating: number;
  sold: number;
  created_at: string;
}

export default function HomeMain() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

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
          {products.map((product) => (
            <div key={product.id} className="col-span-1">
              <Link href={`/layouts/product/${product.id}`}>
                <Card className="py-0">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="h-48 rounded-t-lg"
                  />

                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-green-500">
                      ${product.price}
                    </CardDescription>
                    <CardDescription>{product.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-sm flex items-center">
                        {product.rating >= 5 ? (
                          <Star className="text-yellow-200 inline w-5 mr-1" />
                        ) : (
                          <StarHalf className="text-yellow-200 inline w-5 mr-1" />
                        )}
                        {product.rating}
                      </p>

                      <p className="text-gray-500 text-xs">
                        {product.sold} Terjual
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
