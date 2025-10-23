class Cloud{
  constructor(x,y,z){
     this.obj = document.createElement("a-entity");


     let sphere = document.createElement("a-sphere");
     sphere.setAttribute("color","white");
     sphere.setAttribute("position",{x:2,y:1,z:1});
     this.obj.append( sphere );

     let sphere1 = document.createElement("a-sphere");
     sphere1.setAttribute("position",{x:1,y:1,z:1});
     sphere1.setAttribute("colors","yellow");
     this.obj.append( sphere1 );

     let sphere2 = document.createElement("a-sphere");
     sphere.setAttribute("color","white");
     sphere.setAttribute("position",{x:0,y:0,z:1});
     this.obj.append( sphere2 );

     this.obj.setAttribute("position",{x:x, y:y, z:z});
     scene.append( this.obj )
  }
}