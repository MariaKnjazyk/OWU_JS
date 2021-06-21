// 1) Створити масив з 20 чисел та:

let arr1 = [];
for (let item = 0; item < 20; item++) {
    arr1.push(Math.floor(Math.random() * 200 - 100));
}

console.log(arr1);

// a) відсортувати його від меншого до більшого.

console.log(arr1.sort(function (item1, item2) {
    return item1 - item2;
}))

// b) відсортувати його від більшого до меншого.

console.log(arr1.sort(function (item1, item2) {
    return item2 - item1;
}))

// c) Відфілтрувати числа які є кратними 3.

console.log(arr1.filter(item => !(item % 3)));

// d) Відфілтрувати числа які є більшими за 10.

console.log(arr1.filter(item => item > 10));

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

arr1.forEach(item => document.write(`${item}, `));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

console.log(arr1.map(item => item = 3 * item));

// g) Порахувати загальну суму всіх елментів у масиві (reduce)

console.log(arr1.reduce((total, item) => total + item));


// 2) Створити масив з 20 стрічок та:

let arrStr = ['Отримати', 'в', 'новому', 'масиві', 'тільки', 'ті', 'слова', 'довжина', 'яких', 'більша', 'Змінити', 'кожне', 'слово', 'масиві', 'додавши', 'на', 'початок', 'алфавітному', 'порядку', 'Відсортувати']
console.log(arrStr);

for (let item = 0; item < arrStr.length; item++) {
    arrStr[item] = arrStr[item].toLowerCase();
    console.log(arrStr[item]);
}

console.log(arrStr);

//  a) Відсортувати його в алфавітному порядку

arrStr.sort();
console.log(arrStr);

//  b) Відсортувати в зворотньому порядку

arrStr.reverse();
console.log(arrStr);

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

let arrStrLes4 = [];
arrStrLes4 = arrStr.filter(item => item.length > 4);
console.log(arrStrLes4);


//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

arrStr = arrStr.map(item => item = 'Sam says ' + item);
console.log(arrStr);

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
const users = [{
        name: 'vasya',
        age: 31,
        isMarried: false
    },
    {
        name: 'petya',
        age: 30,
        isMarried: true
    },
    {
        name: 'kolya',
        age: 29,
        isMarried: true
    },
    {
        name: 'olya',
        age: 28,
        isMarried: false
    },
    {
        name: 'max',
        age: 30,
        isMarried: true
    },
    {
        name: 'anya',
        age: 31,
        isMarried: false
    },
    {
        name: 'oleg',
        age: 28,
        isMarried: false
    },
    {
        name: 'andrey',
        age: 29,
        isMarried: true
    },
    {
        name: 'masha',
        age: 30,
        isMarried: true
    },
    {
        name: 'olya',
        age: 31,
        isMarried: false
    },
    {
        name: 'max',
        age: 31,
        isMarried: true
    }
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

users.sort((user1, user2) => user1.age - user2.age);
console.log(users);

users.sort((user1, user2) => user2.age - user1.age);
console.log(users);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

users.sort((user1, user2) => user1.name.length - user2.name.length);
console.log(users);

users.sort((user1, user2) => user2.name.length - user1.name.length);
console.log(users);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)

let newUsers = JSON.parse(JSON.stringify(users))
newUsers.map((user, id) => user.id = id + 1);
console.log(users);
console.log(newUsers);


// d) відсортувати його за індентифікатором

newUsers.sort((user1, user2) => user2.id - user1.id);
console.log(newUsers);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

let userWA = newUsers.reduce((usersAppartment, user) => {
    if (user.isMarried) {
        user.appart = true;
        usersAppartment.push(user);
    }
    return usersAppartment;
}, [])

console.log(userWA);
console.log(newUsers);


