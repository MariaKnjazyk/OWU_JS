// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrUsers = [];
for (let user = 1; user <= 10; user++) {
    arrUsers.push(new User(user, 'Name' + user, 'Surname' + user, 'email' + user, 380950000000+user-1));
}

console.log(arrUsers);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClients = [];
for (let client = 1; client <= 10; client++) {
    arrClients.push(new Client(client, 'Name' + client, 'Surname' + client, 'email' + client, 380950000000+client-1, ['beer', 'chips', 'pistachios']));
}

console.log(arrClients);

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, manufacturer, year, speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.engine = engine
}

Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.speed} км на годину`);
}

Car.prototype.info = function () {
    console.log(this);
}

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.speed += newSpeed;
}

Car.prototype.changeYear = function (newValue) {
    this.year = newValue;
}

Car.prototype.addDriver = function (driver) {
    this.driver = driver;
}

let alfaRomeo = new Car('Giulietta Sprint', 'Alfa Romeo', 2020, 320, 1.4);
console.log(alfaRomeo);

alfaRomeo.drive();
alfaRomeo.info();
alfaRomeo.increaseMaxSpeed(30);
alfaRomeo.changeYear(2021);
alfaRomeo.addDriver({
    name: 'Yurii',
    age: 29,
    experience: 2
});

console.log(alfaRomeo);

// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class CarClass {
    constructor(model, manufacturer, year, speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.engine = engine
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} км на годину`);
    }

    info() {
        console.log(this);
    }

    increaseMaxSpeed(newSpeed) {
        this.speed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const lada = new CarClass('Samara 2115', 'Lada', 2007, 160, 1.6);
console.log(lada);

lada.drive();
lada.info();
lada.increaseMaxSpeed(0.30);
lada.changeYear(2010);
lada.addDriver({
    name: 'Valera',
    age: 92,
    experience: 52
});

console.log(lada);

// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let carObj= new Object();
carObj.model = 'myModel';
carObj.manufacturer = 'myMmanufacturer';
carObj.year = 1992;
carObj.speed = 210;
carObj.engine = 1.8;

carObj.drive = function () {
    console.log(`їдемо зі швидкістю ${this.speed} км на годину`);
}

carObj.info = function () {
    console.log(this);
}

carObj.increaseMaxSpeed = function (newSpeed) {
    this.speed += newSpeed;
}

carObj.changeYear = function (newValue) {
    this.year = newValue;
}

carObj.addDriver = function (driver) {
    this.driver = driver;
}

carObj.drive();
carObj.info();
carObj.increaseMaxSpeed(35);
carObj.changeYear(2092);
carObj.addDriver({
    name: 'Vika',
    age: 55,
    experience: 0
});

console.log(carObj);




// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по спаданню
// - Відсортувати його по id. по зростанню


let filter = arrUsers.filter(function (user) {
    return !(user.id % 2);
});
console.log(filter);


// let sortDown = arrUsers.sort(function (user1, user2) {   // по спаданню
//     return user2.id - user1.id;
// });
// console.log(arrUsers);

// arrUsers.sort(function (user1, user2) {  // по зростанню
//     return user1.id - user2.id;
// });
// console.log(arrUsers);


// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню

for (let client = 0; client < arrClients.length; client++) {
    for (let beers = 0; beers < client; beers++) {
        arrClients[client].order.push('One more beer')
    }
}
console.log(arrClients);

arrClients.sort(function (client1, client2) {
    return client2.order.length - client1.order.length
});


// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.


// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.


class Computer {
    constructor(ram, cpu, name) {
        this.ram = ram;
        this.cpu = cpu;
        this.name = name;
        this.isRamUp = false;
    }

    powerOn() {
        console.log('Power on');
    }

    cpuUp(increase) {
        if (increase < 0) {
            console.log('Sorry, no');
        } else {
            increase > this.cpu * 0.1 ? console.log('too much increase for cpu') : this.cpu += increase;
        }
    }

    ramUp() {
        if (!this.isRamUp) {
            this.ram *= 2;
            this.isRamUp = true;
        } else {
            console.log('Sorry, you can`t re-increase the RAM');
        }
    }
}

const c = new Computer(12, 500, 'qwwer');
console.log(c);
c.powerOn();

// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.

// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Noutbook extends Computer {
    constructor(ram, cpu, name, inch) {
        super(ram, cpu, name);
        this.inch = inch;
        this.battery = this.cpu / (this.inch * this.ram);
    }
}
console.log(new Noutbook(34, 700, 'zxc', 17));


// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Noutbook {
    constructor(ram, cpu, name, inch, weight) {
        super(ram, cpu, name, inch);
        this.weight = weight;
    }

    powerOn() {
        if (this.weight > 2 && this.battery < 4) {
            console.log('Error');
        } else {
            console.log('Power on');
        }
    }
}

