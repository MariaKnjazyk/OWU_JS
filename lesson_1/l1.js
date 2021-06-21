//alert ('222');

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bul1 = true;
let bul2 = false;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bul1);
console.log(bul2);

alert(str1);
alert(str2);
alert(str3);
alert(str4);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(num5);
alert(num6);
alert(num7);
alert(bul1);
alert(bul2);

document.write(`<h2>${str1}</h2>`);
document.write(`<h2>${str2}</h2>`);
document.write(`<h2>${str3}</h2>`);
document.write(`<h2>${str4}</h2>`);
document.write(`<h2>${num1}</h2>`);
document.write(`<h2>${num2}</h2>`);
document.write(`<h2>${num3}</h2>`);
document.write(`<h2>${num4}</h2>`);
document.write(`<h2>${num5}</h2>`);
document.write(`<h2>${num6}</h2>`);
document.write(`<h2>${num7}</h2>`);
document.write(`<h2>${bul1}</h2>`);
document.write(`<h2>${bul2}</h2>`);


// Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

str1 = 'world';
str2 = 'octen';
str3 = 100;
str4 = true;
num1 = 'one';
num2 = 1000000;
num3 = '-999';
num4 = false;
num5 = 'pi';
num6 = 0.7777;
num7 = null;
bul1 = 0;
bul2 = 1;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bul1);
console.log(bul2);

alert(str1+' '+str2+' '+str3+' '+str4+' '+num1+' '+num2+' '+num3+' '+num4+' '+num5+' '+num6+' '+num7+' '+bul1+' '+bul2);

document.write(`<h2>${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${bul1} ${bul2}  </h2>`);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

console.log('Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.');

let firstName = 'Maria';
let middleName ='Stanislavivna';
let lastName = 'Knjazyk';

let person = firstName+' '+middleName+' '+lastName;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

console.log('а допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".');

firstName = prompt ('First Name?');
middleName = prompt ('Middle Name?');
let age = prompt ('Age?');

alert('Вітаю, '+firstName+' '+middleName+'. Тобі '+age+' років.');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

console.log('За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.');

let a = 100; 
let b = '100'; 
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true

console.log(' Поставет відповідний оператор в виразах що б вийшов відповідний результат.В однакових виразаї не використовувати однакові оператори!!!');

console.log(5 < 6);
console.log(5 > 6);
console.log(5 === 6);
console.log(5 >= 6);
console.log(10 === 10);
console.log(10 >= 10);
console.log(10 !== 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(123 === '123');
console.log(123 !== '123');

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
console.log('Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.');

console.log(132 > 100 && 45 < 12 ); //false
console.log(34 > 33 && 23 < 90 );   //true
console.log(99 > 100 && 45 > 12 );  //false
console.log(132 > 100 || 45 < 12 ); //true
console.log(111 > 11 || 45 < 111 ); //true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );  //true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );   //false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));  //true
console.log(!!'-1');    //true
console.log(!!-1);  //true
console.log(!!'0'); //true
console.log(!!'null');  //true
console.log(!!'undefined'); //true
console.log(!!(3/'owu'));   //false
console.log((111 > 11 || 45 < 111) ||  !!'0');  //true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false


// За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

console.log('За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.');

console.log(+prompt('first number'));
console.log(+prompt('second number'));
console.log(+prompt('therd number'));

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

console.log('За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.');

num1 = parseInt(prompt('first number'));
num2 = parseInt(prompt('second number'));
num3 = parseInt(prompt('therd number'));
num4 = parseInt(prompt('4-th number'));

console.log(num1+num2+num3+num4);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

console.log('За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.');

let result = parseFloat(prompt('first number'))+parseFloat(prompt('second number'))+parseFloat(prompt('therd number'));

console.log(result);

// За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

console.log('За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.');

result = Math.round(parseFloat(prompt('first number')))+Math.round(parseFloat(prompt('second number')))+Math.round(parseFloat(prompt('therd number')));

console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 

console.log('За допомогою prompt() отримати 2 цілих числа.Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню. За допомогою Math.pow (Google) піднести перше число в степінь другого числа. Example. Число 1 = 5. Число 2 = 2. Результат = 25');

num1 = parseInt(prompt('first number'));
num2 = parseInt(prompt('second number'));

console.log(Math.pow(num1, num2));
