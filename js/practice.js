// // console.log(true && 5 > 3 && "javascript"); /// javascript
// if ("false") {
//     console.log('True');
// }
// else {
//     console.log('False');
// } //TRue

// console.log('qwerty'.indexOf('b'));/// -1 indexOf возвращает -1 если ничего не 

// const bootcamp={
//     age:25,
//     name: Fedor,


// }

const numbers = [10, 2, 7, 4, 5, 14, 0,];
//Метод перебирает массив замена for each
// numbers.forEach(function (value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);

// })
// .map создает новый массив перебирая исходныйможно работать с элементом массива, индексом и массивом.
const doubleNumbers = numbers.map(function (value) { return value * 2; });
// console.log(doubleNumbers);
// console.log(numbers);
//Есть массив обьктов база данных. Получить массив всех имен игроков
const players = [
    { name: 'Alex', age: 19, position: 'attack', points: 110, id: 1 },
    { name: 'Serg', age: 20, position: 'defence', points: 15, id: 2 },
    { name: 'Ale', age: 35, position: 'attack', points: 30, id: 3 },
    { name: 'Andrew', age: 24, position: 'attack', points: 40, id: 4 },
];
const playersNames = players.map(function (player) { return player.name; });
// console.log(playersNames);
// увеличиваем количество поинтов у каждого игрока на 10%
const updatePlayers = players.map(function (player) {

    return {
        ...player,
        points: Math.floor(player.points * 1.1)
    };
});
// console.table(updatePlayers);
// console.table(players);

//Увеличение points на 50 у игрока с id 3
const playerIdToUpdate = 3;
const updateIdPlayers = players.map(function (player) {
    if (player.id === playerIdToUpdate) {
        return {
            ...player,
            points: player.points + 50
        };
    } else { return player; }
});
// console.table(updateIdPlayers);
// console.table(players);
const filteredPlayers1 = players.filter(function (player) {
    return player.age < 25;
})
console.table(filteredPlayers);

const filteredPlayers1 = players.filter() 