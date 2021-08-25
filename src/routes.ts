import express from 'express';
import ProductController from './controller/ProductController';

const router = express.Router();

const productController = new ProductController();

router.get('/', (req, res) => { 
    res.redirect('/checkout');
});

router.get('/checkout', async (req, res) => {
    const allProducts = await productController.getAll();
    
    res.render('checkout', { products: allProducts });
});
export { router };