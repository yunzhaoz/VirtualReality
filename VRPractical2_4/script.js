let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let rocket = new Rocket(x, 0 , z);
    rocket.scale(rnd(1,4));
  }

  loop();
})

function loop(){

  
  window.requestAnimationFrame( loop );
}
