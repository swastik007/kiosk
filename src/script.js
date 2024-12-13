$("[data-toggle='modal-cart']").click(function() {
    $("#popupcart").fadeIn();
});
$("[data-toggle='modal-payment']").click(function() {
    $("#popuppayment").fadeIn();
});
$("[data-toggle='modal-checkout']").click(function() {
    $("#popupcheckout").fadeIn();
});
$("[data-toggle='modal-ingredients']").click(function() {
    $("#popupingredients").fadeIn();
});
$("[data-toggle='modal-qr']").click(function() {
    $("#popupqr").fadeIn();
});
$("[data-close]").click(function() {
    $(this).parents(".modal").fadeOut();
});