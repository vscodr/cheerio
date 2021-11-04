const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const url = 'https://www.theguardian.com/uk'
app.listen(PORT, ()=> console.log(`server is running on PORT ${PORT}`))

axios(url).then(res => {
    const articles =[]
    const html = res.data 
    const $ = cheerio.load(html)
    $('.fc-item__title', html).each( function() {
        const title = $(this).text()
        const arturl = $(this).find('a').attr('href')
        articles.push({
            title,
            arturl
            })
        })
    console.log(articles);
}).catch(err => console.error(err))