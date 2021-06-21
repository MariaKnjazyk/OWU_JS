// - створити функцію яка обчислює та повертає площу прямокутника висотою

function areaRect(a,b){
    return a*b;
}

console.log(areaRect(5,7));
console.log('_____________');

// - створити функцію яка обчислює та повертає площу кола

function areaCircle(r){
    return 3.14*Math.pow(r,2);
}

console.log(areaCircle(5));
console.log('_____________');

// - створити функцію яка обчислює та повертає площу циліндру

function areaСylinder(r,h){
    return (3.14*Math.pow(r,2)+2*3.14*r*h);
}

console.log(areaСylinder(5,10));
console.log('_____________');


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

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
    console.log(max);
    return min;
}

console.log(Min_Max(-1,-34,-56.1111,-5,-12));
console.log('_____________');

