// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function() {
//   console.log('Button Clicked');
// }


// btn.onclick = function() {
//   alert('Button was Clicked');
// }

// btn.onclick = function() {
//     alert('Button was Clicked');
// }


// function sayHello() {
//   alert('Hello');
// }

// btn.onclick = sayHello;


// let btns = document.querySelectorAll("button")

// for (btn of btns){
//   btn.onclick = sayHello;
//   btn.onmouseenter = function mouseEnter() {
//     console.log("Mouse entered in button's area")
//   }
// }

// function sayHello() {
//   alert("Liked")
// }



// let btns = document.querySelectorAll("button")

// for (btn of btns){
//   // btn.addEventListener("click", sayHello);
//   // btn.addEventListener("click", sayName);
//   btn.addEventListener("dblclick", function(){
//     console.log("You double clicked button!")
//   });

// }

// function sayHello(){
//   alert("Liked it!")
// }

// function sayName(){
//   alert("Azhar Ali")
// }



// TASK:::

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h1 = document.querySelector("h1");
  let div = document.querySelector("div");
  let randomColor = getrandomColor();

  h1.innerText = randomColor;
  div.style.backgroundColor = randomColor
  btn.style.backgroundColor = randomColor
})

function getrandomColor(){
  let red = Math.floor(Math.random() * 255);  
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}



