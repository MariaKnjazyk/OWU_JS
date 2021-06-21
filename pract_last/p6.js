 // Найти пропущеную букву в массиве которые лежат в алфавитном порядке ["a", "b", "c", "d", "f"] P.S. вам поможет charCodeAt()

 const chars = ["O",'p', "Q", "R", "S"];


 function lostLetter(arr) {
    //  let charsUP = [];
    //  for (const i of arr) {
    //      charsUP.push(i.toUpperCase());
    //  }

    const charsUP=arr.map(letter=>letter.toUpperCase());

     let code = charsUP[0].charCodeAt(0);
     for (let i = 1; i < charsUP.length; i++) {
         if (charsUP[i].charCodeAt(0) - code !== 1) {
             console.log(String.fromCharCode(++code));
             return;
         }
         code++;
     }
     console.log('немає пропущеної літери');
 }

 lostLetter(chars);

 console.log('___________');




 // Наибольший общий делитель

 function divider() {
     let minNumber = arguments[0];
     for (const num of arguments) {
         if (minNumber > num) {
             minNumber = num;
         }
     }

     let dividersMinNumber = [minNumber];
     for (let dvdr = Math.floor(minNumber / 2); dvdr > 1; dvdr--) {
         if (!(minNumber % dvdr)) {
             dividersMinNumber.push(dvdr);
         }
     }

     let maxDvdr = 1;
     for (let dvdr of dividersMinNumber) {
         let isDvdr = true;
         for (const num of arguments) {
             if (num % dvdr) {
                 isDvdr = false;
                 break;
             }
         }
         if (isDvdr) {
             maxDvdr = dvdr;
             break;
         }
     }
     console.log(maxDvdr);
 }

 divider(70, 28, 49, 14);
 console.log('___________');

 //сім грибників разом зібрали 100 грибів, причому ніякі двоє не зібрали однакову кількість. Доведіть що є три грибники, які разом зібрали не меньше 50 грибів.

 let masrooms = 100;
 const colectors = 7;
 const minSumMashr = 50;
 const sumCollectors = 3;

 for (let i = 0; i < colectors; i++) {
     masrooms -= i;
 }

 const minMushr = Math.floor(masrooms / colectors);

//  let bonus;
//  masrooms % colectors <= sumCollectors ? bonus = masrooms % colectors : bonus = sumCollectors;
let bonus = masrooms%colectors<=sumCollectors ? masrooms%colectors : sumCollectors;

 let mashrCollector = [minMushr];
 for (let i = 1; i < colectors; i++) {
     mashrCollector.push(minMushr + i);
 }

 let sumMashr = bonus;
 for (let i = 0; i < sumCollectors; i++) {
     sumMashr += mashrCollector[colectors - 1 - i];
 }

 sumMashr >= minSumMashr ? console.log(true) : console.log(false);
 console.log('___________');