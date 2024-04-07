const db = require('../config')
const { format } = require('date-fns');



class orderController{

    async createOrder(req,res){
        const today = new Date();
        const formattedToday = format(today, 'yyyy-MM-dd');
        
        const { item_id, user_id, qty, status, admin_id} = req.body
        const sql = (
            `insert into orders (item_id, user_id, qty, status, admin_id, data ) values (?, ?);`
        )
        db.all(sql,[item_id, user_id, qty, status, admin_id, formattedToday], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)     
        })
        
    } 
    
    async deleteOrder(req,res){
        const { id } = req.body
        const sql = (
            `delete from orders where id =?;`
        )
        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
         })
    }   

    async getAllOrder(req,res){
        const sql = (
            `select * from orders;`
        )
        db.all(sql,[], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)
    })
    }

    async updateOrder(req,res){
        const { status, id } = req.body
       
        const sql = (
            `update orders set status=? where id=?;`
        )
        db.all(sql,[status, id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
    })
    }

}

module.exports = new orderController()