const express = require('express')
const router = express.Router()
const userModel = require('../model/userModel')

const db = require('../db/db')



router.post('/login',async (req,res)=>{
    //通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const lgbody = req.body
    // db(function(err){
    //     if(err){console.log(err)}else {
    //
    //         userModel.find({email:lgbody.email},(err,data)=>{
    //             if(!err){
    //                 if(data.password == lgbody.password){
    //                     res.send({
    //                         status:0, //0表示处理成功，1表示失败
    //                         msg:'POST请求成功',
    //                         data:lgbody //需要响应给客户端的数据
    //                     })
    //                 }else {
    //                     res.send({
    //                         status:1, //0表示处理成功，1表示失败
    //                         msg:'POST请求失败',
    //                         data:lgbody //需要响应给客户端的数据
    //                     })
    //                 }
    //             }
    //             else{
    //                 res.send({
    //                     status:1, //0表示处理成功，1表示失败
    //                     msg:'POST请求失败',
    //                     data:lgbody //需要响应给客户端的数据
    //                 })
    //             }
    //         })
    //     }
    // })
    // db(function (err){
    //     if(err)console.log(err)
    //     else {
    //         userModel.find({email:lgbody.email},(err,data)=>{
    //             if(!err){
    //                 if(data[0].password===lgbody.password){
    //                     res.send({
    //                         status:0, //0表示处理成功，1表示失败
    //                         msg:'POST请求成功',
    //                         data:lgbody //需要响应给客户端的数据
    //                     })}else {
    //                     res.send({
    //                         status:1, //0表示处理成功，1表示失败
    //                         msg:'POST请求失败',
    //                         //data: //需要响应给客户端的数据
    //                     })
    //
    //                 }
    //                 }
    //
    //
    //
    //         })
    //     }
    // })
    console.log(lgbody)

    const userlogin = await userModel.find({email:lgbody.email})
    console.log(userlogin)
    if(userlogin.length === 0){
        res.send({
            status:1,
            msg:'登录失败'
        })

    }
    else {
        if(userlogin[0].password===lgbody.password){
            res.send({
                status:0,
                msg:'登录成功'
            })
        }else {
            res.send({
                status:1,
                msg:'登录失败'
            })
        }
    }



})
router.post('/register',async (req,res)=>{
    //通过req.body获取请求体中包含的url—encoded格式的数据
    // let username = req.body.data.username
    // let email = req.body.data.email
    // let password = req.body.data.password
    const body = req.body
    console.log(body)


    const user = await userModel.create({
        username:body.username,
        email:body.email,
        password:body.password,
    })
    res.send({
        status:0,
        msg:'注册成功'
    })

})
router.post('/saveairquality',async (req,res)=>{
    const body = req.body
    console.log(body)

    // const airquality = await airQualityModel.create({
    //     pubTime:body.pubTime,
    //     name:body.name,
    //     aqi:body.aqi,
    //     level:body.level,
    //     category:body.category,
    //     primary:body.primary,
    //     pm10:body.pm10,
    //     pm2p5:body.pm2p5,
    //     no2:body.no2,
    //     o3:body.o3,
    //     so2:body.so2,
    //     co:body.co
    // })
})
module.exports=router