import { getAllProducts, createProduct, editarProducto, deleteProduct} from '../controller/productos.js';
import express from 'express'
const router = express.Router();
router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', editarProducto)
router.delete('/:id', deleteProduct)

export default router;
