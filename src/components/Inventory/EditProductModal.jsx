import { useState, useEffect } from "react";
import { Modal, TextField, Box, Typography } from "@mui/material";
import CancelButton from "../Common/CancelButton";
import ConfirmButton from "../Common/ConfirmButton";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

// NOTA: En la interfaz cuando se edita un producto y cancelas, los campos no se reinician

const EditProductModal = ({ open, onClose, onConfirm, product }) => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    category: "",
    quantity: 0,
    sale_price: 0,
  });

  // Se actualiza formData cuando cambia product
  useEffect(() => {
    if (product) {
      setFormData({
        code: product.code || "",
        name: product.name || "",
        category: product.category || "",
        quantity: product.quantity || 0,
        sale_price: product.sale_price || 0,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">Editar Producto</Typography>

        <TextField
          label="Código"
          value={product?.code || ""}
          fullWidth
          disabled
          margin="normal"
        />
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Categoría"
          name="category"
          value={formData.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cantidad"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Precio de Venta"
          name="sale_price"
          type="number"
          value={formData.sale_price}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <CancelButton onClick={onClose} text="Cancelar" />
          <ConfirmButton onClick={() => onConfirm(formData)} text="Editar" />
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
