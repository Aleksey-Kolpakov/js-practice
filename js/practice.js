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
// newPlayers=[];
// for (const player of players) {
//     newPlayers.push({...player});
    
// }


// }

const numbers = [10, 2, 7, 4, 5, 14, 0,];
//Метод перебирает массив замена for each
numbers.forEach(function (value, index, array) {
    numbers[index] = numbers[index] * 5;
    // console.log(value);
    // console.log(index);
    // console.log(array);

})
// .map создает новый массив перебирая исходныйможно работать с элементом массива, индексом и массивом.
const doubleNumbers = numbers.map(function (value, index) {
    // numbers[index] = numbers[index] * 5;
    return value * 2;
});
console.log(doubleNumbers);
console.log(numbers);
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
const pointsTotal = playersPoints.reduce(function (total, point) {
    return total + point;
})
// console.log(pointsTotal);

const pointsTotal2 = players.reduce(function (total, player) {
    return total + player.points
}, 0);
// console.log(pointsTotal2);

const tweets = [
    { id: 1, likes: 20, tags: ['js', 'css'] },
    { id: 2, likes: 210, tags: ['json', 'c++'] },
    { id: 3, likes: 120, tags: ['java', 'css'] },
    { id: 4, likes: 2, tags: ['php', 'css'] }
];
const allTags = tweets.reduce(function (tags, tweet) {
    return [
        ...tags, ...tweet.tags
    ];
}, [])
// console.log(allTags);

const tagsStat = allTags.reduce(function (tagsStat, tag) {

    return {
        ...tagsStat,
        [tag]: tagsStat.hasOwnProperty(tag) ? tagsStat[tag] + 1 : 1
    }
}, {})
// console.log(tagsStat);
const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];
const getUserNames = users => {

    return users.map(function (user) {
        return user.name;
    });
};
// console.log(getUserNames(users));