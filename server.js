const express = require('express')
let mongoose = require('mongoose')
const cors = require('cors')
//导入路由模块
const router = require('./router/apiRouter')
const app = express()


//配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))
//一定要在路由之前配置cors这个中间件，从而解决接口跨域的问题
app.use(cors())

//把路由模块注册到app上
app.use('/',router)


app.listen(5000,()=>{
    console.log('success running')
})