let mongoose =require('mongoose')
let Schema = mongoose.Schema
const moment = require('moment')
mongoose.connect('mongodb://127.0.0.1:27017/test')
//绑定数据库连接的监听
mongoose.connection.once("open",function (err) {
    if (err) {
        console.log('failed', err)

    }else {
        console.log()

    }
})
let StrairQualityModel = new Schema({
    pubTime:{
        type:String,


    },
    name:{
        type:String,



    },
    aqi:{
        type:Number,

    },
    level:{
        type:String,

    },
    category:{
        type:String,


    },
    primary:{
        type:String,

    },
    pm10:{
        type:Number,

    },
    pm2p5:{
        type:Number,


    },
    no2:{
        type:Number,

    },
    o3:{
        type:Number,

    },
    so2:{
        type:Number,

    },
    co:{
        type:Number,

    },
    date:{
        type:Date,
        default:moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    },
    enabled_flag:{
        type:String,
        default: 'Y'
    }
})
//创建模型对象
module.exports = mongoose.model('strairquality',StrairQualityModel)//用于生成某个集合对应的模型对象
