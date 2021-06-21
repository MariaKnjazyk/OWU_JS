// Дано відсортований масив (мінімум 10 елементів)
// Необхідно модифікувати масив так, що б дублікати зустрічалися не більше 2х разів підряд.

// Example:
// [1, 1, 1, 2, 3, 3, 3, 3] -> [ 1, 1, 2, 3, 3, 1, 3, 3]

// [0, 0, 1, 1, 1, 2, 2] -> [0, 0, 1, 1, 2, 2, 1]

let arr = [1, 1, 1, 2, 2, 2, 2, 2, 2, 2]
//let arr = [1, 1, 1, 2, 2, 2, 2, 2, 2, 2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
//let arr = [1, 1, 1, 2, 2, 2, 2, 2, 2, 2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];


let max = 1;
let q = 1;
let index = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        q++;
    } else {
        if (q > max) {
            max = q;
            q = 1;
            index = i;
        }
    }
}
if (q > max) {
    max = q;
    index = arr.length;
}


if (max > Math.ceil(arr.length / 3) * 2) {
    console.log('No way!');
} else {
    let arrMaxQ = (arr.splice(index - max, max))
    for (let num of arrMaxQ) {
        arr.unshift(num);
    }

    let rotation = true;
    while (rotation) {
        rotation = false;
        for (let i = 1; i < arr.length - 2; i++) {
            if (arr[i] === arr[i - 1] && arr[i] === arr[i + 1]) {
                rotation = true;
                let temp = arr[i + 1];
                arr[i + 1] = arr[i + 2];
                arr[i + 2] = temp;
            }
        }
    }

    console.log(arr);
}

// 2 2 2 2 2 2 2 1 1 1
// 2 2 2 2 2 2 1 2 1 1
// 2 2 2 2 2 1 2 2 1 1
// 2 2 2 2 1 2 2 1 2 1
// 2 2 2 1 2 2 1 2 2 1
// 2 2 1 2 2 1 2 2 1 2