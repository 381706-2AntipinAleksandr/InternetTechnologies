
function treeOfTags(idOfTag){
    const rootElem = document.getElementById(idOfTag);
    let currentElem;
    let outputStart = document.getElementById('output');
    let masElems = [];
    let masElems2 = [];
    if (rootElem.firstElementChild != undefined){
        currentElem = rootElem.firstElementChild;
        masElems.push(rootElem.firstElementChild);
        while(masElems[masElems.length - 1] != undefined){
            currentElem = masElems.pop();
            if (currentElem.parentElement === rootElem){
                masElems2.push(currentElem);
            }
            if (currentElem.nextElementSibling != undefined){
                masElems.push(currentElem.nextElementSibling);
            }
            if (currentElem.firstElementChild != undefined) {
                masElems.push(currentElem.firstElementChild);
            }
        }
    }
    building(masElems2, outputStart);
}

function building(mas, start){
    let outputCurrentUL = document.createElement('ul');
    let outputStart = start;
    outputStart.append(outputCurrentUL);
    for(let i = 0; i < mas.length; i++){
        let outputCurrentLIO = document.createElement('li');
        outputCurrentLIO.innerHTML = 'tag - ' + mas[i].tagName + ', id - ' + mas[i].id;
        outputCurrentUL.append(outputCurrentLIO);
        if(mas[i].firstElementChild != undefined){
            let masRec = [];
            for (let j = 0; j < mas[i].children.length; j++){
                masRec[j] = mas[i].children[j]
            }
            building(masRec, outputCurrentUL);
        }
    }
}