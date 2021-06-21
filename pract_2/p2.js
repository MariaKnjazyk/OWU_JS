// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let arr1=['a', 'b', 'c'];
let newElem=1;

while (newElem<4){
    arr1[arr1.length]=newElem;
    newElem++;
}

console.log(arr1);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arr2=[1, 2, 3];

for(let i=0; i<arr2.length/2; i++){
    let temp=arr2[i];
    arr2[i]=arr2[arr2.length-1-i];
    arr2[arr2.length-1-i]=temp
}

console.log(arr2);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let arr3=[1, 2, 3];

for(let i=4; i<=6; i++){
    arr3.push(i);
}

console.log(arr3);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let arr4=[1, 2, 3];

for(let i=6; i>=4; i--){
    arr4.unshift(i);
}

console.log(arr4);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

let arr5=[1, 2, 3, 4, 5];

for (let i=0; i<arr5.length; i++){
    if(arr5[i]<4){
        arr5.shift();
        i--;
    }
}

console.log(arr5);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let arr6=[1, 2, 3, 4, 5];

for (let i=arr6.length-1; i>=0; i--){
    if(arr6[i]>2){
        arr6.pop();
    }
}

console.log(arr6);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

let arr7=[1, 2, 3, 4, 5];

while (arr7[arr7.length-1]>3){
    arr7.pop();
}
arr7.push('a');
arr7.push('b');
arr7.push('c');

console.log(arr7);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr8=[2,6,57,23,14,33,2,2,9,10];

for(const i of arr8){
    if(!(i%2)){
        console.log(i);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr9=[];

for(const i of arr8){
    arr9.push(i);
}

console.log(arr9);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr10=[ 'a', 'b', 'c'];
let str1='';

for(let i=0; i<arr10.length; i++){
    str1+=arr10[i];
}

console.log(str1);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let str2='';
let i=0;
while(i<arr10.length){
    str2+=arr10[i];
    i++;
}

console.log(str2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let str3='';

for(const i of arr10){
    str3+=i;
}

console.log(str3);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let str4='';

for(const i in arr10){
    str4+=arr10[i];
}

console.log(str4);

// =====ДОДАТКОВО 1=======

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let mas=[2,17,13,6,22,31,45,66,100,-18];
console.log('___________');

// 1. перебрати його циклом while

let j=0;

while(!!(mas[j])){
    console.log(mas[j]);
    j++;
}

console.log('___________');

// 2. перебрати його циклом for

for(const i of mas){
    console.log(i);
}

console.log('___________');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

j=0;

while(!!(mas[j])){
    if(j%2){
      console.log(mas[j]);
    }
    j++;
}

console.log('___________');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for(const i in mas){
    if(i%2){
        console.log(mas[i]);
    }
}

console.log('___________');


// 5. перебрати циклом while та вивести  числа тільки парні  значення

j=0;

while(!!(mas[j])){
    if(!(j%2)){
      console.log(mas[j]);
    }
    j++;
}

console.log('___________');


// 6. перебрати циклом for та вивести  числа тільки парні  значення

for(const i in mas){
    if(!(i%2)){
        console.log(mas[i]);
    }
}

console.log('___________');

// 7. замінити кожне число кратне 3 на слово "okten"

for(const i in mas){
    if(!(mas[i]%3)){
        mas[i]="okten";
    }
}

console.log(mas);

console.log('___________');

// 8. вивести масив в зворотньому порядку.

for(let i=0; i<mas.length/2; i++){
    let temp=mas[i];
    mas[i]=mas[mas.length-1-i];
    mas[mas.length-1-i]=temp;
}

console.log(mas);

console.log('___________');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

mas=[2,17,13,6,22,31,45,66,100,-18];

let n=mas.length-1;
let evenNum=[], oddNum=[];

while(n>=0){
    mas[n]%2 ? oddNum.push(mas[n]) : evenNum.push(mas[n]);
    n--;
}

console.log(oddNum);
console.log(evenNum);

let evenNum1=[], oddNum1=[];

for(let i=mas.length-1; i>=0; i--){
    mas[i]%2 ? oddNum1.push(mas[i]) : evenNum1.push(mas[i]);
    if(!(mas[i]%3)){
        mas[i]="okten";
    }
}

console.log(oddNum1);
console.log(evenNum1);
console.log(mas);

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

let evenNumArr=[];
evenN=2;
while (evenNumArr.length<50){
    evenNumArr.push(evenN);
    evenN+=2;
}

console.log(evenNumArr);

// - заповнити його 50 непарними числами за допомоги циклу.

let oddNumArr=[];
oddN=1;
while (oddNumArr.length<50){
    oddNumArr.push(oddN);
    oddN+=2;
}

console.log(oddNumArr);


// Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arrRend1=[];
for(let i=0; i<20; i++){
    arrRend1[i]=parseInt(Math.random()*100);
}

console.log(arrRend1);


// Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrRend2=[];
let max=732, min=8;

for(let i=0; i<20; i++){
    arrRend2[i]=parseInt(Math.random()*(max-min+1)+min);
}

console.log(arrRend2);

// 2. Вивести за допомогою console.log кожен третій елемен

for(let i=2; i<arrRend2.length; i+=3){
    console.log(arrRend2[i]);
}
console.log('___________');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for(let i=2; i<arrRend2.length; i+=3){
    if(!(arrRend2[i]%2)){
        console.log(arrRend2[i]);
    }
}
console.log('___________');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arrNew=[];

for(let i=2; i<arrRend2.length; i+=3){
    if(!(arrRend2[i]%2)){
        console.log(arrRend2[i]);
        arrNew.push(arrRend2[i]);
    }
}
console.log(arrNew);
console.log('___________');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for(let i=0; i<arrRend2.length-1; i++){
    if(!(arrRend2[i+1]%2)){
        console.log(arrRend2[i]);
    }
}

console.log('___________');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrCost=[100,250,50,168,120,345,188];
let sum=0;

for(let i=0; i<arrCost.length; i++){
    sum+=arrCost[i];
}

let avg=sum/arrCost.length;

console.log(avg);
console.log('___________');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arrRend3=[], arrRend3New=[];

for(let i=0; i<20; i++){
    arrRend3[i]=parseInt(Math.random()*100);
    arrRend3New[i]=arrRend3[i]*5;
}

console.log(arrRend3);
console.log(arrRend3New);
console.log('___________');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arrMix=[45, 'qwert', '', '0', 78, 0, -12.78, true, 7, 'e', -0.23];
let arrMixNew=[];

for(const i of arrMix){
    if(typeof i === 'number'){
        arrMixNew.push(i);
    }
}

console.log(arrMixNew);