// console.log("sainity check");

var firstParagraph = document.getElementById('main');
  console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

var allListItems = document.getElementsByTagName('li');

console.log(allListItems);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerHTML = i);
}

var li = document.createElement('li');
console.log(li);

var newElement = li.innerHTML = "another list item";
console.log(newElement);
console.log(li);

//add child element to the list
getSingleElement.appendChild(li);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerHTML = "prepend";
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);

document.getElementById('main').style.backgroundColor = "red";

getSingleElement.style.backgroundColor = "yellow";

getSingleElement.children[0].style.backgroundColor = "blue";

document.getElementById('main-button').addEventListener("click", function () {
  alert("you clicked");
});

getSingleElement.children[0].addEventListener("click", function () {
  alert(getSingleElement.children[0].innerHTML);
});

getSingleElement.lastChild.addEventListener("mouseover", function () {
  alert("you are hovering over this list item");
});
