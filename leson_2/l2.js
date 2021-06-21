// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let masNum = [23, 45, -4444, 6.72, 0];
let masStr = ['my', 'name', 'is', 'Maria', '!'];
let masDif = [true, '-123', 123, '=', false];

console.log(masNum);
console.log(masStr);
console.log(masDif);

console.log('______________________');

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let masEmpty = [];

masEmpty[0] = 'first';
masEmpty[1] = {
    name: 'Maria'
};
masEmpty[5] = 5;
masEmpty[12] = true;

console.log(masEmpty);

console.log('______________________');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>I will not squeak chalk</div>`);
}

document.write('___________________________________________________________________________________');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Bart's earned a day off ${i}</div>`);
}

document.write('___________________________________________________________________________________');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;

while (i < 20) {
    document.write(`<h1>Nobody reads these anymore</h1>`);
    i++;
}

document.write('___________________________________________________________________________________');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;

while (j < 20) {
    document.write(`<h1>${j} years and they can't come up with a new punishment</h1>`);
    j++;
}

document.write('___________________________________________________________________________________');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let masOfNum = [1, -4, -3.56, 0, 33333, 90, -0.45, 8, 9, 7];

for (let k of masOfNum) {
    console.log(k);
}
console.log('______________________');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let masOfStr = ['Створити', 'масив', 'Вивести', 'в', 'консоль', 'всі', 'його', 'елементи', 'в', 'циклі'];

for (let k of masOfStr) {
    console.log(k);
}
console.log('______________________');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let masOfDif = [true, '-123', 123, '=', false, true, '-123', 123, '=', false];
let mBool = [],
    mNum = [],
    mStr = [];

// for (let k of masOfDif) {
//     console.log(typeof k);
// }
// console.log('______________________');


// for (let k of masOfDif) {
//     if (typeof k === "boolean") {
//         console.log(k);
//     }
// }
// console.log('______________________');

// for (let k of masOfDif) {
//     if (typeof k === "number") {
//         console.log(k);
//     }
// }
// console.log('______________________');

// for (let k of masOfDif) {
//     if (typeof k === "string") {
//         console.log(k);
//     }
// }
// console.log('______________________');



for (let k of masOfDif) {
    console.log(k);
    if (typeof k === "boolean") {
        mBool.push(k);
    } else if (typeof k === "number") {
        mNum.push(k);
    } else if (typeof k === "string") {
        mStr.push(k);
    }
}
console.log('\n');
console.log(`boolean: ${mBool}`);
console.log(`number: ${mNum}`);
console.log(`string: ${mStr}`);

console.log('______________________');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let masyv = [];

masyv[0] = 'first';
masyv[1] = 1;
masyv[2] = {
    name: 'Maria'
};
masyv[3] = -25;
masyv[4] = true;
masyv[5] = 0;
masyv[6] = '';
masyv[7] = null;
masyv[8] = false;
masyv[9] = 12;

for (let item of masyv) {
    console.log(item);
}

console.log('______________________');



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(`Крок ${i+1}`);
    document.write(`<p>Крок ${i+1}</p>`);
}

console.log('______________________');
document.write('___________________________________________________________________________________');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(`Крок ${i}`);
    document.write(`<p>Крок ${i}</p>`);
}

console.log('______________________');
document.write('___________________________________________________________________________________');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(`Крок ${i}`);
    document.write(`<p>Крок ${i}</p>`);
}

console.log('______________________');
document.write('___________________________________________________________________________________');


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`Крок ${i}`);
        document.write(`<p>Крок ${i}</p>`);
    }
}

console.log('______________________');
document.write('___________________________________________________________________________________');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(`Крок ${i}`);
        document.write(`<p>Крок ${i}</p>`);
    }
}

console.log('______________________');
document.write('___________________________________________________________________________________');

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithId = [{
        id: 1,
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false
    }
];

let citiesWithId = [{
        user_id: 3,
        country: 'USA',
        city: 'Portland'
    },
    {
        user_id: 1,
        country: 'Ukraine',
        city: 'Ternopil'
    },
    {
        user_id: 2,
        country: 'Poland',
        city: 'Krakow'
    },
    {
        user_id: 4,
        country: 'USA',
        city: 'Miami'
    }
];

let usersWithCities = [];

let n = 0;
for (let user of usersWithId) {
    for (let adress of citiesWithId) {
        if (user.id === adress.user_id) {
            usersWithCities[n] = user;
            usersWithCities[n].address = adress;
            n++;
            break;
        }
       
    }
}

console.log(usersWithCities);