let ub = new Ultrabook(20, 1000, 'zzzzz', 14, 2.5);
console.log(ub);
ub.powerOn();

// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class PC extends Computer {
    constructor(ram, cpu, name) {
        super(ram, cpu, name);
    }

    playGame() {
        const games = ['Mario', 'Solitare', 'Quake', 'Tamagotchi'];
        let fps = this.cpu / this.ram;
        let numberGame = Math.floor(Math.random() * 3);
        console.log(numberGame);
        console.log(`You are playing ${games[numberGame]} with ${fps} FSP`);
    }
}

const pc = new PC(10, 700, 'vbncvb');
console.log(pc);
pc.powerOn();
pc.playGame();

pc.ramUp();
pc.cpuUp(80);

console.log(pc);

pc.ramUp();

// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class PlayPC extends PC {
    constructor(ram, cpu, name) {
        super(ram, cpu, name);
    }

    playGame() {
        if (this.cpu < 500 && this.ram < 8) {
            console.log(`На цьому відрі ігри не запускаються`);
        } else {
            const games = ['Mario', 'Solitare', 'Quake', 'Tamagotchi'];
            let fps = this.cpu / this.ram * 2;
            let numberGame = Math.floor(Math.random() * 3);
            console.log(numberGame);
            console.log(`You are playing ${games[numberGame]} with ${fps} FSP`);
            this.cpu -= this.cpu * 0.001;
        }

    }
}

let compPlay = new PlayPC(20, 500, 'pooiu');

compPlay.playGame();
compPlay.playGame();
compPlay.playGame();

console.log(compPlay);

let compPlayOld = new PlayPC(6, 400, 'cvbc');

compPlayOld.playGame();

console.log(compPlayOld);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderelas = [];

for (let cinderela = 0; cinderela < 10; cinderela++) {
    cinderelas.push(new Cinderella('Cinderela' + (cinderela + 1), 18 + cinderela, 43 - cinderela));
}

console.log(cinderelas);

const prince = new Prince('Prince', 30, 37);
console.log(prince);

for (let cinderela of cinderelas) {
    if (cinderela.footSize === prince.shoeSize) {
        console.log(`З принцом повинна бути попелюшка на ім'я ${cinderela.name}`);
        console.log(cinderela);
    }
}


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


function CinderellaLego(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

function PrinceLego(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

PrinceLego.prototype.findCind= function(arrCand){
    let find = arrCand.find(cind => cind.footSize === this.shoeSize);
    console.log(`З принцом повинна бути попелюшка на ім'я ${find.name}`);
}

const princeLego= new PrinceLego('Vasja', 25, 40);
let cinderelasLego = [];

for (let cinderela = 0; cinderela < 10; cinderela++) {
    cinderelasLego.push(new Cinderella('Cinderela' + (cinderela + 1), 18 + cinderela, 34 + cinderela));
}

console.log(cinderelasLego);
console.log(princeLego);

princeLego.findCind(cinderelasLego);


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }


function Tag(titleOfTag, action, attrs=[]){
    this.titleOfTag=titleOfTag;
    this.action=action;
    this.attrs=attrs;
}

function Attr(titleOfAttr, actionOfAttr){
    this.titleOfAttr=titleOfAttr;
    this.actionOfAttr=actionOfAttr;
}

let a= new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [new Attr('href', 'Задает адрес документа, на который следует перейти'), new Attr('name', 'Устанавливает имя якоря внутри документа.')] )

let div= new Tag('div','ТЭлемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', [new Attr('align', 'Задает выравнивание содержимого тега <div>.'), new Attr('title', 'Добавляет всплывающую подсказку к содержимому.')] )

let h1= new Tag('h1','Тег <h1> представляет собой наиболее важный заголовок первого уровня', [new Attr('align', 'Определяет выравнивание заголовка')] )

let span= new Tag('span','Тег <span> предназначен для определения строчных элементов документа', [new Attr('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'), new Attr('style', 'Применяется для определения стиля элемента с помощью правил CSS.')] )

let input= new Tag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [new Attr('border', 'Толщина рамки вокруг изображения'), new Attr('size', 'Ширина текстового поля')] )

let form= new Tag('form','Тег <form> устанавливает форму на веб-странице.', [new Attr('target', 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'), new Attr('name', 'Имя формы.')] )

let option= new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [new Attr('disabled', 'Заблокировать для доступа элемент списка.'), new Attr('label', 'Указание метки пункта списка.')] )

let select= new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором,', [new Attr('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'), new Attr('form', '')] )

console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);


