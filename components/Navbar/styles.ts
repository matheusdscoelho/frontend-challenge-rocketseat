import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header`
  min-height: 5rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0px 10rem;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: 0%;
  font-family: var(--font-saira-stencil-one);
  color: var(--gray-400);
  text-decoration: none;
`;

export const SearchBagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 22rem;
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: var(--gray-500);
  border: none;
  flex: 1;
  outline: none;
`;

export const SearchIcon = styled(Image)`
  position: relative;
  right: 2rem;
`;

export const ShopBagContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const ShopBagText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #ffffff;
  font-weight: 500;
  line-height: 26px;
  

  background-color: var(--red-500);
  width: 1.063rem;
  height: 1.063rem;
  border-radius: 50%;

  position: relative;
  top: 0.6rem;
  right: 0.5rem;
`;
