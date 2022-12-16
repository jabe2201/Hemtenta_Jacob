randomList = function () {
    let randomLi = Math.floor(Math.random()*10)+1;
    let listDiv = document.querySelector('#resultat');
    listDiv.childNodes.forEach(child => {
        child.remove();
    })
    let listOl = document.createElement('ol');
    listDiv.appendChild(listOl);
    for (i = 0; i < randomLi; i++){
        let randomNb = Math.floor(Math.random()*100)+1;
        let listLi = document.createElement('li');
        listLi.innerText = randomNb;
        listOl.appendChild(listLi);
    }
}


