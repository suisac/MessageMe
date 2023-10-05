const express= require('express');
const app= express();
const http= require('http').createServer(app)

const PORT= process.env.PORT || 3300

http.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/follow-me',(req,res)=>{
    res.sendFile(__dirname + '/followMe.html')
})

//socket
const io=require('socket.io')(http)
const users={};
io.on('connection',(socket)=>{
    socket.on('new-user-joined',naam=>{
        
        users[socket.id]=naam;
        socket.broadcast.emit('user-joined',naam);
    })
    socket.on('send',message=>{
        socket.broadcast.emit('recieve',{message:message , name:users[socket.id]})
    })
    socket.on('disconnect',message=>{
        socket.broadcast.emit('leave',users[socket.id])
        delete users[socket.id];
    })
})