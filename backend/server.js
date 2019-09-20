const express = require('express')
const app = express()
const axios = require('axios')
const qs    = require('qs')

app.get('/api',(req,res)=>{
    console.log(req.query)
    let url  = 'https://m.study.163.com' + req.query.url
    axios({
        url,
        method:"POST",
        transformRequest: [function (data) {
            return qs.stringify(data)
        }],
        data : {
            frontCategoryId: req.query.frontCategoryId || '',
            type : req.query.type || ''
        },
        headers:{
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
    .then((response)=>{
        res.send(response.data)
    })
})
app.get('/get',(req,res)=>{
    let url  = 'https://m.study.163.com' + req.query.url
    axios({
        url,
        params:{
            prefix: req.query.prefix,
            _t:  new Date().getTime()
        },
        headers:{
            'content-type': 'application/x-www-form-urlencoded',
        },
       
    })
    .then((response)=>{
        res.send(response.data)
    })
})
app.get('/post',(req,res)=>{
    let url = 'https://cps.study.163.com/j/cpsShare/getSharePosterInfo.json'
    console.log(req.query)
    axios({
        url,
        method:"POST",
        transformRequest: [function (data) {
            return qs.stringify(data)
        }],
        data : {
            productId: req.query.productId,
            productType: 0,
            platType: 0
        },
    })
    .then((response)=>{
        res.send(response.data)
    })
})
app.listen(3000,()=>{
    console.log('localhost 3000')
})

