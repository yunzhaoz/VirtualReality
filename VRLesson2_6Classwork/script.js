let scene; 
let mech1;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");

  mech1 = new Mech()
  mech1.spawn("5 13 -10");

  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
