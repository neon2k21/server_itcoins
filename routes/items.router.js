const Router = require('express')
const router = new Router()
const itemsController = require('../controller/items.controller')

///post
router.post('/createItem',itemsController.createItem)
router.post('/getItem', itemsController.getItem)
router.post('/addImageToItem', itemsController.addImageToItem)
router.post('/buyItem', itemsController.buyItem)

///delete
router.delete('/deleteItem', itemsController.deleteItem)
router.delete('/removeImageFromItem', itemsController.removeImageFromItem)

///put
router.put('/updateItem', itemsController.updateItem)

///get
router.get('/getAllItem', itemsController.getAllItem)





module.exports = router

