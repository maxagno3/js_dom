let button = document.createElement('button');
button.innerText = 'Click Me!';
document.body.append(button);
button.addEventListener('click', changeColor);
function changeColor(){
    document.body.style.backgroundColor = 'red';
}

//Bonus
document.addEventListener('click', randomColor);
function randomColor(){
    let newColor = '0123456789abcdef'.split('');
    let hashTag = '#';
    for(let i=0; i<6; i++){
        hashTag += newColor[Math.floor(Math.random() * 15)];
    }
    document.body.style.backgroundColor = hashTag;
}