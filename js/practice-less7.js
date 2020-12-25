// const ulRef = document.querySelector('#categories ul');
// console.log(ulRef);
// const liItemsRef = document.querySelectorAll(".item li");
// console.log(liItemsRef);
// // ulRef.textContent = "Привет Бродяги!"
// const h2ItemRef = document.querySelector('.item h2');
// h2ItemRef.style.color = "red";
// console.log(h2ItemRef.classList);

// console.dir(h2ItemRef);


// h2ItemRef.textContent = "Опача малыши";
// const imgRef = document.querySelector(".item img");
// imgRef.src = "https://bigpicture.ru/wp-content/uploads/2012/07/cats-3.jpg"
// imgRef.width = 150;
// console.log(imgRef.src);

// const containerRef = document.createElement('div');
// containerRef.classList.add('.container');
// const h2Ref = document.createElement('h2');
// // h2Ref.classList.add('title');
// h2Ref.class = 'title3';
// h2Ref.width = 150;
// h2Ref.setAttribute('width', 150);
// h2Ref.classList = 'title';
// const ulRef = document.createElement('ul')
// h2Ref.textContent = "Заголовок";
// console.log(h2Ref);
// const rootDivRef = document.querySelector('#root');
// rootDivRef.id = "root-class";
// rootDivRef.width = 300;
// rootDivRef.classList += ' another-class';
// console.dir(rootDivRef);
// const imageRef = document.querySelector('.img');
// console.log(imageRef);
// imageRef.width = 100;
// // containerRef.appendChild(h2Ref);
// // containerRef.appendChild(ulRef);

// containerRef.append(h2Ref, ulRef);
// console.log(containerRef);

const addButtonRef = document.querySelector('.js-add');
const removeButtonRef = document.querySelector('.js-remove');
const targetBtnRef = document.querySelector('.target-button');
// console.log(addButtonRef);
const imWorking = function () { console.log("I'm working") };
addButtonRef.addEventListener("click", () => {
    targetBtnRef.addEventListener("click", imWorking);
    console.log("Добавил слушателя")

});
removeButtonRef.addEventListener("click", () => {
    targetBtnRef.removeEventListener("click", imWorking);
    console.log("Убрал слушателя слушателя")
});
targetBtnRef.addEventListener("click", event => {
    console.dir(event.target);
});
const formRef = document.querySelector('[data-action="form-action"]');
// console.log(formRef.dataset.action);
formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const formelements = event.target;
    // Сбор всей формы 
    const formData = new FormData(event.target);
    console.log(formData);
    const submitData = {};
    formData.forEach((value, key) => {
        console.log(`value: ${value}`);
        console.log(`key: ${key}`);
        submitData[key] = value;


    });
    // console.log(submitData);



})

const inputRef = document.querySelector('#name');
console.log(inputRef);
inputRef.addEventListener('input', event=>{
    console.log(event.target.value);
    targetBtnRef.textContent = event.target.value;
});

const checkboxRef = document.querySelector('[name="checkbox"]');
checkboxRef.addEventListener('change',(event)=> {
    console.log(event);
    targetBtnRef.disabled = !event.target.checked;
});

document.addEventListener('keypress', function (e) {
    console.log('event.key', e.key);
    console.log('event.code', e.code);
    //e.code- местоположение на английской раскладке не чуствтелен к языку, хранится клавиша
});
//If we need special keys as Esk, <- etc
document.addEventListener('keydown', function (e) {
   console.log(e);
});
const h1Ref = document.querySelector('.title');
document.addEventListener('keydown', function (event) {
    h1Ref.textContent += event.key;
});
const div1Ref = document.querySelector('.js-div1');
const div2Ref = document.querySelector('.js-div2');
// div1Ref.addEventListener('mouseenter', function (event) {
// const div=event.target
//     div.classList.add('js-active');
    
// });
// div1Ref.addEventListener('mouseleave', function (event) {
// const div=event.target
//     div.classList.remove('js-active');
    
// });

div1Ref.addEventListener('mouseover', function (event) {
const div=event.target
    // div.classList.add('js-active');
    console.log(event);
    });