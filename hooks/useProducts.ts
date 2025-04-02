import api from "@/service/api";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: "mugs" | "t-shirts";
  image_url: string;
  price_in_cents: number;
  sales: number;
  created_at: string;
}

export interface ProductsResponse {
  data: {allProducts: Product[];}
}

const fetchAllProducts = async (): Promise<Product[]> => {
  const query = {
    query: `
      query {
        allProducts {
          id
          name
          description
          category
          image_url
          price_in_cents
          sales
          created_at
        }
      }
    `,
  };

  const {data} = await api.post<ProductsResponse>("/", query);
  console.log("API Response:", data);

  return data.data.allProducts;
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    staleTime: 1000 * 60 * 5,
  });
};
