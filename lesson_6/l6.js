// // синхронізувати розпорядок дня

// function getUp(isAlarmPlayed){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isAlarmPlayed){              
//                 resolve('Good morning');
//             }else{
//                 reject ('Overslept!!!');
//             }
//         },500)
//     })
// }

// function takeShower(isHotWater){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isHotWater){
//                 resolve('enjoy your bath');
//             }else{
//                 reject ('cold water!!!');
//             }
//         },1500)
//     })
// }

// function makeUp(isThereCream){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             if(isThereCream){
//                 resolve('beautiful face');
//             }else{;
//                 resolve('and so it will come down');
//             }
//         },800)
//     })
// }

// function goWork(isJobDone){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isJobDone){
//                 resolve('Nice job');
//             }else{
//                 reject ('I`m quitting my job!!!');
//             }
//         },3000)
//     })
// }

// function pickUpFromKindergarten(amIFree){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(amIFree){
//                 resolve('hi, Nastja');
//             }else{
//                 reject ('Yura, pick up the child from kindergarten');
//             }
//         },400)
//     })
// }

// function getChildGymnastics(isTuesday){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isTuesday){
//                 resolve('time for coffy');
//             }else{
//                 reject ('hysterics!!!');
//             }
//         },1000)
//     })
// }

// function watchPreview(isBatteryFull){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isBatteryFull){
//                 resolve('understood');
//             }else{
//                 reject ('dont understood!!!');
//             }
//         },900)
//     })
// }

// function walkWithChild(canByIcecream){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(canByIcecream){
//                 resolve('everyone is happy');
//             }else{
//                 reject ('hysterics!!!');
//             }
//         },2000)
//     })
// }

// function watchLection(isWiFi){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isWiFi){
//                 resolve('lets learn');
//             }else{
//                 reject ('no lection today!!!');
//             }
//         },1200)
//     })
// }

// function makeHomework(isChildSleep){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isChildSleep){
//                 resolve('all done');
//             }else{
//                 reject ('the night is long...');
//             }
//         },2000)
//     })
// }

// getUp(true)
//     .then(result=>{
//         console.log(result);
//         return takeShower(true);
//     })
//     .then(result=>{
//         console.log(result);
//         return makeUp(false);
//     })
//     .then(result=>{
//         console.log(result);
//         return goWork(true);
//     })
//     .then(result=>{
//         console.log(result);
//         return pickUpFromKindergarten(true);
//     })
//     .then(result=>{
//         console.log(result);
//         return getChildGymnastics(true);
//     })
//     .then(result=>{
//         console.log(result);
//         return watchPreview(true);
//     })
//     .then(result=>{
//         console.log(result);
//         return walkWithChild(true);
//     })
//     .then(result=>{
//         console.log(result);
//         return watchLection(true);
//     })
//     .then(result=>{
//         console.log(result);
//         return makeHomework(true);
//     })
//     .then(result=>{
//         console.log(result);
//     })
//     .catch(reason=>{
//         console.log(reason);
//     })
//     .finally(()=>{
//         console.log('time to sleep....');
//     })

// async function myDay(){
//     try{
//         let result=await getUp(true);
//         console.log(result);

//         result=await takeShower(true);
//         console.log(result);

//         result=await makeUp(true);
//         console.log(result);

//         result=await goWork(true);
//         console.log(result);

//         result=await pickUpFromKindergarten(true);
//         console.log(result);

//         result=await getChildGymnastics(true);
//         console.log(result);

//         result=await walkWithChild(true);
//         console.log(result);

//         result=await watchLection(true);
//         console.log(result);

//         result=await makeHomework(true);
//         console.log(result);

//     }catch(er){
//         console.log(er);
//     }
// }

// myDay();


// 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// 2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
  }, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
  }, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
  }, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
  }, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
  }, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
  }, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
  }, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
  }, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
  }, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
  }, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
  }];


  for(const user of users){
      let divUser=document.createElement('div');
      divUser.style.border='red 1px solid';
      divUser.style.margin='10px';
      divUser.style.padding='5px';
      let nameUser=document.createElement('h2');
      nameUser.innerText=user.name;      
      let ageStatus=document.createElement('p');
      ageStatus.innerText=`age ${user.age}; status ${user.status}`
      let divAddress=document.createElement('div');
      divAddress.style.border='blue 1px solid';
      divAddress.style.padding='3px';
      for(const key in user.address){
        let divAdr=document.createElement('div');
        divAdr.style.border='gray 1px solid';
        divAdr.style.margin='3px';
        let pAdr=document.createElement('p');
        pAdr.innerText=`${key}: ${user.address[key]}`;
        divAdr.append(pAdr);
        divAddress.append(divAdr);
      }
      divUser.append(nameUser);
      divUser.append(ageStatus);
      divUser.append(divAddress);

      document.body.append(divUser);
    
  }


//   3 Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];


// <div id="content"></div>
// <h1>Правила бойцовского клуба</h1>
// <div id="wrap">

let divContent=document.createElement('div');
divContent.classList.add('content');
document.body.append(divContent);

let h1=document.createElement('h1');
h1.innerText='Правила бойцовского клуба';
document.body.append(h1);

let divWrap=document.createElement('div');
divWrap.classList.add('wrap');
document.body.append(divWrap);

//<div class="rules rule1">
//  <h2>Первое правило Бойцовского клуба.</h2>
//  <p>Никому не рассказывать о Бойцовском клубе.</p>
//</div>

for(let rule=0;rule<rules.length; rule++){
    let divRule=document.createElement('div');
    divRule.classList.add('rules');
    divRule.classList.add('rules'+(rule+1));

    let h2=document.createElement('h2');
    h2.innerText=rules[rule].title;
    let pRul=document.createElement('p');
    pRul.innerText=rules[rule].body;

    divRule.append(h2);
    divRule.append(pRul);

    divWrap.append(divRule)
}

