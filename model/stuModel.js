let mongoose =require('mongoose')
let Schema = mongoose.Schema
let stuRule = new Schema({
    stu_id:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required: true
    },
    gender:{
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
module.exports = mongoose.model('student',stuRule)//用于生成某个集合对应的模型对象

