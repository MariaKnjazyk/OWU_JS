// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

let imgList = document.getElementsByTagName('img');
let maxHeight = imgList[Math.floor(imgList.length / 2)].style.height = '500px';
let delta = Math.round(400 / Math.floor(imgList.length / 2));
for (let imgIndex = 0; imgIndex < Math.floor(imgList.length / 2); imgIndex++) {
    imgList[imgIndex].style.height = (100 + imgIndex * delta) + 'px';
    imgList[imgList.length - imgIndex - 1].style.height = (100 + imgIndex * delta) + 'px';
}

for (let imgIndex = 0; imgIndex < imgList.length; imgIndex++) {
    imgList[imgIndex].onclick = async () => {
        let mouve = Math.floor(imgList.length / 2) - imgIndex;
        if (mouve > 0) {
            for (let i = 0; i < mouve; i++) {
                await mouveRight();
            }
        }else if(mouve < 0){
            for (let i = 0; i < 0-mouve; i++) {
                await mouveLeft();
            }
        }
    }
}

let left = document.getElementById('arr_left');
left.onclick = () => {
    mouveLeft();
}

function mouveLeft() {
    return new Promise(resolve => {
        setTimeout(() => {
            let temp = imgList[0].src;
            for (let imgIndex = 0; imgIndex < imgList.length - 1; imgIndex++) {
                imgList[imgIndex].src = imgList[imgIndex + 1].src
            }
            imgList[imgList.length - 1].src = temp;
            resolve();
        }, 50)
    })
}

let right = document.getElementById('arr_right');
right.onclick = () => {
    mouveRight();
}

function mouveRight() {
    return new Promise(resolve => {
        setTimeout(() => {
            let temp = imgList[imgList.length - 1].src;
            for (let imgIndex = imgList.length - 1; imgIndex > 0; imgIndex--) {
                imgList[imgIndex].src = imgList[imgIndex - 1].src
            }
            imgList[0].src = temp;
            resolve();
        }, 50)
    })
}