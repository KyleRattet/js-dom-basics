console.log("sainity check");

var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

var allListItems = document.getElementsByTagName('li');

console.log(allListItems);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}
console.log(allListItems);

var li = document.createElement('li');
console.log(li);

var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);

getSingleElement.appendChild(li);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prependddd";
console.log(anotherListElement);

getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);

document.getElementById('main').style.backgroundColor = "red";

var propertyTest = document.getElementById('main');

//target button
var button = document.getElementById('main-button');
//this is the event handler(fuction)
function buttonClick () {
  alert("You just clicked the button");
}

//event registration
button.onclick = buttonClick;




