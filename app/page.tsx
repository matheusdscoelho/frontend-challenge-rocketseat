"use client";

import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { useProductsContext } from "@/context/ProductsProvider";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const { products, isLoading, error } = useProductsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (isLoading)
    return <Skeleton count={10} width={200} height={300} baseColor='#000' />;
  if (error) return <p>Erro ao carregar produtos: {error.message}</p>;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Navbar />
      <main
        style={{ display: "flex", flexDirection: "column", gap: 30, flex: 1 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  margin: "0 5px",
                  fontWeight: currentPage === page ? "bold" : "normal",
                }}
              >
                {page}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              <IoIosArrowBack size={20} />
            </button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flex: 1,
            justifyContent: "end",
          }}
        >
          <div>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  margin: "0 5px",
                  fontWeight: currentPage === page ? "bold" : "normal",
                }}
              >
                {page}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={handlePrev} disabled={currentPage === 1}>
              <IoIosArrowBack size={20} />
            </button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, auto)",
            gap: "1.5rem",
          }}
        >
          {paginatedProducts.map((product) => (
            <div key={product.id}>
              <Product product={product}/>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
