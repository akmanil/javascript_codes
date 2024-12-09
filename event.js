// javaScript events are
const btn = document.querySelector(".event")

function greet(event){
    console.log("greet",event);
}
// btn.onclick = greet;
btn.addEventListener("click" , greet);
// or
//  btn.addEventListener("click" ,(Event)={
//     console.log("greet" , Event);
     
//   });