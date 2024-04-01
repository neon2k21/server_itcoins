const db = require('../config')



class UserController{

    async createUser(req,res){
        
        const { fio, login, pass,email,token } = req.body
        const sql = (
            `insert into users (fio, login, pass,email,token,role,coins) values (?, ?, ?,?,?,1,0);`
        )
        db.all(sql,[fio, login, pass,email,token], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)     
        })
        
    }   

    async getUser(req,res){
        const { login, password} = req.body
        console.log(login, password)
        const sql = (
            `select * from users where (login=? AND pass=?);`
        )
        db.all(sql,[login, password], (err,rows) => {
            if (err) return res.json(err)
            if(rows.length === 0) return res.json('Данные не совпадают! Проверьте и повторите попытку')
            else res.json(rows)
    })
    }

    async getUserFIO(req,res){
        const { id } = req.body
       
        const sql = (
            `select * from users where id=?;`
        )
        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
    })
    }

    async deleteUser(req,res){
        const { id } = req.body
        const sql = (
            `delete from users where id =?;`
        )
        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
         })
    }    

    async setUserToken(req,res){
        const {user, token} =req.body
        const sql = (
            ` update users set token=? where id=?;`
        )

        db.all(sql,[token, user], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
        })
    }

    async setUserAvatar(req,res){
        const {id,avatar} =req.body
        const sql = (
            ` update users set avatar=? where id=?;`
        )

        db.all(sql,[avatar, id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
        })
    }

    async changeUserBalance(req, res){
        const {id,coins} =req.body
        const sql = (
            ` update users set coins=? where id=?;`
        )

        db.all(sql,[coins, id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
        })
    }

    
}



module.exports = new UserController()