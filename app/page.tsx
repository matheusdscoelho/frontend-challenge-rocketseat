"use client";

import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { useProductsContext } from "@/context/ProductsProvider";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import { ArrowButton, FilterButton, FilterButtons, FiltersContainer, Main, PageButton, PaginationContainer, ProductsGrid, SortSelect } from "./styles";

export default function Home() {
  const { products, isLoading, error } = useProductsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<keyof typeof sortOptions | "default">("default");
  const itemsPerPage = 12;

  if (isLoading)
    return <Skeleton count={10} width={200} height={300} baseColor='#000' />;
  if (error) return <p>Erro ao carregar produtos: {error.message}</p>;

  const filteredProducts = filter !== "all" 
  ? products.filter(product => product.category === filter) 
  : [...products];

const sortOptions = {
  new: (a: { created_at: string; }, b: { created_at: string; }) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  sales: (a: { sales: number; }, b: { sales: number; }) => b.sales - a.sales,
  desc: (a: { price_in_cents: number; }, b: { price_in_cents: number; }) => a.price_in_cents - b.price_in_cents,
  asc: (a: { price_in_cents: number; }, b: { price_in_cents: number; }) => b.price_in_cents - a.price_in_cents
};

if (sortOrder !== "default" && sortOptions[sortOrder]) {
  filteredProducts.sort(sortOptions[sortOrder]);
}


  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
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
    <Main>
      <FiltersContainer>
        <FilterButtons>
          {[
            { label: "TODOS OS PRODUTOS", value: "all" },
            { label: "CAMISETAS", value: "t-shirts" },
            { label: "CANECAS", value: "mugs" },
          ].map(({ label, value }) => (
            <FilterButton key={value} onClick={() => setFilter(value)} active={filter === value ? "active" :""}>
              {label}
            </FilterButton>
          ))}
        </FilterButtons>
        <SortSelect onChange={(e) => setSortOrder(e.target.value as keyof typeof sortOptions | "default")} value={sortOrder}>
          <option value="default" disabled hidden>
            Organizar por
          </option>
          <option value="new">Novidades</option>
          <option value="asc">Preço: Maior - menor</option>
          <option value="desc">Preço: Menor - maior</option>
          <option value="sales">Mais Vendidos</option>
        </SortSelect>
      </FiltersContainer>

      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PageButton key={page} onClick={() => setCurrentPage(page)} active={currentPage === page ? "active" :""}>
            {page}
          </PageButton>
        ))}
        <ArrowButton onClick={handlePrev} disabled={currentPage === 1}>
          <IoIosArrowBack size={14} />
        </ArrowButton>
        <ArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
          <IoIosArrowForward size={14} />
        </ArrowButton>
      </PaginationContainer>

      <ProductsGrid>
        {paginatedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </Main>
  </div>
  );
}
