// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"

let textIdContent=document.getElementById('content').innerText;
console.log(textIdContent);

//     b) отримує текст з блоку з id "rules"

let textIdRules=document.getElementById('rules').innerText;
console.log(textIdRules);

//     c) замініть текст параграфа з id 'content' на будь-який інший

document.getElementById('content').innerText='«Бойцо́вский клуб» (англ. Fight Club) — американский кинофильм 1999 года режиссёра Дэвида Финчера по мотивам одноимённого романа Чака Паланика, вышедшего тремя годами ранее. Главные роли исполняют Эдвард Нортон, Брэд Питт и Хелена Бонэм Картер. Нортон исполняет роль безымянного рассказчика — обезличенного обывателя, который недоволен своей жизнью в постиндустриальном потребительском обществе «белых воротничков». Он создаёт подпольную организацию «Бойцовский клуб» вместе с Тайлером Дёрденом — продавцом мыла, роль которого исполнил Брэд Питт.';

//     d) замініть текст параграфа з id 'rules' на будь-який інший

document.getElementById('rules').innerText='Пятое правило Бойцовского клуба: бойцы сражаются без обуви и голые по пояс.Шестое правило Бойцовского клуба: поединок продолжается столько, сколько потребуется.Седьмое правило Бойцовского клуба : если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.Восьмое и последнее правило Бойцовского клуба : новичок обязан принять бой.'

//     e) змініть кожному елементу колір фону на червоний

let allElem=document.body.getElementsByTagName('*');
for(let elem of allElem){
    elem.style.backgroundColor = 'red';
}

//     f) змініть кожному елементу колір тексту на синій

for(let elem of allElem){
    elem.style.color = 'blue';
}

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.

let classIdRules=document.getElementById('rules').classList;

console.log(classIdRules);

//     h) отримати всі елементи з класом fc_rules

let allElemClassFc_rules=document.getElementsByClassName('fc_rules');

console.log(allElemClassFc_rules);

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

for(let elem of allElemClassFc_rules){
    elem.style.color='darkred';
}