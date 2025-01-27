$(document).ready(function($) {
    $("#slider").QCslider({ duration: 7000 });
});

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

$(document).ready(function() {
    // Handle click event on accordion buttons
    $('[data-accordion-target]').on('click', function() {
        const target = $(this).attr('data-accordion-target');
        const isExpanded = $(this).attr('aria-expanded') === 'true';

        // Toggle current accordion section
        $(target).toggleClass('hidden', isExpanded);
        $(this).attr('aria-expanded', !isExpanded);

        // Rotate the accordion icon
        $(this).find('[data-accordion-icon]').toggleClass('rotate-180', !isExpanded);
    });
});