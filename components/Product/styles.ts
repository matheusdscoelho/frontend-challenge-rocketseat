import Image from "next/image";
import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
`;

export const ProductImage = styled(Image)`
  border-radius: 12px 12px 0 0;
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