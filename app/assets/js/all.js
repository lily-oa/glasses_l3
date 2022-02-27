$(function(){
  $('.js_product_navbar_item').on('click', function(){
    const checkedClass = 'border-bottom-secondary';
    const delCheckedClass = 'nav_item_content--checked';

    $('.js_product_navbar_item').addClass(checkedClass);
    $('.js_product_navbar_item').removeClass(delCheckedClass);
  });
});


