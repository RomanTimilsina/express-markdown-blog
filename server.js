const express = require('express')
const app = express()
const Article = require('./models/article')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles')

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/blog')

app.set('view engine','ejs')



app.get('/', async (req, res) =>{
  const articles = await Article.find().sort({createdAt:'desc'})
  console.log(articles)
  res.render('articles/index' , { articles : articles })

})

app.use('/articles', articleRouter)

app.listen(5000)