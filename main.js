//Button Element
let button = document.createElement('button');
document.body.appendChild(button);
button.append('Purge the abomination')

//Main Element
let main = document.createElement('main');
document.body.appendChild(main);

//Image tag
let imageElement = document.createElement('img')
className = "image"
main.append(imageElement)
imageElement.src = "https://i.pinimg.com/564x/c5/c0/97/c5c097e5e8fddce3c3df613285a3c71d.jpg"

//Anchor tag
let anchorElement = document.createElement('a')
className = "anchor"
main.append(anchorElement)
anchorElement.href ='https://www.youtube.com/watch?v=SwvCX94_EWI'

anchorElement.target = '_blank'
anchorElement.append('Tribute to DMG')


//Button: Remove Main

button.addEventListener("click", function () {
    main.remove()
})


//JS Script Element
//let script = document.createElement('script');
//script.src = './main.js';
//document.body.appendChild(script);