const prodocutsTitle = document.querySelector('.js_prodocuts_title'); // 商品標題
const productNavbarItems = document.querySelectorAll('.js_product_navbar_item'); // 商品分類表

// 頁面資料
const productDatas = {
  optical: {
    title: 'Celluloid Combi',
    banners: [
      {
        id: 1,
        imgUrl: './assets/images/banners/banner-1.png',
      },
      {
        id: 2,
        imgUrl: './assets/images/banners/banner-2.png',
      },
    ],
    products: [
      {
        id: 1,
        imgUrl: './assets/images/product_Imgs/product-optical-1.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 2,
        imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 3,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 4,
        imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 5,
        imgUrl: './assets/images/product_Imgs/product-optical-5.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 6,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 7,
        imgUrl: './assets/images/product_Imgs/product-optical-6.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 8,
        imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 9,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 10,
        imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 11,
        imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 12,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
    ],
  },
  sunglasses: {
    title: '2020 NEW COLLECTION',
    banners: [
      {
        id: 1,
        imgUrl: './assets/images/banners/banner-3.png',
      },
      {
        id: 2,
        imgUrl: './assets/images/banners/banner-4.png',
      },
    ],
    products: [
      {
        id: 1,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-1.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 2,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-2.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 3,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-3.png',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 4,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-4.png',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 5,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-5.png',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 6,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-6.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
    ],
  },
  functional: {
    title: 'Unique And Style',
    banners: [
      {
        id: 1,
        imgUrl: './assets/images/banners/banner-5.png',
      },
      {
        id: 2,
        imgUrl: './assets/images/banners/banner-6.png',
      },
    ],
    products: [
      {
        id: 1,
        imgUrl: './assets/images/product_Imgs/product-optical-6.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 2,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-1.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 3,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-4.png',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 4,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 5,
        imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 6,
        imgUrl: './assets/images/product_Imgs/product-optical-5.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
    ],
  },
};


// 商品渲染事件
function clickProductRenderEvent() {
  let productCategory, renderStr;
  // productNavbarItems.removeAttribute('style');

  productNavbarItems.forEach((item) => {
    
    item.addEventListener('click', (e) => {
      cancelChecked();

      if (e.target.innerText === 'OPTICAL') {
        item.setAttribute('style', 'border-bottom-color: #AA0601; transition-duration: .3s');
        productCategory = productDatas.optical;
        renderStr = productOpticalsStr;
        prodocutsTitle.textContent = productCategory.title;
        
        
        

      } else if (e.target.innerText === 'SUNGLASSES') {
        item.setAttribute('style', 'border-bottom-color: #AA0601; transition-duration: .3s');
        productCategory = productDatas.sunglasses;
        renderStr = productSunglassesStr;
        prodocutsTitle.textContent = productCategory.title;
        
      } else if (e.target.innerText === 'FUNCTIONAL') {
        item.setAttribute('style', 'border-bottom-color: #AA0601; transition-duration: .3s');
        productCategory = productDatas.functional;
        renderStr = productFunctionalStr;
        prodocutsTitle.textContent = productCategory.title;
        
      }
    });
  });
}

// 畫面初始渲染
// 商品頁面
function initProduct() {
  if (prodocutsTitle) {
    prodocutsTitle.textContent = productDatas.optical.title;
    clickProductRenderEvent();
  }
}

// 取消所有選取效果
function cancelChecked() {
  productNavbarItems.forEach((item) => {
    item.removeAttribute('style');
  });
}

// 初始化 
function init(){
  initProduct();
}

init();