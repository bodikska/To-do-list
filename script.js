let addOrder = document.querySelector('.btn_submit');
let allList = [];

function loadAllList() {
    let localSt = localStorage.getItem('allList');
    localSt = JSON.parse(localSt);
    allList = localSt;
    localSt.map((item,index) => {

    let newBlock = document.createElement('div');
    let deleteOrder = document.createElement('input');
    let pointCheck = document.createElement('input');
    let paragraf = document.createElement('p');
    let secondBlock = document.createElement('div');

    newBlock.className = 'orders';
    paragraf.className = 'ordersParagraf';
    paragraf.innerHTML = item.text;

    

    newBlock.appendChild(paragraf);
    deleteOrder.className = 'basket';
    deleteOrder.type = 'image';
    deleteOrder.src = 'basket.svg';
    pointCheck.type = 'checkbox';
    pointCheck.className = 'Allchecked';
    secondBlock.className = 'chPointDel';
    secondBlock.appendChild(pointCheck);
    secondBlock.appendChild(deleteOrder);
    newBlock.appendChild(secondBlock);
    document.querySelector('.all-orders').appendChild(newBlock);
    reordersBasket();
    isChecked();
    if (item.checked ==true) {
        let AllParagraf = document.querySelectorAll('.ordersParagraf')
        AllParagraf[index].style.textDecoration = 'line-through';
        let allCkeckBox = document.querySelectorAll('.Allchecked')
        allCkeckBox[index].checked = true;
    }
    })
   
    
}
if (localStorage.getItem('allList')!=null) {
    loadAllList();
}

//  setTimeout({
   
//  },500);
function AddOrderList() {
    let infOrder = document.querySelector('.newOrder');
    let newBlock = document.createElement('div');
    let paragraf = document.createElement('p');
    let deleteOrder = document.createElement('input');
    let pointCheck = document.createElement('input');
    let secondBlock = document.createElement('div');


    newBlock.className = 'orders';
    paragraf.className = 'ordersParagraf';
    paragraf.innerHTML = infOrder.value;
    newBlock.appendChild(paragraf);
    deleteOrder.className = 'basket';
    deleteOrder.type = 'image';
    deleteOrder.src = 'basket.svg';
    pointCheck.type = 'checkbox';
    pointCheck.className = 'Allchecked';
    secondBlock.className = 'chPointDel';
    secondBlock.appendChild(pointCheck);
    secondBlock.appendChild(deleteOrder);
    newBlock.appendChild(secondBlock);
    document.querySelector('.all-orders').appendChild(newBlock);
    reordersBasket();
    isChecked();
    let newListItem = {
        'text':infOrder.value,
        'checked':false
    };
    allList.push(newListItem);
    console.log(allList);
    infOrder.value = '';
    localStorage.setItem('allList', JSON.stringify(allList));
}
addOrder.addEventListener('click', AddOrderList);

// удаление задания из спика листа
 function deleteOrder() {
     let pointBasket = event.target;
     const allBasket = document.querySelectorAll('.basket');
     const indexBasket = [...allBasket];
     let index = indexBasket.indexOf(pointBasket);
     console.log(index);
     allList.splice(index,1);
     pointBasket.closest('.orders').remove();
     localStorage.setItem('allList', JSON.stringify(allList));

 }
  function reordersBasket() {
 let allBasket = document.querySelectorAll('.basket');
    allBasket.forEach(function(element){
        element.addEventListener('click', deleteOrder);
    })
  }
  // функция проверки нажатия cackbox и зачеркивание строки как выполненое задание
  function chekedOrder() { 
    let allOrders = document.querySelectorAll('.orders');
    let AllParagraf = document.querySelectorAll('.ordersParagraf')
    for (let i = 0; i<= allOrders.length-1; i++) { 
        if(this.closest('.orders')==allOrders[i]) {
            if (this.checked) {
                AllParagraf[i].style.textDecoration = 'line-through';
                allList[i].checked = true;
                localStorage.setItem('allList', JSON.stringify(allList));

            } else {
                AllParagraf[i].style.textDecoration = 'none';
                allList[i].checked = false;
                localStorage.setItem('allList', JSON.stringify(allList));
            }
        } 
    }
  }
  function isChecked() {
    let allCheck = document.querySelectorAll('.Allchecked');
    allCheck.forEach(function(element){
        element.addEventListener('click', chekedOrder);
    }) 
  }
    
    
 
 