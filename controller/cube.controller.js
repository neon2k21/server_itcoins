const db = require('../config')



class CubeController{

    async createCube(req,res){
        
        const { name } = req.body
        const sql = (
            `insert into cube (name) values (?);`
        )
        db.all(sql,[name], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)     
        })
        
    }   

    async deleteCube(req,res){
        const {id} =req.body
        const sql = (
            ` delete from cube where id=?;`
        )

        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
        })
    }

    async renameCube(req,res){
        const { cube_id, name } = req.body
        const sql = (
            `update cube set name=? where id=?; `
        )
        db.all(sql,[name, cube_id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
         })
    } 

   
}



module.exports = new CubeController()