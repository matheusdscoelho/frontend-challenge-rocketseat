import { Product as ProductType } from "@/hooks/useProducts";
import React from "react";
import { Divider, ProductContainer, ProductImage, ProductName, ProductPrice } from "./styles";

function Product({ product }: { product: ProductType }) {
    return (
      <ProductContainer>
        <ProductImage src={product.image_url} alt={product.name} width={256} height={300} />
        <ProductName>{product.name}</ProductName>
        <Divider />
        <ProductPrice>R$ {(product.price_in_cents / 100).toFixed(2)}</ProductPrice>
      </ProductContainer>
    );
  }
  
  export default Product;
  