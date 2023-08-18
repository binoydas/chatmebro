const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);



const { Server } = require('socket.io');
const io = new Server(expressServer);


io.on('connection', function (socket) {

   socket.on('chat',function(msg){

  io.emit('chat_show',msg)
 
   })  


    
 

})



app.get('/', function (req, res) {

   res.sendFile(__dirname + "/index.html")

});




expressServer.listen(3398, function () {


   console.log("bioydas server run hoice ")


})



