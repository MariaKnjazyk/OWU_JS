// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.

let arr = JSON.parse(localStorage.getItem('arrItems'));

console.log(arr);

for(let item of arr){
    let itemBlock=document.createElement('div');
    itemBlock.classList.add('itemBlock');
    itemBlock.style.margin = '20px'
    itemBlock.style.height = '300px';
    itemBlock.style.width = '200px';
    itemBlock.style.border = 'solid 1px red'
    itemBlock.style.textAlign = 'center';  
    document.body.append(itemBlock);

    let pict=document.createElement('img');
    pict.src=item.picture;
    pict.alt=item.name;
    pict.style.height='45%';
    pict.style.width='90%';
    itemBlock.append(pict);

    let h2=document.createElement('h2');
    h2.innerText=item.name;
    itemBlock.append(h2);

    let p1=document.createElement('p');
    p1.innerText=item.price;
    itemBlock.append(p1);

    let p2=document.createElement('p');
    p2.innerText=`Quantity - ${item.quantity}`;
    itemBlock.append(p2);



}

// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.

let clearBtn = document.getElementById('clear');
clearBtn.onclick = () => {
    localStorage.clear();
}

// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let arrDiv = document.getElementsByClassName('itemBlock');

for (let div = 0; div < arrDiv.length; div++) {
    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete item';
    arrDiv[div].appendChild(delBtn);
    delBtn.onclick = () => {
        arr.splice(div, 1);
        localStorage.setItem('arrItems',JSON.stringify(arr));
        window.location.reload();
    }
}