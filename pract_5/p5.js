// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

document.getElementById('main_header').style.color = 'red';
document.getElementById('main_header').innerText = 'apr-2021';


//     b) робить шириниу елементу ul 400px

let ulList = document.getElementsByTagName('ul');
for (let ul of ulList) {
    ul.style.width = '400px';
}

//     c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');
for (let elem of linkList) {
    elem.style.width = '50%';
}

//     d) отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.getElementsByClassName('listElement2');
let textListElement2 = listElement2[0].innerText;
console.log(textListElement2);


//     e) отримує всі елементи li та змінює ім колір фону на сірий

for (let li of document.getElementsByTagName('li')) {
    li.style.backgroundColor = 'grey'
}

//     f) отримує всі елементи 'a' та додає їм клас anchor

for (let a of document.getElementsByTagName('a')) {
    a.classList.add('anchor');
}

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let a of document.getElementsByTagName('a')) {
    if (a.innerText === 'link3') {
        a.style.fontSize = '40px';
    }
}

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (let a of document.getElementsByTagName('a')) {
//     a.classList.add('element_' + a.innerText);
// }

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

for (let subHeader of document.getElementsByClassName('sub-header')) {
    subHeader.style.backgroundColor = prompt('enter color');
}

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (let subHeader of document.getElementsByClassName('sub-header')) {
    if (subHeader.innerText === 'content 2 segment') {
        subHeader.style.color = prompt('enter color of text');
    }
}

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

for (let subHeader of document.getElementsByClassName('content_1')) {
    subHeader.innerHTML = `<p>${prompt('enter new text')}</p>`;
}

//     l) отримати елементи p та змінити їм padding на 20px

for (let p of document.getElementsByTagName('p')) {
    console.log(p);
    p.style.padding = '20px';
}

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

for (let text2 of document.getElementsByClassName('text2')) {
    text2.innerText = `apr-2021`;
}

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div



document.write('<hr/>')



let form1=document.createElement('form');
form1.name='form1';
form1.action='index2.html';
document.body.append(form1);
let inpName=document.createElement('input');
inpName.name='name';
form1.append(inpName);
let bt=document.createElement('button');
bt.innerText='Save';
form1.append(bt);



document.forms.form1.addEventListener('submit', (event) => {
    let name = inpName.value;
    console.log(name);
    localStorage.setItem('name', name)
})






// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.

document.querySelector('#price').oninput = () => {
    document.querySelector('#prNum').innerText = document.querySelector('#price').value;
}

console.log(document.querySelector('#price').value);


let formItem = document.forms.formItem;
formItem.addEventListener('submit', (event) => {
    event.preventDefault();
    let item = {
        name: formItem.querySelector('#name').value,
        quantity: formItem.querySelector('#quantity').value,
        price: formItem.querySelector('#price').value,
        picture: formItem.querySelector('#picture').value
    }
    console.log(item);

    let arr = JSON.parse(localStorage.getItem('arrItems')) || [];
    console.log(arr);
    arr.push(item);
    localStorage.setItem('arrItems', JSON.stringify(arr));

    console.log(JSON.parse(localStorage.getItem('arrItems')));

})






// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар