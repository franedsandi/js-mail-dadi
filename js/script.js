/* invited emails */
const invited = ['hello@hotmail.com','hi@hotmail.com','Inter@hotmail.com','youtube@hotmail.com','google@hotmail.com','pavia@hotmail.com','hello@gmail.com','hi@gmail.com','Inter@gmail.com','youtube@gmail.com','google@gmail.com','pavia@gmail.com'];
console.log (invited);
const email =  document.getElementById('email');
const button1 = document.getElementById('btn-1');
const outputmessage =  document.getElementById('outputmessage');
button1.addEventListener('click', function(){
if (email == invited){
  document.outputmessage.innerHTML = holi;
}
})