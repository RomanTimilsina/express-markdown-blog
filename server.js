const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')

app.set('view engine','ejs')

app.use('/articles', articleRouter)

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

app.listen(5000)