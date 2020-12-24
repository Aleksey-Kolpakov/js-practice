// console.log(document);
// let item3 = document.querySelector('#item3');
// console.log(item3);
// // console.log(document.body);
// let list = item3.parentNode;
// console.log(item3.parentElement);
// console.log(list);
// console.log(list.children);

let root = document.querySelector('#root');
let header = document.createElement('header');
let heroContainer = document.createElement('div');
let mainTitle = document.createElement('h1');
let pictureContainer = document.createElement('div');
let pictureDiv = document.createElement('div');
let titleContainer = document.createElement('div');
let name = document.createElement('h2');
let creator = document.createElement('h3');
root.append(header);
header.append(heroContainer);
heroContainer.append(mainTitle);
mainTitle.append(pictureContainer);
pictureContainer.append(pictureDiv);
heroContainer.classList.add("hero--container");
pictureContainer.classList.add("picture--container");
pictureDiv.classList.add('picture');
mainTitle.textContent = "Jgfxrb ht,znf"
