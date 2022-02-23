"use strict";

var prodocutsTitle = document.querySelector('.js_prodocuts_title'); // 商品標題

var productNavbarItems = document.querySelectorAll('.js_product_navbar_item'); // 商品分類表
// 頁面資料

var productDatas = {
  optical: {
    title: 'Celluloid Combi',
    banners: [{
      id: 1,
      imgUrl: './assets/images/banner-1.png'
    }, {
      id: 2,
      imgUrl: './assets/images/banner-2.png'
    }],
    products: [{
      id: 1,
      imgUrl: './assets/images/product-optical-1.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 2,
      imgUrl: './assets/images/product-optical-2.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 3,
      imgUrl: './assets/images/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 4,
      imgUrl: './assets/images/product-optical-4.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 5,
      imgUrl: './assets/images/product-optical-5.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 6,
      imgUrl: './assets/images/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 7,
      imgUrl: './assets/images/product-optical-6.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 8,
      imgUrl: './assets/images/product-optical-4.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 9,
      imgUrl: './assets/images/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 10,
      imgUrl: './assets/images/product-optical-4.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 11,
      imgUrl: './assets/images/product-optical-2.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 12,
      imgUrl: './assets/images/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }]
  },
  sunglasses: {
    title: '2020 NEW COLLECTION',
    banners: [{
      id: 1,
      imgUrl: './assets/images/banner-3.png'
    }, {
      id: 2,
      imgUrl: './assets/images/banner-4.png'
    }],
    products: [{
      id: 1,
      imgUrl: './assets/images/product-sunglasses-1.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 2,
      imgUrl: './assets/images/product-sunglasses-2.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 3,
      imgUrl: './assets/images/product-sunglasses-3.png',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 4,
      imgUrl: './assets/images/product-sunglasses-4.png',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 5,
      imgUrl: './assets/images/product-sunglasses-5.png',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 6,
      imgUrl: './assets/images/product-sunglasses-6.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }]
  },
  functional: {
    title: 'Unique And Style',
    banners: [{
      id: 1,
      imgUrl: './assets/images/banner-5.png'
    }, {
      id: 2,
      imgUrl: './assets/images/banner-6.png'
    }],
    products: [{
      id: 1,
      imgUrl: './assets/images/product-optical-6.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 2,
      imgUrl: './assets/images/product-sunglasses-1.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 3,
      imgUrl: './assets/images/product-sunglasses-4.png',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 4,
      imgUrl: './assets/images/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 5,
      imgUrl: './assets/images/product-optical-2.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 6,
      imgUrl: './assets/images/product-optical-5.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }]
  }
}; // 商品渲染 Fn

function renderProductData(data, fn) {
  // 產品資料渲染
  var str = '';
  data.forEach(function (item) {
    str += fn(item);
  });
} // 商品渲染事件


function clickProductRenderEvent() {
  var productCategory, renderStr; // productNavbarItems.removeAttribute('style');

  productNavbarItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      cancelChecked();

      if (e.target.innerText === 'OPTICAL') {
        item.setAttribute('style', 'border-bottom-color: #AA0601; transition-duration: .3s');
        productCategory = productDatas.optical;
        prodocutsTitle.textContent = productCategory.title;
        window.location.href = "./frame-opt.html";
      } else if (e.target.innerText === 'SUNGLASSES') {
        item.setAttribute('style', 'border-bottom-color: #AA0601; transition-duration: .3s');
        productCategory = productDatas.sunglasses;
        prodocutsTitle.textContent = productCategory.title;
        window.location.href = "./frame-sun.html";
      } else if (e.target.innerText === 'FUNCTIONAL') {
        item.setAttribute('style', 'border-bottom-color: #AA0601; transition-duration: .3s');
        productCategory = productDatas.functional;
        prodocutsTitle.textContent = productCategory.title;
        window.location.href = "./frame-fun.html";
      }
    });
  });
} // 取消所有選取效果


function cancelChecked() {
  productNavbarItems.forEach(function (item) {
    item.removeAttribute('style');
  });
} // 畫面初始渲染
// 商品頁面


function initProduct() {
  if (prodocutsTitle) {
    prodocutsTitle.textContent = productDatas.optical.title;
    clickProductRenderEvent();
  }
} // 初始化 


function init() {
  initProduct();
}

init();
//# sourceMappingURL=all.js.map
