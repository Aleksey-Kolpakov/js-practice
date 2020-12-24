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
console.log(addButtonRef);
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
console.log(formRef.dataset.action);
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
    console.log(submitData);



})




