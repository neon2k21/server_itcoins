const Router = require('express')
const router = new Router()
const groupController = require('../controller/group.controller')

///post
router.post('/createGroup',groupController.createGroup)
router.post('/getCurrentGroup', groupController.getCurrentGroup)

///delete
router.delete('/deleteGroup', groupController.deleteGroup)

///put
router.put('/AddUserToGroup', groupController.AddUserToGroup)
router.put('/DeleteUserFromGroup', groupController.DeleteUserFromGroup)

///get
router.get('/getAllGroups', groupController.getAllGroups)





module.exports = router