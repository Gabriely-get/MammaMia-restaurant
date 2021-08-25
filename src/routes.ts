import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { 
    res.redirect('/checkout');
});

router.get('/checkout', (req, res) => {
    res.render('checkout', {message: 'Hi!'});
});

export { router };