

// const checkId = function (id) {
//     if (id > 4 && id <= 8) {
//         console.log(true);
//         return true;
//     } else {
//         console.log(false);
//         return false;
//     }
// };
// const highOrder = function (callback) {
//     const id = 67889;
//     callback(id);

// }
// highOrder(checkId);
// const showThis = function (name) {
//     console.log("this is", this, "а это парень", name);

// }
// const user = { name: 'Aleksey' };
// // showThis();
// user.func = showThis;
// // user.func();
// const userShowThis = showThis.bind(user, "Игорь");
// userShowThis("Aleksey");


function duplicateCount(text) {
    const textArray = text.toLowerCase().split("");
    console.log(textArray);


    const RecurDigits = textArray.reduce((arrayRecurDigits, element, index) => {

        if (!arrayRecurDigits.includes(element) && textArray.slice(index + 1).includes(element)) {
            arrayRecurDigits.push(element)
        }
        return arrayRecurDigits;
    }, []);
    return RecurDigits.length;
}
duplicateCount('Indivisibilities');
console.log(duplicateCount('Indivisibilities'));
