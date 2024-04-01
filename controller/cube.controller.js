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

   
}



module.exports = new CubeController()