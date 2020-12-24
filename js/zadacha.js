//moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
//что б при выводе console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) выводился измененный оригинальный, в котором все 0 стоят в конце массива
// const moveZeros = function (array) {
//     for (let i = array.length - 1; i >= 0; i -= 1) {
//         if (array[i] === 0) {
//             array.push(array[i]);
//             array.splice(i, 1);

//         }
//     }
//     return array;
// }
// const arr = [false, 1, 0, 1, 2, 0, 0, 0, 1, 3, "a"];
// moveZeros(arr);
// console.log(arr);

// 
// function digital_root(n) {
//     while (`${n}`.length > 1) {
//         const numbers = `${n}`.split('');
//         let sum = 0;
//         for (const number of numbers) {
//             sum += Number(number);
//         }
//         n = sum;
//     }
//     return n;
// }

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }

//elem.dataset.название