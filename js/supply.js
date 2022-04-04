function health() {

    // random place
    xHealth = Math.floor((Math.random() * width) + 1);
    yHealth = Math.floor((Math.random() * height) + 1);

    $(`.td-${xHealth}${yHealth}`).addClass('bg-success health');

    setTimeout(function () {
        $('.td').removeClass('bg-success health');

        xHealth = 0;
        yHealth = 0;
    }, 10000);
}
