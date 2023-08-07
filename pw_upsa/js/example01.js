//Traversing
const navegacion = document.querySelector('.card')
console.log(navegacion.innerHTML)
console.log(navegacion.childNodes);
console.log(navegacion.children);
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);





console.log(navegacion.children[1].children[1].textContent);
console.log(navegacion.children[1].textContent);
navegacion.children[1].children[1].textContent = 'HOLLLLLLAAA'
