"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/navigation";
import { Product, useProducts } from "@/hooks/useProducts";
import {
  BackButton,
  BackText,
  Container,
  DeleteIcon,
  Divider,
  FinishButton,
  HelpLink,
  HelpLinks,
  LeftColumn,
  Main,
  ProductBottom,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  QuantitySelect,
  RightColumn,
  Subtitle,
  Summary,
  SummaryItem,
  SummaryTitle,
  Title,
  Total,
} from "./styles";
import { toast, ToastContainer } from "react-toastify";

interface CartItem {
  id: string;
  quantity: number;
}

function Cart() {
  const router = useRouter();
  const { data: products, isLoading: isLoadingProducts } = useProducts();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cartFromStorage: CartItem[] = JSON.parse(
      localStorage.getItem("cart") ?? "[]"
    );
    setCartItems(cartFromStorage);

    if (products) {
      const filtered = products.filter((product) =>
        cartFromStorage.find((item) => item.id === product.id)
      );
      setSelectedProducts(filtered);
    }
  }, [products]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Quantidade atualizada com sucesso!");
  };

  const handleDelete = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setSelectedProducts((prev) => prev.filter((p) => p.id !== productId));
    toast.success("Produto removido com sucesso!");
  };

  if (isLoadingProducts) {
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
        <Skeleton width={800} height={680} />
      </Main>
    );
  }

  function getShipping(): number {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return totalItems > 0 ? 15 : 0;
  }

  function getTotal(): number {
    return (
      selectedProducts.reduce((total, product) => {
        const cartItem = cartItems.find((item) => item.id === product.id);
        const quantity = cartItem?.quantity || 1;
        return total + (product.price_in_cents || 0) * quantity;
      }, 0) / 100
    );
  }

  return (
    <Main>
      <ToastContainer />
      <BackButton onClick={() => router.back()}>
        <Image src='/backward.svg' width={24} height={24} alt='go back icon' />
        <BackText>Voltar</BackText>
      </BackButton>

      <Container>
        <LeftColumn>
          <Title>Seu carrinho</Title>
          <Subtitle>
            Total ({cartItems.length} produtos) <strong>R${getTotal()}</strong>
          </Subtitle>

          {selectedProducts.map((product) => {
            const cartItem = cartItems.find((item) => item.id === product.id);
            const quantity = cartItem?.quantity || 1;

            return (
              <ProductCard key={product.id}>
                <div>
                  <ProductImage
                    src={product.image_url || "/placeholder.jpg"}
                    alt={product.name}
                    width={256}
                    height={211}
                  />
                </div>

                <ProductInfo>
                  <DeleteIcon
                    onClick={() => handleDelete(product.id)}
                    src='/trash.svg'
                    width={24}
                    height={24}
                    alt='delete icon'
                  />

                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>
                    {product.description || "Sem descrição."}
                  </ProductDescription>

                  <ProductBottom>
                    <QuantitySelect
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          parseInt(e.target.value)
                        )
                      }
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        )
                      )}
                    </QuantitySelect>

                    <ProductPrice>
                      R$ {(product.price_in_cents / 100).toFixed(2) || "0,00"}
                    </ProductPrice>
                  </ProductBottom>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </LeftColumn>

        <RightColumn>
          <Summary>
            <SummaryTitle>Resumo do Pedido</SummaryTitle>

            <SummaryItem>
              Subtotal dos produtos <span>R${getTotal()}</span>
            </SummaryItem>
            <SummaryItem>
              Entrega <span>R${getShipping()}</span>
            </SummaryItem>

            <Divider />

            <Total>
              Total <p>R$ {(getTotal() + getShipping()).toFixed(2)}</p>
            </Total>

            <FinishButton>Finalizar a compra</FinishButton>
          </Summary>

          <HelpLinks>
            <HelpLink href='#'>Ajuda</HelpLink>
            <HelpLink href='#'>Reembolsos</HelpLink>
            <HelpLink href='#'>Entregas e frete</HelpLink>
            <HelpLink href='#'>Trocas e devoluções</HelpLink>
          </HelpLinks>
        </RightColumn>
      </Container>
    </Main>
  );
}

export default Cart;
