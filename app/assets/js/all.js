const prodocutsTitle = document.querySelector('.js_prodocuts_title'); // 商品標題
const productNavbarItems = document.querySelectorAll('.js_product_navbar_item'); // 商品分類表


// 商品渲染事件
function clickProductRenderEvent() {
  productNavbarItems.forEach((item) => {
    
    item.addEventListener('click', (e) => {
      cancelChecked();

      if (e.target.innerText === 'OPTICAL') {
        item.setAttribute('style', 'border-bottom-color: #AA0601;');
        

      } else if (e.target.innerText === 'SUNGLASSES') {
        item.setAttribute('style', 'border-bottom-color: #AA0601;');


      } else if (e.target.innerText === 'FUNCTIONAL') {
        item.setAttribute('style', 'border-bottom-color: #AA0601;');
        
        
      }
    });
  });
}

// 取消所有選取效果
function cancelChecked() {
  productNavbarItems.forEach((item) => {
    item.removeAttribute('style');
  });
}


//呼叫上面的這個函式
clickProductRenderEvent();

