/*let stack = {
    length: 0,
    mem: [],
    push: function(elem){
        this.mem.push()
    }
};*/



function treeOfTags(idOfTag){
    const rootElem = document.getElementById(idOfTag);
    let currentElem;
    let output = document.getElementById('output');
    let masElems = [];
    if (rootElem.firstElementChild != undefined){
        currentElem = rootElem.firstElementChild;
        masElems.push(rootElem.firstElementChild);
        while(currentElem){
            //output.lastChild = "li";
            if (currentElem.firstElementChild != undefined){
                currentElem = currentElem.firstElementChild;
                masElems.push(currentElem.firstElementChild);
            } else if (currentElem.nextElementSibling != undefined) {
                currentElem = currentElem.nextElementSibling;
                masElems.push(currentElem.nextElementSibling);
            } else
                continue;
        }
    }

}

