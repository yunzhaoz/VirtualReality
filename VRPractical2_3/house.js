class House{
  constructor(x,y,z){
     this.obj = document.createElement("a-entity");
  
     let box = document.createElement("a-box");
     box.setAttribute("color","beige");
     box.setAttribute("position","0 0 0");
     this.obj.append( box );

     let roof = document.createElement("a-cone");
     roof.setAttribute("position","0 1 0");
     roof.setAttribute("color","red");
     roof.setAttribute("radius","0.25");
     this.obj.append( roof );

     this.obj.setAttribute("position",{x:x, y:y, z:z});
     scene.append( this.obj )
  }
}