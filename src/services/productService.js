import axiosInstance from "../utils/axiosInstance";

export const fetchProducts = async () => {
  const { data } = await axiosInstance.get("/products");
  return data;
};

export const deleteProduct = async (productId) => {
  const { data } = await axiosInstance.delete(`/products/${productId}`);
  return data;
};

export const updateProduct = async (product) => {
  const { data } = await axiosInstance.put(
    `/products/${product.code}`,
    product
  );
  return data;
};
