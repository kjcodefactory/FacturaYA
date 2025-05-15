import { useMutation, useQueryClient } from "react-query";
import { deleteProduct } from "../services/productService";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: () => {
      // Refrescar la cache de productos
      queryClient.invalidateQueries("products");
    },
  });
};