console.log('______________________');
//  Відфільтрувати масив за наступними крітеріями :
const cars = [{
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];


//  - двигун більше 3х літрів

let volumeMore3 = cars.filter(car => car.volume > 3);
console.log(volumeMore3);

//  - двигун = 2л

let volume2 = cars.filter(car => car.volume === 2);
console.log(volume2);

//  - виробник мерс

let mercedeses = cars.filter(car => car.producer === "mercedes");
console.log(mercedeses);

//  - двигун більше 3х літрів + виробник мерседес

let mercedesesVolumeMore3 = cars.filter(car => car.producer === "mercedes" && car.volume > 3);
console.log(mercedesesVolumeMore3);

//  - двигун більше 3х літрів + виробник субару

let subaruVolumeMore3 = cars.filter(car => car.producer === "subaru" && car.volume > 3);
console.log(subaruVolumeMore3);

//  - сили більше ніж 300

let powerMore300 = cars.filter(car => car.power > 300);
console.log(powerMore300);

//  - сили більше ніж 300 + виробник субару

let subaruPowerMore300 = cars.filter(car => car.producer === "subaru" && car.power > 300);
console.log(subaruPowerMore300);

//  - мотор серіі ej

let engineEj = cars.filter(car => car.engine.includes('ej'));
console.log(engineEj);

//  - сили більше ніж 300 + виробник субару + мотор серіі ej

let subaruPowerMore300EngineEj = cars.filter(car => car.producer === "subaru" && car.power > 300 && car.engine.includes('ej'));
console.log(subaruPowerMore300EngineEj);

//  - двигун меньше 3х літрів + виробник мерседес

let mercedesesVolumeLess3 = cars.filter(car => car.producer === "mercedes" && car.volume < 3);
console.log(mercedesesVolumeLess3);

//  - двигун більше 2л + сили більше 250

let powerMore250VolumeMore2 = cars.filter(car => car.volume > 2 && car.power > 250);
console.log(powerMore250VolumeMore2);

//  - сили більше 250  + виробник бмв

let bmwsPowerMore250 = cars.filter(car => car.producer === "bmw" && car.power > 250);
console.log(bmwsPowerMore250);



console.log('_____________');
// - взять слдующий массив

const usersWithAddress = [{
        id: 9,
        name: 'vasya',
        age: 31,
        isMarried: false,
        address: {
            city: 'Kyiv',
            street: 'Gongadze',
            number: 16
        }
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        isMarried: true,
        address: {
            city: 'Rivne',
            street: 'Zelena',
            number: 1
        }
    },
    {
        id: 4,
        name: 'kolya',
        age: 29,
        isMarried: true,
        address: {
            city: 'Lviv',
            street: 'Pasichna',
            number: 121
        }
    },
    {
        id: 3,
        name: 'olya',
        age: 28,
        isMarried: false,
        address: {
            city: 'Rivne',
            street: 'Shevchenko',
            number: 90
        }
    },
    {
        id: 8,
        name: 'max',
        age: 30,
        isMarried: true,
        address: {
            city: 'Lviv',
            street: 'Kriva Lipa',
            number: 115
        }
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        isMarried: false,
        address: {
            city: 'Lviv',
            street: 'Shevchenko',
            number: 2
        }
    },
    {
        id: 10,
        name: 'oleg',
        age: 28,
        isMarried: false,
        address: {
            city: 'Kyiv',
            street: 'Centralna',
            number: 22
        }
    },
    {
        id: 5,
        name: 'andrey',
        age: 29,
        isMarried: true,
        address: {
            city: 'Lviv',
            street: 'Gorodotska',
            number: 43
        }
    },
    {
        id: 1,
        name: 'masha',
        age: 30,
        isMarried: true,
        address: {
            city: 'Kyiv',
            street: 'Peremogi',
            number: 12
        }
    },
    {
        id: 7,
        name: 'olya',
        age: 31,
        isMarried: false,
        address: {
            city: 'Lviv',
            street: 'Naukova',
            number: 16
        }
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        isMarried: true,
        address: {
            city: 'Rivne',
            street: 'Ivana Franka',
            number: 121
        }
    }
];

// -- Відсортувати їх по ID

usersWithAddress.sort((user1, user2) => user1.id - user2.id);
console.log(usersWithAddress);

// -- Відсортувати їх по ID в зворотньому порядку

usersWithAddress.sort((user1, user2) => user2.id - user1.id);
console.log(usersWithAddress);

// -- Відсортувати по віку

usersWithAddress.sort((user1, user2) => user1.age - user2.age);
console.log(usersWithAddress);

// -- Відсортувати по віку в зворотньому порядку

usersWithAddress.sort((user1, user2) => user2.age - user1.age);
console.log(usersWithAddress);

// -- Відсорутвати по імені

usersWithAddress.sort((user1, user2) => {
    if (user1.name > user2.name) {
        return 1;
    }
    return -1
});
console.log(usersWithAddress);

// -- Відсорутвати по назві вулиці 

usersWithAddress.sort((user1, user2) => {
    if (user1.address.street > user2.address.street) {
        return 1;
    }
    return -1
});
console.log(usersWithAddress);

// -- Відсорутвати по номеру будинку

usersWithAddress.sort((user1, user2) => user1.address.number - user2.address.number);
console.log(usersWithAddress);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)

