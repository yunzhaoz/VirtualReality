
window.addEventListener("DOMContentLoaded",function() {

    loop();
})
function loop(){
    car = document.querySelector("#car");
    car.setAttribute("position", {x:car.getAttribute("position").x+=0.1, y:0, z:-8});
    
    ball = document.querySelector("#pokemonball");
    ball.setAttribute("rotation", {x:ball.getAttribute("rotation").x+=1, y:0, z:0} );

    rocket = document.querySelector("#rocket");
    rocket.setAttribute("rotation", {x:0, y:rocket.getAttribute("position").y+=0.1, z:0} );

    dude = document.querySelector("#dude");
    dude.setAttribute("scale", {x:dude.getAttribute("scale").x+=0.01, y:dude.getAttribute("scale").y+=0.01, z:dude.getAttribute("scale").z+=0.01});

    sun = document.querySelector("#sun");
    sun.setAttribute("scale", {x:sun.getAttribute("scale").x-=0.01, y:sun.getAttribute("scale").y-=0.01, z:sun.getAttribute("scale").z-=0.01});


    window.requestAnimationFrame(loop);
}
