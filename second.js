

console.log(items.parentNode);
items.parentNode.style.backgroundColor="grey"
console.log(items.parentNode.parentNode)

console.log(items.children[1]);
items.children[1].style.backgroundColor="green"

console.log(items.firstElementChild);
items.firstElementChild.textContent="hello"

console.log(items.lasttElementChild);
items.lastElementChild.textContent="hello1"  

let newDiv = document.createElement("div");
console.log(newDiv);
newDiv.className = "hello"
newDiv.id = "hello1"
newDiv.setAttribute("title", "hello div");

let newDivText = document.createTextNode("hello world");
newDiv.appendChild(newDivText);


