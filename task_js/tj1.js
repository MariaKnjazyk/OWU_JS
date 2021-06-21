// Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let formItem = document.forms.f1;

let in1 = document.getElementById('in1');
let p1 = document.getElementById('p1');
let b1 = document.getElementById('b1');

b1.onclick = async () => {
    event.preventDefault();
    p1.innerText='';
    let text = in1.value;
    for (let sym of text) {
        p1.innerText+= await printSym(sym);
    }
}

function printSym(sym){
    return new Promise(resolve=>{
        let time = Math.round(Math.random() * (1000-100)+100);
              setTimeout(() => {
                  if(sym===' '){
                      resolve('\u00A0')
                    }
                  resolve(sym);
              }, time)
    })
}







