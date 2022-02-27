"use strict";

$(function () {
  $('.js_product_navbar_item').on('click', function () {
    var checkedClass = 'border-bottom-secondary';
    var delCheckedClass = 'nav_item_content--checked';
    $('.js_product_navbar_item').addClass(checkedClass);
    $(this).removeClass(delCheckedClass);
  });
});
//# sourceMappingURL=all.js.map
