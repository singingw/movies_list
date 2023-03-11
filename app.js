//載入 express 框架
const express = require('express')
//express 內含 HTTP 連線的模組，預設 const hostname = 'localhost'
const app = express()
const port = 3000//連接埠號 (port number) 

//載入 express-handlebars 
const exphbs = require('express-handlebars')
//載入 movies 清單
const movieList = require('./movies.json')
//`app.engine`：透過這個方法來定義要使用的樣板引擎
//第一個參數是這個樣板引擎的名稱
//第二個參數是放入和此樣板引擎相關的設定
//這裡設定了預設的佈局（default layout）需使用名為 `main` 的檔案。
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
//`app.set`：告訴 Express 說要設定的 `view engine` 是 `handlebars`。
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  // indexhandlebars 以 movies 變數取 movieList 中的值
  res.render('index', { movies: movieList.results })
})
app.get('/movies/:movie_id', (req, res) => {
  const movie = movieList.results.find(
    //movie.id 先透過 .toString() 轉換成字串
    movie => movie.id.toString() === req.params.movie_id
  )
  res.render('show', { movie: movie })
})
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const movies = movieList.results.filter(movie => {
    return movie.title.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { movies: movies, keyword: keyword })
})
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})//啟動並監聽伺服器