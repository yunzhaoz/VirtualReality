let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new Snowman(x,z);
    snowmen.push(snowman);
  }

  //Challenge 1: Create an array to store 20 clouds in random positions

  let clouds = [];
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let cloud = new Cloud(x, 1 , z);
    clouds.push(cloud);
  }

  //Challenge 3: Create an array to store 100 snowflakes in random positions

  let snowfalkes = [];
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowfalke = new Snowfake(x, 1 , z);
    snowfalkes.push(snowfake);
  }
  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }

  //Challenge 2: Traverse your array of clouds and make each cloud fly
  for (let cloud of clouds){
    cloud.fly();
  }
  
  //Challenge 4: Traverse your array of snowflakes and make each snowflake fall
  for (let snowfalke of snowfalkes){
    snowfake.fall();
  }
  window.requestAnimationFrame( loop );
}
