function replyBot(){
let t=document.getElementById('userInput').value.toLowerCase();
let r='Thank you for your query.';
if(t.includes('timing')) r='Support is available 24/7';
if(t.includes('contact')) r='Contact: swapnilminde0021@gmail.com';
document.getElementById('chatBox').innerHTML='<p><b>Bot:</b> '+r+'</p>';
}