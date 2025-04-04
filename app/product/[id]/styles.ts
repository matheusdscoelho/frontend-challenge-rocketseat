import Image from "next/image";
import styled from "styled-components";

export const Main = styled.main`
  padding: 1rem min(10rem, 10%);
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  width: 4.5rem;
`;

export const BackText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  font-family: var(--font-saria);
  color: #617480;
  margin-left: 10px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4rem;
  gap: 2rem;

  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 4px;
  object-fit: contain;
  aspect-ratio: 1/1;

  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3%;

  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const Category = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--gray-300);
`;

export const ProductName = styled.h1`
  font-weight: 300;
  font-size: 32px;
  color: var(--gray-300);
`;

export const Price = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: var(--gray-900);
`;

export const ShippingInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: var(--gray-300);
`;

export const DescriptionTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: var(--gray-500);
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--gray-300);

  margin-bottom: 4rem;
`;

export const AddToCartButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: #f5f5fa;
  background: var(--blue-500);

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 44px;
  border-radius: 4px;
  cursor: pointer;

  grid-column: 2 / 3;
  grid-row: 2 / 3;
  position: relative;
  bottom: 3rem;
`;
