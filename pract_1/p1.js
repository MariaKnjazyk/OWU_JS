// // 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// //    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// // 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
// //     34,
// //     12,
// //     66,
// //     90,
// //     87
// //     Старайтесь використовувати різні оператори.
// //     Example: 88 = (16 / 2) * 11

// let a1, a2, a3, a4, a5;

// a1 = 10 + 30 - 6;
// a2 = 60 / 5 + 0;
// a3 = (15 - 4) * 6;
// a4 = Math.pow(10, 2) - 10;
// a5 = 3 + 28 * 3;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// // 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
// //     5 % 3,
// //     3 % 5,
// //     5 + '3',
// //     '5' - 3,
// //     75 + 'кг'

// let a6, a7, a8, a9, a10;

// a6 = 5 % 3;
// a7 = 3 % 5;
// a8 = 5 + '3';
// a9 = '5' - 3;
// a10 = 75 + 'кг';

// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

// // 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// //    Значееня площі зберігати в змінній s

// let height = 23;
// let width = 10;
// let s = height * width;

// console.log(s + 'см');

// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// //     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v = 3.14 * Math.pow(dC / 2, 2) * heightC;

// console.log(v + 'м');

// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// //    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3,
//     m = 4,
//     k;

// k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

// console.log(k);

// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert('Князик Марія Станіславівна\n29 років\nсудоку');

// // 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// //   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// //   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// //   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто ',
//     str2 = 'ты ',
//     str3 = 'такой?',
//     concatenation;

// concatenation = str1 + str2 + str3;
// document.write(concatenation);

// // 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// str = "20";
// let a = 5;
// document.write("<br/>");
// document.write(str + a + "<br/>"); //205
// document.write(str - a + "<br/>"); //15
// document.write(str * "2" + "<br/>"); //40
// document.write(str / 2 + "<br/>"); //10


// // 3. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// alert(+prompt('first number') + (+prompt('second number')));

// // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// //       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// alert('Доброго вечера, ' + prompt('Name?') + ' ' + prompt('Last Name?') + ', мои поздравления что вам ' + prompt('Age?'));

// // 1. Три різних числа вводяться через prompt().
// // За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let x = +prompt('first number');
// let y = +prompt('second number');
// let z = +prompt('therd number');

// if (x >= y) {
//     if (y >= z) {
//         console.log(z + ' ' + y + ' ' + x);
//     } else if (x >= z) {
//         console.log(y + ' ' + z + ' ' + x);
//     } else {
//         console.log(y + ' ' + x + ' ' + z);
//     }
// } else if (x >= z) {
//     console.log(z + ' ' + x + ' ' + y);
// } else if (y >= z) {
//     console.log(x + ' ' + z + ' ' + y);
// } else {
//     console.log(x + ' ' + y + ' ' + z);
// }

// // 2.
// // Все параматры получаем с клавиатуры!!!!
// // Имитируем поведение пешехода на перекстке.
// // Если светофор зеленый - вывести "иди".
// // Если светофор желтый - вывести "подожди".
// // Если светофор красный - вывести "стой".
// // Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt('which color? green, yellow, red?');

// switch (color) {
//     case 'green':
//         alert('иди');
//         break;
//     case 'yellow':
//         alert('подожди');
//         break;
//     case 'red':
//         alert('стой');
//         break;
//     default:
//         alert('делай что хочешь');
// }

// // 3
// // Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// // Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// // Улучшаем предыдущее задание.
// // Если светофор зеленый и машин нет - вывести "иди".
// // Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// // Если светофор желтый и машины есть - вывести "жди".
// // Если светофор желтый и машин нет - вывести "все рано жди".
// // Если светофор красный и машин нет- вывести "стой все рано".
// // Если светофор красный - и машины есть вывести "стой и жди".
// // Если светофор в аварийном режиме вывести "делай что хочешь"!

// let isRoadClear = confirm("На дорозі відсутні машини?");

// // if (color==='green'){
// //     if (isRoadClear){
// //         alert('иди');
// //     } else {
// //         alert('подожди пока нарушители проедут');
// //     }
// // }else if(color==='yellow'){
// //     if (isRoadClear){
// //         alert('все рано жди');
// //     } else {
// //         alert('жди');
// //     }
// // }else if (color==='red'){
// //     if (isRoadClear){
// //         alert('стой все рано');
// //     }else{
// //         alert('стой и жди');
// //     }
// // }else{
// //     alert('делай что хочешь');
// // }


// switch (color) {
//     case 'green':
//         if (isRoadClear) {
//             alert('иди');
//         } else {
//             alert('подожди пока нарушители проедут');
//         }
//         break;
//     case 'yellow':
//         if (isRoadClear) {
//             alert('все рано жди');
//         } else {
//             alert('жди');
//         }
//         break;
//     case 'red':
//         if (isRoadClear) {
//             alert('стой все рано');
//         } else {
//             alert('стой и жди');
//         }
//         break;
//     default:
//         alert('делай что хочешь');
// }



// if (color === 'green' && isRoadClear) {
//     alert('иди');
// } else if (color === 'green') {
//     alert('подожди пока нарушители проедут');
// } else if (color === 'yellow' && isRoadClear) {
//     alert('все рано жди');
// } else if (color === 'yellow') {
//     alert('жди');
// } else if (color === 'red' && isRoadClear) {
//     alert('стой все рано');
// } else if (color === 'red') {
//     alert('стой и жди');
// } else {
//     alert('делай что хочешь');
// }




// switch (true) {
//     case (color === 'green' && !!isRoadClear):
//         alert('иди');
//         break;
//     case (color === 'green' && !isRoadClear):
//         alert('подожди пока нарушители проедут');
//         break;
//     case (color === 'yellow' && isRoadClear):
//         alert('все рано жди');
//         break;
//     case (color === 'yellow'):
//         alert('жди');
//         break;
//     case (color === 'red' && isRoadClear):
//         alert('стой все рано');
//         break;
//     case (color === 'red'):
//         alert('стой и жди');
//         break;
//     default:
//         alert('делай что хочешь');
// }


// let tr = true,
//     fl = false,
//     nn = 3,
//     nf = 0;

// console.log(tr);
// console.log(!tr);
// console.log(!!tr);

// console.log(nn);
// console.log(!nn);
// console.log(!!nn);

// console.log(nf);
// console.log(!nf);
// console.log(!!nf);

// let num = 3;
// alert(++num);   //4

// let num = 3;
// alert(num++);   //3

// let num = 3;
// alert(--num);   //2

// let num = 3;
// alert(num--);   //3

// let num1 = 3;
// let num2 = ++num1;
// alert(num1);
// alert(num2);    //4;4

// let num1 = 3;
// let num2 = num1++;
// alert(num1);
// alert(num2);    //4;3

// let num1 = 3;
// let num2 = --num1;
// alert(num1);
// alert(num2);    //2;2

// let num1 = 3;
// let num2 = num1--;
// alert(num1);
// alert(num2);    //2;3

// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// alert(--num2);  //3;3

// let x=1;
// console.log(x++ + ++x +x); // 1+3+3=7

let a=2;

let b=a++ + (--a * ++a);
console.log(b); // 2 +(2*3)=8
