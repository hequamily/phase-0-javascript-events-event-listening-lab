// function addingEventListener() {

//   const input = document.getElementById('button');
//   input.addEventListener('click', function() {
//     alert('I was clicked!');
//     // console.log(`hi`)
//   });
// }

const input = document.getElementById('button');

function clickAlert() {
  console.log('I was clicked!');
}

input.addEventListener('click', clickAlert);
//     const input = document.getElementById('button');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });