"use client";

import { Product, useProducts } from "@/hooks/useProducts";
import React, { useEffect, useState } from "react";

function Cart() {
  const { data: products } = useProducts();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const selectedProductsStorage = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    );
    if (selectedProductsStorage && products)
      setSelectedProducts(
        products.filter((product) =>
          selectedProductsStorage.includes(product.id)
        )
      );
  }, [products]);

  return (
    <div>
      {selectedProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default Cart;
