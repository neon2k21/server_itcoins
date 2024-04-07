const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

///post
router.post('/createUser',userController.createUser)
router.post('/getUser', userController.getUser)
router.post('/getUserFio', userController.getUserFIO)

///delete
router.delete('/deleteUser', userController.deleteUser)

///put
router.put('/setUserToken', userController.setUserToken)
router.put('/setUserAvatar', userController.setUserAvatar)
router.put('/changeUserBalance', userController.changeUserBalance)



module.exports = router

