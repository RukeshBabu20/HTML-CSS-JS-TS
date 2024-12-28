// function external () {
//     console.log('This is my script')
//     document.getElementById('external').innerHTML = "This is the message from external script"
//     document.getElementById('external1').innerHTML = "This is the message from external script"
// } 

function external() {
  const elements = document.querySelectorAll('.external');
  elements.forEach((element) => {
    element.textContent = 'Message changed!';
  });
}