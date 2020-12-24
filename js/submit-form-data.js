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