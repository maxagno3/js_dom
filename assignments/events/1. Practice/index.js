//Select the section with an id of container without using querySelector.
let withoutContainer = document.getElementById('container');

//Select the section with an id of container using querySelector.
let selectID = document.querySelector('#container');

//Select all of the list items with a class of "second".
let listItems = document.querySelectorAll('.second');


//Select a list item with a class of third, but only the list item inside of the ol tag.
let classThird = document.querySelector('ol .third');


//Give the section with an id of container the text "Hello!".
// selectID.innerText = 'Hello!';


//Add the class main to the div with a class of footer.
let mainDiv = document.querySelector('.footer');
mainDiv.classList.add('main');

//Remove the class main on the div with a class of footer.
mainDiv.classList.remove('main');

//Create a new li element.
let newEl = document.createElement('li');


//Give the li the text "four".
newEl.innerText = 'four';


//Append the li to the ul element.
document.querySelector('ul').append(newEl);


//Loop over all of the list inside the ol tag and give them a background color of "green".
let newLoop = document.querySelector('ol');
let loopChildren = newLoop.children
for(let i=0; i<loopChildren.length; i++){
    loopChildren[i].style.backgroundColor = 'green';
}

//Remove the div with a class of footer.
let removing = document.querySelector('.footer');
removing.parentNode.removeChild(removing);