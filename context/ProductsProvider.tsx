"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Product, useProducts } from "../hooks/useProducts";

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  error: Error | null;
}

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
  search: "",
  setSearch: () => {},
  isLoading: false,
  error: null,
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const { data: productsAPI, isLoading, error } = useProducts();
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (productsAPI?.length) {
      setProducts(productsAPI);
    }
  }, [productsAPI]);

  const filteredProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <ProductsContext.Provider
      value={{ products: filteredProducts, setProducts, search, setSearch, isLoading, error }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};