const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})

io.on('connection', function (socket) {
  console.log('user connected')
  socket.on('section', function (id) {
    console.log('received id: ' + id)
    io.emit('section', id)
  })
})

server.listen(3000, () => {
  console.log('server listening on port 3000')
})
