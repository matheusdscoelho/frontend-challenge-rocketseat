import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Header,
  Input,
  InputContainer,
  Logo,
  Nav,
  SearchBagContainer,
  SearchIcon,
  ShopBagContainer,
  ShopBagText,
} from "./styles";
import { useProductsContext } from "@/context/ProductsProvider";

function Navbar() {
  const { search, setSearch } = useProductsContext();
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart");
    if (localStorageCart) {
      setCart(JSON.parse(localStorageCart));
    }
  }, []);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  return (
    <Header>
      <Nav>
        <Logo href='/'>capputeeno</Logo>
        <SearchBagContainer>
          <InputContainer>
            <Input
              type='text'
              placeholder='Procurando por algo específico?'
              onChange={handleInputChange}
              value={search}
            />
            <SearchIcon
              src='search-loupe.svg'
              width={24}
              height={24}
              alt='search icon'
            />
          </InputContainer>
          <ShopBagContainer href='/cart'>
            <Image
              src='shopping-bag.svg'
              width={24}
              height={24}
              alt='search icon'
            />
            <ShopBagText>{cart.length}</ShopBagText>
          </ShopBagContainer>
        </SearchBagContainer>
      </Nav>
    </Header>
  );
}

export default Navbar;
