// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

let div=document.createElement('div');
let m = document.createElement('span');
let s = document.createElement('span');

document.body.append(div);
div.style.fontSize='400px';
div.style.position='fixed';
div.style.top='50%';
div.style.left='50%';
div.style.transform='translate(-50%,-50%)';
div.append(m,s);

function Second() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000)
    })
}
async function Time() {
    for (let minute = 0; minute < 3; minute++) {
        if (minute === 2) {
            div.style.color='red';
            m.innerText = '0'+minute+':';
            s.innerText = '00';
            break;
        }

        for (let sec = 0; sec < 60; sec++) {
            await Second();
            if (sec < 10) {
                m.innerText = '0' + minute+':';
                s.innerText = '0' + sec;               
            } else {
                m.innerText = '0' + minute+':';
                s.innerText = '' + sec;  
            }
        }
    }
}

Time();



// // Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hour = 0; hour < 3; hour++) {
//     for (let minute = 0; minute < 60; minute++) {
//         if (hour === 2 && minute === 20) {
//             console.log('time is: '+hour+ ':'+ minute+ ':00');
//             break;
//         }
//         for (let sec = 0; sec < 60; sec += 10) {
//             if (sec < 10 && minute < 10) {
//                 console.log('time is: '+ hour+ ':0'+ minute+ ':0'+ sec);
//             } else if (sec < 10) {
//                 console.log('time is: '+ hour+ ':'+ minute+ ':0'+ sec);
//             } else if (minute < 10) {
//                 console.log('time is: '+ hour+ ':0'+ minute+ ':'+sec);
//             } else {
//                 console.log('time is: '+hour+':'+minute+':'+sec);
//             }
//         }
//     }
// }