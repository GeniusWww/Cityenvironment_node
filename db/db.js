let mongoose = require('mongoose')


function  mongoConnect(callback){

    mongoose.connect('mongodb://127.0.0.1:27017/test')
    //绑定数据库连接的监听
    mongoose.connection.once("open",function (err) {
        if (err) {
            console.log('failed', err)
            callback('failed')
        }else {
            console.log()
            callback()
        }
    })
}
module.exports = mongoConnect
