"use client";

import Navbar from "@/components/Navbar";
import { useProductsContext } from "@/context/ProductsProvider";
import Image from "next/image";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const { products, isLoading, error } = useProductsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!isLoading) return <Skeleton count={10} width={200} height={300} baseColor="#000"/>;
  if (error) return <p>Erro ao carregar produtos: {error.message}</p>;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Navbar />
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Anterior
        </button>
        <span>
          {currentPage} de {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Próximo
        </button>
      </div>
      <main>
        {paginatedProducts.map((product) => (
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
