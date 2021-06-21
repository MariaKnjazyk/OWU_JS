// 1) створити функцію яка приймає масив та виводить його

function consLog(arr) {
    console.log(arr);
}

let mas = [1, '45', true, {name: 'Maria'},'start',5];


consLog(mas);

console.log('_____________');

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію. 

function randNum(arreyToComplete = [], numberOfElements = 0) {
    switch (true) {
        case ((arreyToComplete.length === 0) && (numberOfElements === 0)):
            console.log('кількість елементів = 0');
            break;
        case (arreyToComplete.length === 0 || numberOfElements > arreyToComplete.length):
            for (let i = 0; i < numberOfElements; i++) {
                arreyToComplete[i] = parseInt(Math.random() * 100);
            }
            break;
        default:
            for (let key in arreyToComplete) {
                arreyToComplete[key] = parseInt(Math.random() * 100);
            }
    }
    consLog(arreyToComplete);
}


randNum();
randNum(mas);
randNum([],3);
randNum(mas,10);
console.log('_____________');

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function min(x=0,y=0,z=0){
    if(x>=y){
        (y>=z) ? consLog(z) : consLog(y);
    }else{
        z>=x ? consLog(x): consLog(z);
    }
}


min(+prompt('введіть перше число'), +prompt('введіть друге число'), +prompt('введіть третє число'));

console.log('_____________');

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(x=0,y=0,z=0){
    switch(true){
        case (x<=z && y<=z): 
            consLog(z);
            break;
        case (x<=y && z<=y): 
            consLog(y);
            break;
        default: consLog(x);
    }
}

max(+prompt('введіть перше число'), +prompt('введіть друге число'), +prompt('введіть третє число'));
console.log('_____________');

// 5) створити функцію яка повертає найбільше число з масиву

function maxArrayItem (arr=[]){
    let num=null;
    for(let item of arr){
        if(typeof item ==='number'){
            if(num===null || num<item){
                num=item;
            }
        }
    }
    return num;
}

console.log(maxArrayItem(['qwe',1230.34,'ert',true,4,8,1000,-3]));
console.log('_____________');

// 6) створити функцію яка повертає найменьше число з масиву

function minArrayItem (arr=[]){
    let num=null;
    for(let item of arr){
        if(typeof item ==='number'){
            if(num===null || num>item){
                num=item;
            }
        }
    }
    return num;
}

console.log(minArrayItem(['qwe',1230.34,'ert',true,4,8,1000,-3]));
console.log('_____________');

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function sumArrayItem (arr=[]){
    let num=0;
    for(let item of arr){
        num+=item;
    }
    return num;
}

console.log(sumArrayItem([3,1230.34,-491,4,8,1000,-3]));
console.log('_____________');

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function serArArrayItem (arr=[]){
   return sumArrayItem(arr)/arr.length;
}  

console.log(serArArrayItem([3,1230.34,-491,4,8,1000,-3]));
console.log('_____________');

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function keysArr(arr=[]){
    let i=0;
    let newArr=[];
    for(let obj of arr){
        for(let key in obj){
            newArr[i]=key;
            i++;
        }
    }
    return newArr;
}

console.log(keysArr([{name: 'Maria', age: 29},{husbend:true, child: true},{citi: 'Lviv'}]));
console.log('_____________');

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function valueArr(arr=[]){
    let i=0;
    let newArr=[];
    for(let obj of arr){
        for(let key in obj){
            newArr[i]=obj[key];
            i++;
        }
    }
    return newArr;
}

console.log(valueArr([{name: 'Maria', age: 29},{husbend:true, child: true},{citi: 'Lviv'}]));
console.log('_____________');

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function sumOfArr(arr1=[], arr2=[]){
    let newArr=[]
    if(arr1.length>=arr2.length){       
        for(let i in arr2){
            newArr[i]=arr1[i]+arr2[i];
        }
        for(let i=arr2.length;i<arr1.length;i++){
            newArr[i]=arr1[i];
        }
    }else{       
        for(let i in arr1){
        newArr[i]=arr1[i]+arr2[i];
        }
        for(let i=arr1.length;i<arr2.length;i++){
            newArr[i]=arr2[i];
        }
    }
    return newArr;
}


let arrNum1=[-3,6,87.3,65,8,2,1,-6,-7,-0.22222];
let arrNum2=[1,2,3,4,5];

console.log(sumOfArr(arrNum1,arrNum2));
console.log('_____________');

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function Min_Max(){
    let min=arguments[0], max=arguments[0];
    for(let i of arguments){
        if(i>max){
            max=i;
        }
        if(i<min){
            min=i;
        }
    }
    consLog(max);
    return min;
}

console.log(Min_Max(-1,-34,-56.1111,-5,-12));
console.log('_____________');


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

function keysOrValArr(arr=[],value_or_keys='value'){
    let i=0;
    let newArr=[];
    for(let obj of arr){
        for(let key in obj){
            if (value_or_keys==='keys') {
                newArr[i]=key;
            }else if (value_or_keys==='value'){
                newArr[i]=obj[key];
            }else{
                consLog('Не вірно обрано який масив виводити');
                return undefined;
            }
            i++;
        }
    }
    return newArr;
}

console.log(keysOrValArr([{name: 'Maria', age: 29},{husbend:true, child: true},{citi: 'Lviv'}],'keys'));
console.log('_____________');

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ] 


function changePlace(arr=[], i){
    if(i<0){
        consLog('не вірно заданий індекс');
        return undefined;
    }
     let temp=arr[i];
     arr[i]=arr[i+1];
     arr[i+1]=temp;
}


let arr3=['erg',5,'23',true,false];
changePlace(arr3,-1);
consLog(arr3);
console.log('_____________');

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function ExeptZero (arr=[]){
    let n=0;     
    for(let i=0; i<arr.length;i++){
        if(arr[i]===0){
            arr.splice(i,1);
            n++;       
            i--;
        }
    }
    for(let j=0; j<n;j++){
        arr.push(0);
    }
}


let arr4=[0,4,7,-3,0,0,2,-3.45,0.0001,5];

 ExeptZero(arr4);
 consLog(arr4);
 console.log('_____________');

//  - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '

function Normalize (str){
    str=str.trim();
    while(str.includes('  ')){
        str=str.replace('  ', ' ');
    }
    return str;
}

consLog(Normalize(n1));
consLog(Normalize(n2));
consLog(Normalize(n3));






