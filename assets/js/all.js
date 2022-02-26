"use strict";

var prodocutsTitle = document.querySelector('.js_prodocuts_title'); // 商品標題

var productNavbarItems = document.querySelectorAll('.js_product_navbar_item'); // 商品分類表
// 商品渲染事件

function clickProductRenderEvent() {
  productNavbarItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
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
} // 取消所有選取效果


function cancelChecked() {
  productNavbarItems.forEach(function (item) {
    item.removeAttribute('style');
  });
} //呼叫上面的這個函式


clickProductRenderEvent();
//# sourceMappingURL=all.js.map