let younger30 = usersWithAddress.filter(user => user.age < 30);
console.log(younger30);

// -- Залишити тільки одружених

let married = usersWithAddress.filter(user => user.isMarried);
console.log(married);

// -- Залишити тільки одружених, які молодні за 30

let younger30Married = usersWithAddress.filter(user => user.isMarried && user.age < 30);
console.log(younger30Married);

// -- Залишити лише тих, в кого парні номери будинків.

let evenNumber = usersWithAddress.filter(user => !(user.address.number % 2));
console.log(evenNumber);

// -- Порахувати загальний вік всіх людей. (reduce)

let totalAge = usersWithAddress.reduce((total, user) => {
    total += user.age;
    return total;
}, 0);
console.log(totalAge);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

let marriedOver30 = usersWithAddress.reduce((acc, user) => {
    if (user.isMarried && user.age > 30) {
        user.child = {
            age: 3
        };
        acc.push(user);
    }
    return acc;
}, []);

console.log(marriedOver30);


// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.

class Car {
    constructor(producer, power, owner, price, year) {
        this.producer = producer;
        this.power = power;
        this.owner = owner;
        this.price = price;
        this.year = year;
    }

    repair() {
        this.power *= 1.1;
        this.price *= 1.05;
    }
}

class Owner {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }

    experienceUp() {
        this.experience += 1;
    }
}


// Створити не менше 7 та не більше 20 машинок.
// Для початку вкладіть всі наші створені автомобілі в масив cars.

let carsNew = [];
carsNew[0] = new Car('subaru', 300, new Owner('Andrii', 29, 5), 10500, 2017);
carsNew[1] = new Car('subaru', 250, new Owner('Oleg', 25, 6), 10000, 2014);
carsNew[2] = new Car('mercedes', 200, new Owner('Ivan', 28, 7), 5000, 2010);
carsNew[3] = new Car('mercedes', 150, new Owner('Petro', 33, 8), 60000, 2004);
carsNew[4] = new Car('mercedes', 300, new Owner('Olja', 19, 1), 23000, 2014);
carsNew[5] = new Car('bmw', 350, new Owner('Yurii', 20, 3), 11000, 2008);
carsNew[6] = new Car('bmw', 350, new Owner('Andrii', 29, 2), 2000, 1992);
carsNew[7] = new Car('bmw', 300, new Owner('Kolja', 54, 15), 45000, 2021);
carsNew[8] = new Car('subaru', 200, new Owner('Anna', 41, 0), 21000, 2020);
carsNew[9] = new Car('mercedes', 250, new Owner('Alina', 35, 3), 1000, 2016);


// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

console.log(carsNew);

let firstDriver = carsNew[0].owner;
for (let car = 0; car < carsNew.length - 1; car++) {
    carsNew[car].power *= 1.1;
    carsNew[car].owner = carsNew[car + 1].owner;
}
carsNew[carsNew.length - 1].owner = firstDriver;


console.log(carsNew);





// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%


for (let car = 0; car < carsNew.length; car += 2) {
    carsNew[car].repair();
}

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

carsNew.forEach(car => {
    if (car.owner.experience < 5 && car.owner.age > 25) {
        car.owner.experienceUp();
    }
});



// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


let sum = 0;
for (let car of carsNew) {
    sum += car.price;
}

console.log(sum);

// Задача: дан отсортированный по возрастанию массив целых чисел. 
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let arr = [-10, -10, 3, 3, 3, 7, 8, 9, 10, 10];
const element = -10;
let MinIndex = arr.findIndex(item => item === element);
if (MinIndex === -1) {
    console.log(-1);
} else {
    let MaxIndex = arr.lastIndexOf(element);
    console.log(`MinIndex=${MinIndex}, MaxIndex=${MaxIndex}`);
}


//Знайти найбільше число в масиві (reduce)

let arr2=[4,8,1,34,-65, 16, 7, 888, 888.1 ];

let maxNum=arr2.reduce((max,value)=>{
    if(value>max){
        max=value;
    }
    return max;
})

console.log(maxNum);