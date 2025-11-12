let maze = [
  "xxxxxxxxxxxxxxxxxxxxxx",
  "----T-T-----------TTTx",
  "xTT-T---TTTTTTT-T----x",
  "xT----TTTT------T-TT-x",
  "xT-TT------TTTT-T--T-x",
  "x--T-TTTTT-T----TT-T-x",
  "x-TT-TT------TT----T-x",
  "x-------TTTT--TTT-T--x",
  "xT-TTTT-TTTT-TT-T--TTx",
  "xT---TT-T----TT-TT---x",
  "xT-T----TTTT-----TTT--",
  "xxxxxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})