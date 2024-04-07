const Router = require('express')
const router = new Router()
const cubeController = require('../controller/cube.controller')

///post
router.post('/createCube',cubeController.createCube)

///delete
router.delete('/deleteCube', cubeController.deleteCube)

///put
router.put('/renameCube', cubeController.renameCube)






module.exports = router