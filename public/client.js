const socket=io()
const form=document.getElementById('send-container');
const messageInput=document.getElementById('txt');
const messageContainer=document.querySelector('message-body');
const appended=(message,position,NAAM,sendOrRec)=>{
    const messageElement=document.createElement('div')
    messageElement.classList.add('message') 
    messageElement.classList.add(position) 
    let system=`
    <h4>${NAAM}</h4>
    <p class='${sendOrRec}'>${message}</p>
    `
    messageElement.innerHTML=system;
  
    document.getElementById('main').appendChild(messageElement)
    
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    appended(message,'right','you','send')
    socket.emit('send',message)
    messageInput.value='';
   
})
let Name;
// do{
//    Name= prompt('Please Enter Your Name:')
// }while(!Name)
socket.emit('new-user-joined',Name)
socket.on('user-joined', Name=>{
   
    var messageElement = document.createElement("div");               
    messageElement.innerText = `${Name} joined the chat`; 
    messageElement.classList.add('center')              
    document.getElementById('main').appendChild(messageElement)
    
})
socket.on('recieve',data=>{
    
   appended(data.message,'left',data.name,'recieve')           
})
socket.on('leave',naam=>{
    
    var messageElement = document.createElement("div");               
    messageElement.innerText = `${naam} left the chat`; 
    messageElement.classList.add('center')              
    document.getElementById('main').appendChild(messageElement)
 })

