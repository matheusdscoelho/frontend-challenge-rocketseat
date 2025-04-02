"use client"

import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";

export default function Home() {
  const { data: products } = useProducts();

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        {products?.map((product) => (
          <div key={product.id}>
            <Image
              src={product.image_url}
              alt={product.name}
              width={180}
              height={38}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
