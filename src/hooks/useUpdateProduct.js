import { useMutation, useQueryClient } from "react-query";
import { updateProduct } from "../services/productService";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProduct, {
    onSuccess: () => {
      // Actualiza la lista de productos
      queryClient.invalidateQueries("products");
    },
  });
};
