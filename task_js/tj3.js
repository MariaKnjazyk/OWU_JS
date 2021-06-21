// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


let arrBadW = ['хуй', 'сук', 'жоп', 'срет', 'бляд'];

let form1 = document.createElement('form');
let lbl=document.createElement('label');
lbl.innerText='введіть текст для перевірки';
lbl.style.color='red';
let input1 = document.createElement('input');
input1.type = 'text';
input1.style.fontSize = '30px';
lbl.for='input1';

let button1 = document.createElement('button');
button1.style.fontSize = '30px';
button1.innerText = 'check';
document.body.append(form1);
lbl.appendChild(input1);
form1.append(lbl, button1);


button1.onclick = () => {
    for (let word of arrBadW) {
        if (input1.value.includes(word)) {
            alert('нецензурщина!!!')
        }
    }
}