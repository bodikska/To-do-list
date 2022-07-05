let addOrder = document.querySelector('.btn_submit');

function AddOrderList() {
    let infOrder = document.querySelector('.newOrder');
    let newBlock = document.createElement('div');
    newBlock.className = 'orders';
    let paragraf = document.createElement('p');
    paragraf.className = 'ordersParagraf';
    paragraf.innerHTML = infOrder.value;
    newBlock.appendChild(paragraf);
    let deleteOrder = document.createElement('input');
    deleteOrder.className = 'basket';
    deleteOrder.type = 'image';
    deleteOrder.src = 'basket.svg';
    let pointCheck = document.createElement('input');
    pointCheck.type = 'checkbox';
    pointCheck.className = 'Allchecked';
    let secondBlock = document.createElement('div');
    secondBlock.className = 'chPointDel';
    secondBlock.appendChild(pointCheck);
    secondBlock.appendChild(deleteOrder);
    newBlock.appendChild(secondBlock);
    document.querySelector('.all-orders').appendChild(newBlock);
    reordersBasket();
    isChecked();
    infOrder.value = '';
}
addOrder.addEventListener('click', AddOrderList);

// удаление задания из спика листа
 function deleteOrder() {
     let pointBasket = event.target;
     pointBasket.closest('.orders').remove();
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
            } else {
                AllParagraf[i].style.textDecoration = 'none';
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
    
    
 
 