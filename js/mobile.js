export const mobile = $(document).ready(function () {
    $(".mobile-menu-toggle").click(function () {
        $(".mobile-menu").slideToggle();
        $(".burger-icon, .close-icon").toggleClass("animate");
    });
});