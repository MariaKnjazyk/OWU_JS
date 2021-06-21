// создать функцию которая будет принимать любое количество чисел,
// и будет возвращать массив без дубликатов

function NoClon() {
    let arr = [];
    let m = 1;
    for (const i of arguments) {
        for (const j of arr) {
            if (i === j) {
                m = 0;
            }
        }
        if (m) {
            arr.push(i);
        }
        m = 1
    }

    return arr;
}

console.log(NoClon(2, 6, 4, 8, 9, 3, 4, 5, 6, 3, 4, 5, 6, 90, 11, 34, 11, 17));


// создать функцию которая принимает число (высоту) и делает половину пирамидки (как в игре марио)

function hulfPir(h) {
    line = ['*'];
    for (let i = 0; i < h; i++) {
        line.unshift(' ');
    }

    for (let i = 0; i < h; i++) {
        console.log(line.join(''));
        line.shift();
        line.push('*');
    }

}

hulfPir(8);


function uniq() {
    const res = [];
    for (let argument of arguments) {
        if (!res.includes(argument)) {
            res.push(argument)
        }
    }
    return res
}


// [1, 3, ['Hello', 'World', [9, 6, 1]], ['oops'], 9]


let arr1 = [1, 3, ['Hello', 'World', [9, 6, 1]],
    ['oops'], 9
];
let type = []




for (let i of arr1) {
    type.push(typeof i);
    if (type.includes('object')) {
        for (let j = 0; j < arr1.length; j++) {
            if (typeof arr1[j] === 'object') {
                let obj = arr1[j];
                for (let n = 0; n < obj.length; n++) {
                    arr1.splice(j + 1 + n, 0, obj[n]);
                }
                arr1.splice(j, 1);
            }
        }
    }
}

console.log(arr1);

// for (let i of arr1) {

//         if (arr1.isArray) {
//             for (let j = 0; j < arr1.length; j++) {
//                 if (typeof arr1[j] === 'object') {
//                     let obj = arr1[j];
//                     for (let n = 0; n < obj.length; n++) {
//                         arr1.splice(j + 1 + n, 0, obj[n]);
//                     }
//                     arr1.splice(j, 1);
//                 }
//             }
//         }
//     }

//     console.log(arr1);


//Чи є число точним степенем двійки?
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

isStepTwo(1025);