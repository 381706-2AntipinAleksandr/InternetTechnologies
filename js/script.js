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
    for (let i = 0; i < rootElem.children.length; i++){
        currentElem = rootElem.children[i];
        masElems.push(rootElem.children[i]);
        while(currentElem){
            output.lastChild = "li";
            
        }
    }
}

