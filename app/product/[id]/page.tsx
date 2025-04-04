"use client";

import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  AddToCartButton,
  BackButton,
  BackText,
  Category,
  Container,
  Description,
  DescriptionTitle,
  Main,
  Price,
  ProductImage,
  ProductInfo,
  ProductName,
  ShippingInfo,
} from "./styles";
import { toast, ToastContainer } from "react-toastify";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const { id } = use(params);

  const { data: products } = useProducts();
  const currentProduct = products?.find((product) => product.id === id);

  if (!currentProduct) {
    return (
      <Main>
        <BackButton onClick={() => router.back()}>
          <Image
            src='/backward.svg'
            width={24}
            height={24}
            alt='go back icon'
          />
          <BackText>Voltar</BackText>
        </BackButton>
        <Container>
          <Skeleton width={800} height={680} />
          <ProductInfo>
            <Category>
              <Skeleton width={100} />
            </Category>
            <ProductName>
              <Skeleton width={200} />
            </ProductName>
            <Price>
              <Skeleton width={80} />
            </Price>
            <ShippingInfo>
              <Skeleton width={300} />
            </ShippingInfo>
            <DescriptionTitle>
              <Skeleton width={150} />
            </DescriptionTitle>
            <Description>
              <Skeleton count={3} />
            </Description>
          </ProductInfo>
        </Container>
      </Main>
    );
  }

  const handleAddToCart = () => {
    const localStorageCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    localStorageCart.push(currentProduct.id);

    localStorage.setItem("cart", JSON.stringify(localStorageCart));
    toast.success("Produto adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
    });
    toast.info("Você pode continuar comprando ou finalizar a compra.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
    });
  };

  return (
    <Main>
      <ToastContainer />
      <BackButton onClick={() => router.back()}>
        <Image src='/backward.svg' width={24} height={24} alt='go back icon' />
        <BackText>Voltar</BackText>
      </BackButton>
      <Container>
        <ProductImage
          src={currentProduct.image_url}
          width={800}
          height={680}
          alt={currentProduct.name}
        />
        <ProductInfo>
          <Category>
            {currentProduct.category === "mugs" ? "Caneca" : "Camisa"}
          </Category>
          <ProductName>{currentProduct.name}</ProductName>
          <Price>R$ {(currentProduct.price_in_cents / 100).toFixed(2)}</Price>
          <ShippingInfo>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </ShippingInfo>
          <DescriptionTitle>Descrição</DescriptionTitle>
          <Description>{currentProduct.description}</Description>
        </ProductInfo>
        <AddToCartButton onClick={handleAddToCart}>
          <Image
            src='/shopping-bag-white.svg'
            width={24}
            height={24}
            alt='search icon'
            style={{ marginRight: 10 }}
          />
          Adicionar ao carrinho
        </AddToCartButton>
      </Container>
    </Main>
  );
}

export default ProductPage;
