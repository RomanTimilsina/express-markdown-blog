const express = require('express')
const app = express()
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

app.use(express.urlencoded({extended:false}))

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/blog')

app.set('view engine','ejs')



app.get('/', (req, res) =>{
  const articles = [{
    name:'Test Articles',
    createdAt: new Date(),
    description:'Test description'
  },
  {
    name:'Test Articles 2',
    createdAt:new Date(),
    description:'Test description 2'
  }]

  res.render('articles/index' , { articles : articles })

})

app.use('/articles', articleRouter)

app.listen(5000)