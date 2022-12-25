const axios = require('axios')
const moment =require('moment')
const StrairQualityModel = require('./model/StrairQualityModel')
const schedule = require('node-schedule')
let data = []
let a= 0

const task = ()=>{
     schedule.scheduleJob('0 0 */1 * * *',()=>{
        axios.get('https://devapi.qweather.com/v7/air/now?location=101190401&key=ab3e80b3374d47aa80a734dfb296b2e7')
            .then(res=>{
                data = res.data.station

                console.log(++a)
                for(let i = 0;i <= data.length;i++){
                    StrairQualityModel.create({

                        pubTime: moment.utc(data[i].pubTime).local().format('YYYY-MM-DD HH:mm:ss'),
                        name:data[i].name,
                        aqi:data[i].aqi,
                        level:data[i].level,
                        category:data[i].category,
                        primary:data[i].primary,
                        pm10:data[i].pm10,
                        pm2p5:data[i].pm2p5,
                        no2:data[i].no2,
                        o3:data[i].o3,
                        so2:data[i].so2,
                        co:data[i].co,
                    })
                }

            })
            .catch(error=>{
                console.log(error)
            })
   })



}


task()

