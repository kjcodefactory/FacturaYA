import ProductTable from "../components/Inventory/ProductTable";
import { useProducts } from "../hooks/useProducts";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

const Inventory = () => {
  const { data: products, isLoading, isError } = useProducts();
  const deleteProductMutation = useDeleteProduct();
  const updateProductMutation = useUpdateProduct();

  const handleDelete = (product) => {
    deleteProductMutation.mutate(product.code);
  };

  const handleEdit = (product) => {
    console.log("Editar producto:", product);
    updateProductMutation.mutate(product);
  };

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products. Please try again later.</p>;

  return (
    <div>
      <h1>Inventario</h1>
      <ProductTable
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Inventory;
