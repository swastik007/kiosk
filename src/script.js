$("[data-toggle='modal-cart']").click(function() {
    $("#popupcart").fadeIn();
});
$("[data-toggle='modal-payment']").click(function() {
    $("#popuppayment").fadeIn();
});
$("[data-toggle='modal-checkout']").click(function() {
    $("#popupcheckout").fadeIn();
});
$("[data-close]").click(function() {
    $(this).parents(".modal").fadeOut();
});