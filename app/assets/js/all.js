// nav選項的 hover 格子裡下底紅線設定 (相關連結 _nav.scss 及 frame-nav.ejs)
$(function(){
  $('.js_product_navbar_item').on('click', function(){
    const checkedClass = 'border-bottom-secondary';
    const delCheckedClass = 'nav_item_content--checked';

    $('.js_product_navbar_item').addClass(checkedClass);
    $('.js_product_navbar_item').removeClass(delCheckedClass);
  });
});
