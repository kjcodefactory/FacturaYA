import { useQuery } from "react-query";
import { fetchProducts } from "../services/productService";

export const useProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts });
