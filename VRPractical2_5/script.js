/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

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

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

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
        new Cylinder(c,1,r);
      }
    }

  }

})