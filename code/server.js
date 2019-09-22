const express = require('express')
const app = express()

app.get('/', function (req, res) {
<<<<<<< HEAD:code/server.js
  res.send('This is Dev!')
=======
  res.send('This is Dev Branch!')
>>>>>>> d05310af263ebbfdafe61440497b7af660b22435:code/server.js
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
