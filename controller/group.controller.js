const db = require('../config')



class GroupController{

    async createGroup(req,res){
        
        const { name, cube } = req.body
        const sql = (
            `insert into group (name, cube) values (?, ?);`
        )
        db.all(sql,[name, cube], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)     
        })
        
    }   

    async getAllGroups(req,res){
       
        const sql = (
            `select * from group`
        )
        db.all(sql,[], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
    })
    }

    async getCurrentGroup(req,res){
        const { id } = req.body
        const sql = (
            `SELECT u.*
            FROM users u
            INNER JOIN "group" g ON u.grp = g.id
            WHERE g.id = ?;`
        )
        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
    })
    }

    async AddUserToGroup(req,res){
        const { group_id, user_id } = req.body
        const sql = (
            `update users set grp=? where id=?; `
        )
        db.all(sql,[group_id, user_id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
         })
    }    

    async DeleteUserFromGroup(req,res){
        const {user_id} =req.body
        const sql = (
            `update users set grp=0 where id=?;`
        )

        db.all(sql,[user_id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
        })
    }

    async deleteGroup(req,res){
        const {id} =req.body
        const sql = (
            ` delete from group where id=?;`
        )

        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
        })
    }

   
}



module.exports = new GroupController()