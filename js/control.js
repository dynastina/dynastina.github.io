$(document).on('keydown', function (e) {

    switch (e.which) {
        case 37: // left
            left();

            $('.btn-left').addClass('bg-secondary');
            setTimeout(function () {
                $('.btn-left').removeClass('bg-secondary');
            }, 100);

            break;

        case 38: // up
            up();

            $('.btn-up').addClass('bg-secondary');
            setTimeout(function () {
                $('.btn-up').removeClass('bg-secondary');
            }, 100);
            
            break;

        case 39: // right
            right();

            $('.btn-right').addClass('bg-secondary');
            setTimeout(function () {
                $('.btn-right').removeClass('bg-secondary');
            }, 100);

            break;

        case 40: // down
            down();

            $('.btn-down').addClass('bg-secondary');
            setTimeout(function () {
                $('.btn-down').removeClass('bg-secondary');
            }, 100);

            break;

        case 32: // spacebar
            hit();

            $('.btn-attack').addClass('bg-secondary');
            setTimeout(function () {
                $('.btn-attack').removeClass('bg-secondary');
            }, 100);

            break;

        case 66: // B (shop)
            shop();

            $('.btn-shop').addClass('bg-secondary');
            setTimeout(function () {
                $('.btn-shop').removeClass('bg-secondary');
            }, 100);

            break;

        case 73: // I (info)
            info();

            $('.btn-info-dw').addClass('bg-secondary');
            setTimeout(function () {
                $('.btn-info-dw').removeClass('bg-secondary');
            }, 100);

            break;

        case 72: // H (help)
            help();

            $('.btn-help').addClass('bg-secondary');
            setTimeout(function () {
                $('.btn-help').removeClass('bg-secondary');
            }, 100);

            break;

        default:
            return; // exit this handler for other keys
    }
});
