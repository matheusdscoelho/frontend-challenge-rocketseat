import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


export const Main = styled.main`
  padding: 1rem min(10rem, 8%);
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
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftColumn = styled.div`
  width: 150%;
  @media screen and (max-width: 992px) {
    width: 110%;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  color: var(--gray-300);
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  color: var(--gray-300);
`;

export const ProductCard = styled.div`
  display: flex;
  gap: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #fff;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ProductImage = styled(Image)`
  border-radius: 8px 0 0 8px;
  object-position: center;
  object-fit: cover;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    border-radius: 8px 8px 0 0;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  padding: 16px;
  position: relative;
`;

export const DeleteIcon = styled(Image)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #999;
`;

export const ProductName = styled.h3`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 300;
  line-height: 150%;
  color: var(--gray-300);
`;

export const ProductDescription = styled.p`
  margin: 0 0 12px;
  padding-right: 2rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: var(--gray-300);
`;

export const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const QuantitySelect = styled.select`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #a8a8b3;
  position: absolute;
  bottom: 2rem;
  background-color: #f3f5f6;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-500);

  @media screen and (max-width: 992px) {
    position: initial;
  }
`;

export const ProductPrice = styled.strong`
  color: #333;
  font-size: 16px;
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  @media screen and (max-width: 992px) {
    position: initial;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-height: 70vh;
  background-color: #fff;
  padding: 16px;

  @media screen and (max-width: 992px) {
    width: 100%;
    gap: 5rem;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: auto;
`;

export const SummaryTitle = styled.h1`
  margin-top: 1rem;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  color: var(--gray-300);
  text-transform: uppercase;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--gray-300);
`;

export const Divider = styled.div`
  height: 1px;
  background: var(--stroke-white);
  border-radius: 1px;
`;

export const Total = styled.strong`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-300);
`;

export const FinishButton = styled.button`
  text-align: center;
  color: #fff;
  background: var(--green-500);
  border: none;
  min-height: 3rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
`;

export const HelpLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  bottom: 10px;
`;

export const HelpLink = styled(Link)`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  color: var(--gray-500);
`;