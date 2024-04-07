const Router = require('express')
const router = new Router()
const orderController = require('../controller/order.controller')

///post
router.createOrder('/createCube',orderController.createOrder)

///delete
router.delete('/deleteOrder', orderController.deleteOrder)

///put
router.put('/updateOrder', orderController.updateOrder)

///get
router.get('/getAllOrder', orderController.getAllOrder)






module.exports = router