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
// console.table(filteredPlayers1);

const filteredPlayers2 = players.filter(function (player) {
    return player.points > 50;
}) 
// console.table(filteredPlayers2);

 // Нахождение нужного єлемента
const playerToFind = 'Serg';
const requiredPlayer = players.find(function (player) {
    return player.name === playerToFind;
})
// console.log(requiredPlayer);

const isAllPlayersYoung = players.every(function (player) {
    return player.age < 40;
})
// console.log(isAllPlayersYoung);

const isSomePlayerYoung = players.some(function (player) {
    return player.age < 20;
});
    // console.log(isAllPlayersYoung);

const playersPoints = players.map(function (player) {
    return player.points;
})    
// console.log(playersPoints);
const pointsTotal = playersPoints.reduce(function (total,point) {
    return total + point; 
})
// console.log(pointsTotal);

const pointsTotal2 = players.reduce(function (total, player) {
  return total+player.points  
}, 0);
// console.log(pointsTotal2);

const tweets = [
    { id: 1, likes: 20, tags: ['js', 'css'] },
    { id: 2, likes: 210, tags: ['json', 'c++'] },
    { id: 3, likes: 120, tags: ['java', 'css'] },
    { id: 4, likes: 2, tags: ['php', 'css'] }
];
const allTags= tweets.reduce(function (tags,tweet) {
    return [
        ...tags, ...tweet.tags
    ];
},[])
console.log(allTags);

const tagsStat = allTags.reduce(function (tagsStat, tag) {

    return {
        ...tagsStat,
        [tag]: tagsStat.hasOwnProperty(tag) ? tagsStat[tag] + 1 : 1
    }
}, {})
console.log(tagsStat);