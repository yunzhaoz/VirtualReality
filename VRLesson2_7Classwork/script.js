let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let dudes = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.

  for (let i = 0; i < 5; i++) {
    let x = rnd(-5, 5);
    let y = rnd(1, 3);
    let z = rnd(-5, 5);
    dudes.push(new Dude(x, y, z));
  }
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for (let i = 0; i < dudes.length; i++) {
    dudes[i].jump(); 
  }

  window.requestAnimationFrame( loop );
}