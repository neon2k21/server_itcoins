const db = require('../config')



class ItemController{

    async createItem(req,res){
        
        const { name,description,price,qty} = req.body
        const sql = (
            `insert into items (name,description,price,qty) values (?, ?, ?,?);`
        )
        db.all(sql,[name,description,price,qty], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)     
        })
        
    }   

    async getAllItem(req,res){
        const sql = (
            `select * from items;`
        )
        db.all(sql,[], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)
    })
    }

    async getItem(req,res){

        const {id} = req.body

        const sql = (
            `select * from items where id=?;`
        )
        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)
    })
    }

    async updateItem(req,res){
        const { id } = req.body
       
        const sql = (
            `select * from users where id=?;`
        )
        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
    })
    }

    async deleteItem(req,res){
        const { id } = req.body
        const sql = (
            `delete from items where id =?;`
        )
        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
         })
    }    

    async addImageToItem(req,res){
        const { item_id, image } = req.body
        const sql = (
            `insert into items_images (item_id, image) values (?, ?);`
        )
        db.all(sql,[item_id, image], (err,rows) => {
            if (err) return res.json(err)
            else return res.json(rows)     
        })
    }

    async removeImageFromItem(req,res){
        const { id } = req.body
        const sql = (
            `delete from items_images where id =?;`
        )
        db.all(sql,[id], (err,rows) => {
            if (err) return res.json(err)
            else res.json(rows)
         })
    }

    async buyItem(req,res){
        const {id} = req.body
        const item_qty = await getItemQty(db,id)
        if(item_qty>0){
            console.log(item_qty)
        }
    //     const sql = (
    //         `select * from users where (login=? AND pass=?);`
    //     )
    //     db.all(sql,[login, password], (err,rows) => {
    //         if (err) return res.json(err)
    //         if(rows.length === 0) return res.json('Данные не совпадают! Проверьте и повторите попытку')
    //         else res.json(rows)
    // })
    }
   
}

async function getItemQty(db,item_id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT qty
            FROM items
            WHERE id = ?;`, [item_id], (err, row) => {
            if (err) reject(err); // I assume this is how an error is thrown with your db callback
            resolve(row);
        });
    });
}



module.exports = new ItemController()