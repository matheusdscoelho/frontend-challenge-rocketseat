import Image from "next/image";
import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductImage = styled(Image)`
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProductName = styled.h3`
  margin: 10px 0 0 12px;
  font-size: 16px;
  text-align: left;
  font-weight: 300;
  line-height: 150%;
`;

export const Divider = styled.div`
  height: 1px;
  width: 90%;
  background-color: var(--stroke-white);
  margin: 4px 12px;
`;

export const ProductPrice = styled.p`
  margin: 10px 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
`;