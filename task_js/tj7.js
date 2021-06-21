// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"

function numToText(num) {
    let zero = '0';
    let str = '' + (num % 10);
    num = Math.floor(num / 10);
    while (num) {
        str = (num % 10) + zero + '+' + str;
        num = Math.floor(num / 10);
        zero += '0';
    }
    return str;
}

console.log(numToText(3275234));


// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
// [1,2,3,4,5,2,4,1,3] -> 5
console.log('____________');

let arr = [1, 2, 3, 4, 5, 2, 4, 1, 3, 3, 3, 3, 3, 3];

arr.sort((num1, num2) => num1 - num2);
console.log(arr);

let quantity = 1;
for (let num = 1; num < arr.length; num++) {
    if (arr[num] === arr[num - 1]) {
        quantity++;
    } else {
        if (quantity % 2) {
            console.log(arr[num - 1]);
        }
        quantity = 1;
    }
}
if (quantity % 2) {
    console.log(arr[arr.length - 1]);
} else {
    console.log('not found');
}

// Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як і поеперднє слово.

// ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

console.log('____________');

let strFirst = 'ANAGRAM';
let strSecond = 'MGANRAA';

// let strFirst = 'EXIT';
// let strSecond = 'AXET';

// let strFirst = 'GOOD';
// let strSecond = 'DOGO';


strFirst = strFirst.toUpperCase();
strSecond = strSecond.toUpperCase();

arrStrFirst = strFirst.split('');
arrStrSecond = strSecond.split('');

if (arrStrFirst.length !== arrStrSecond.length) {
    console.log(false);
} else {
    arrStrFirst.sort((ch1, ch2) => {
        if (ch1 > ch2) {
            return 1;
        } else {
            return -1;
        }
    })

    arrStrSecond.sort((ch1, ch2) => {
        if (ch1 > ch2) {
            return 1;
        } else {
            return -1;
        }
    })

    let res = true;

    for (let index = 0; index < arrStrFirst.length; index++) {
        if (arrStrFirst[index] !== arrStrSecond[index]) {
            res = false;
            break;
        }
    }
    console.log(res);
}

// Точная степень двойки
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

console.log('____________');

function isStepTwo(number) {
    if (number <= 0) {
        console.log('no');
        return;
    } else if (number <= 1) {
        let step = 2;
        while (number * step <= 1) {
            if (number * step === 1) {
                console.log('yes');
                return;
            }
            step *= 2;
        }
    } else if (number % 2) {
        console.log('no')
        return;
    } else {
        for (let dilnyk = 3; dilnyk <= number / 2; dilnyk++) {
            if (dilnyk % 2) {
                if (!(number % dilnyk)) {
                    console.log('no');
                    return;
                }
            }
        }
    }

    console.log('yes');

}

isStepTwo(1024);

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.
// Рекурсія)

console.log('____________');

function sumN(n) {
    let sum = 0;
    if (n) {
        sum = (n % 10) + sumN(Math.floor(n / 10));
    }
    return sum;
}

console.log(sumN(12345678));

// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.

console.log('____________');

let str = 'saippuakivikauppias';
//let str = 'redivider';
let arrStr = str.split('');
arrStr.reverse();
revStr = arrStr.join('');
if (str === revStr) {
    console.log('YES');
} else {
    console.log('NO');
}

// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

// 2176491947586100 -> 3

console.log('____________');

let code = '2176491947586100789411111';

let q = 0;
let end = code.indexOf('00');
if (end === -1) {
    console.log('wrong code');
} else {

    for (let ind = 0; ind < end; ind++) {
        if (code[ind] === '1') {
            q++;
        }
    }
    console.log(q);
}

// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.

console.log('____________');

let arr1 = [1, 3, ['Hello', 'Wordd', [9, 6, 1, [7, 8]]],
    ['oops'], 9
];
let type = [];

for (let i of arr1) {
    if (Array.isArray(i)) {
        for (let j = 0; j < arr1.length; j++) {
            if (typeof arr1[j] === 'object') {
                let arrInc = arr1[j];
                for (let n = 0; n < arrInc.length; n++) {
                    arr1.splice(j + 1 + n, 0, arrInc[n]);
                }
                arr1.splice(j, 1);
            }
        }
    }
}

console.log(arr1);

// Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88

console.log('____________');

let mas=[1,6,9,0,17,88,4,7];

let maxNumb=mas.reduce((max,value)=>{
    if(value>max){
        max=value;
    }  
    return max;
})

console.log(maxNumb);

// Отримати масив лише унікальних значень за допомогою reduce
// [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]
console.log('____________');

let arrr=[1, 9, 0, 1, 5, 9, 1, 6];

let unic=arrr.reduce((un, value)=>{
    if(!(un.includes(value))){
        un.push(value);
    }
    return un;
}, [])

console.log(unic);





