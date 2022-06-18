const router = require('express').Router()

const ProductsController = require('../controllers/products')

//verbos http 4 tipos
//get - obter dados
//post - enviar/receber dados
//put - atualizar dados
//delete - deletar/remover dados


router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
//router.delete('/products/:id', ProductsController.delete)

module.exports = router