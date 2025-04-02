import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  padding: 2rem 10rem;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 40px;
`;

interface ButtonProps {
  active?: string;
}

export const FilterButton = styled.button<ButtonProps>`
  font-weight: ${(props) => (props.active ? "600" : "400")};
  border: 0;
  font-size: 16px;
  line-height: 22px;
  font-family: var(--font-saria);
  border-bottom: ${(props) =>
    props.active ? "4px solid var(--orange-300)" : "none"};
  padding-bottom: 4px;
  cursor: pointer;
`;

export const SortSelect = styled.select`
  min-width: 7.5rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--gray-500);
  font-family: var(--font-saria);
  border: none;
  cursor: pointer;
  background: transparent;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: end;
`;

export const PageButton = styled.button<ButtonProps>`
  margin: 0 5px;
  font-weight: 400;
  background: var(--background-gray-100);
  color: ${(props) => (props.active ? "var(--orange-300)" : "var(--gray-500)")};
  border: ${(props) => (props.active ? "1px solid var(--orange-300)" : "none")};
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
`;

export const ArrowButton = styled.button`
  background: var(--background-gray-100);
  color: var(--gray-500);
  font-weight: 400;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 3rem;
`;