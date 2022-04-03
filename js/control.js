$(document).on('keydown', function (e) {

    switch (e.which) {
        case 37: // left
            left();
            break;

        case 38: // up
            up();
            break;

        case 39: // right
            right();
            break;

        case 40: // down
            down();
            break;

        case 32: // spacebar
            hit();
            break;

        case 66: // B (shop)
            shop();
            break;

        case 73: // I (info)
            info();
            break;

        case 72: // H (help)
            help();
            break;

        default:
            return; // exit this handler for other keys
    }
});
