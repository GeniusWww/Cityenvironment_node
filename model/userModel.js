let mongoose =require('mongoose')
let Schema = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1:27017/test')
//绑定数据库连接的监听
mongoose.connection.once("open",function (err) {
    if (err) {
        console.log('failed', err)

    }else {
        console.log()

    }
})
let userRule = new Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    enabled_flag:{
        type:String,
        default: 'Y'
    }
})
//创建模型对象
module.exports = mongoose.model('users',userRule)//用于生成某个集合对应的模型对象
