class Mech{
    constructor() {
        this.mechTemplate = document.querySelector(templateSelector);
        const mechClone = mechTemplate.cloneNode(true);
        mechClone.setAttribute("position", position);

        
        document.querySelector("a-scene").appendChild(mechClone);
    }
}   