# movise_List 電影清單
依照 AC 教案練習建立網頁
## 學習內容
* 如何透過 Express 設定路由
* 透過模板引擎來處理 HTML，其中包含佈局（layout）和局部模板（partial template）
* 將資料從路由傳入模板引擎內使用
* 在模板中使用 #each 迴圈來重複產生相同的內容
* 載入外部的 JSON 資料檔
* 使用 :params 建立動態路由，並透過 req.params 取得內容
* 透過 req.query 取得網址 ? 後方的查詢字串（queryString）篩選和過濾資料

## 功能描述
* 使用者可在首頁看到所有的電影清單
* 點擊看此電影的詳細介紹
* 利用搜尋功能尋找電影

## 安裝與執行步驟
1.  在終端機輸入指令 Clone 此專案至本機電腦
```js
git clone https://github.com/singingw/movies_list.git
```
2.  移至檔案夾
```js
cd movies_list
```
3.  安裝相關套件
```js
npm install
```
4.  打開終端
```js
npm run dev
```
5.  使用瀏覽器開啟：http://localhost:3000 即可瀏覽本專案

## 環境建置與需求
1. Node.js & npm - JavaScript 運行環境
2. Express.js - Web 應用程序框架
3. Express-Handlebars - 模板引擎