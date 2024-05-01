import { getAllProducts, createProduct, editarProducto, deleteProduct} from '../controller/productos.js';
import express from 'express';
import authenticateToken from "../middleware/auth.js";
const router = express.Router();
router.get('/', getAllProducts);
router.post('/', authenticateToken, createProduct);
router.put('/:id', authenticateToken,  editarProducto)
router.delete('/:id', authenticateToken, deleteProduct)

export default router;
