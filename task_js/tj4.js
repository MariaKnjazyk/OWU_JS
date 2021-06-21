// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

let form1=document.createElement('form');

document.body.append(form1);


for(let index=0; index<3; index++){
    let div=document.createElement('div');
    let input=document.createElement('input');
    input.type='checkbox';
    input.id='input'+(index+1);
    let span=document.createElement('span');
    span.id='span'+(index+1);
    div.append(input, span);
    form1.append(div);
}

let btn=document.createElement('button');
btn.innerText='Filtr'

form1.append(btn);

let input1=document.getElementById('input1');
let input2=document.getElementById('input2');
let input3=document.getElementById('input3');
document.getElementById('span1').innerText='not married';
document.getElementById('span2').innerText='older then 29';
document.getElementById('span3').innerText='live in Kyiv';



// let arrFilter=usersWithAddress.filter((user)=>{
//     if(input1.checked && input2.checked && input3.checked){
//         return !(user.isMarried) && user.age>29 && user.address.city==='Kyiv';
//     }else if(input1.checked && input2.checked ){
//         return !(user.isMarried) && user.age>29;
//     }else if(input2.checked && input3.checked ){
//         return user.age>29 && user.address.city==='Kyiv';
//     }else if(input1.checked && input3.checked ){
//         return !(user.isMarried) && user.address.city==='Kyiv';
//     }else if(input1.checked){
//         return !(user.isMarried);
//     }else if(input2.checked){
//         return user.age>29;
//     }else if(input3.checked){
//         return user.address.city==='Kyiv';
//     }
// })

let p=document.createElement('p')
document.body.append(p);

btn.onclick=()=>{
    event.preventDefault();
 
    let arrFilter=usersWithAddress.filter((user)=>{
        if(input1.checked && input2.checked && input3.checked){
            return !(user.isMarried) && user.age>29 && user.address.city==='Kyiv';
        }else if(input1.checked && input2.checked ){
            return !(user.isMarried) && user.age>29;
        }else if(input2.checked && input3.checked ){
            return user.age>29 && user.address.city==='Kyiv';
        }else if(input1.checked && input3.checked ){
            return !(user.isMarried) && user.address.city==='Kyiv';
        }else if(input1.checked){
            return !(user.isMarried);
        }else if(input2.checked){
            return user.age>29;
        }else if(input3.checked){
            return user.address.city==='Kyiv';
        }else{
            return true;
        }
    })

 //   {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}

 p.innerText=arrFilter.reduce((text,user)=>{
    text+=`name: ${user.name}, age: ${user.age}, is married: ${user.isMarried}, city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}\n`

    return text;
},'')
  
}


