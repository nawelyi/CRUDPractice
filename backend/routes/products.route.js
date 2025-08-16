import { Router } from "express";
import { getAllProducts, updateProduct, createProduct, deleteProduct } from "../controllers/products.controllers.js";


const router = Router();

router.get('/', getAllProducts); 

router.put('/:id', updateProduct);

router.post('/', createProduct );

router.delete('/:id', deleteProduct )


export default router;