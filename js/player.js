function move() {
    $('.td').removeClass('bg-danger player');
    $('.td').removeClass('bg-secondary');
    $(`.td-${x}${y}`).addClass('bg-danger player');

    // health
    if (xHealth == x && yHealth == y) {

        randomHitEnemy = Math.floor((Math.random() * 12) + 1);

        if (randomHitEnemy == 1) {
            hpPlayer += 60;
            if (hpPlayer > maxHp) {
                hpPlayer = maxHp;
            }

        } else if (randomHitEnemy >= 2 && randomHitEnemy <= 5) {
            hpPlayer += 50;

            if (hpPlayer > maxHp) {
                hpPlayer = maxHp;
            }

        } else if (randomHitEnemy >= 6 && randomHitEnemy <= 8) {
            hpPlayer += 40;

            if (hpPlayer > maxHp) {
                hpPlayer = maxHp;
            }

        } else if (randomHitEnemy >= 9 && randomHitEnemy <= 12) {
            hpPlayer += 35;

            if (hpPlayer > maxHp) {
                hpPlayer = maxHp;
            }

        }

        $('#hpPlayer').css('width', hpPlayer + '%');
        $('#hp-info-text').html(hpPlayer);
        $('.td').removeClass('bg-success health');
    }
}

function right() {
    x++;

    if (x > width) {
        x = 1;
        //y++;
    }

    move();
    moveEnemy();

    //if(y == 11){
    //y = 1;
    //}

    //setTimeout(function() {
    //  right();
    //}, 100);

}

function left() {

    x--;

    if (x < 1) {
        x = width;
    }

    move();
    moveEnemy();

}

function down() {

    y++;

    if (y > height) {
        y = 1;
    }

    move();
    moveEnemy();

}

function up() {

    y--;

    if (y < 1) {
        y = height;
    }

    move();
    moveEnemy();
}

function hit() {

    var left = {
        x: x - 1,
        y: y,
    };

    var right = {
        x: x + 1,
        y: y,
    };

    var up = {
        x: x,
        y: y - 1,
    };

    var down = {
        x: x,
        y: y + 1,
    };


    if ((left.x == xEnemy && left.y == yEnemy) || (right.x == xEnemy && right.y == yEnemy) || (up.x == xEnemy && up.y == yEnemy) || (down.x == xEnemy && down.y == yEnemy)) {

        $('.enemy').removeClass('bg-primary');
        $('.enemy').addClass('bg-secondary');

        hpEnemy -= (10 + damagePlayer);

        $('#hpEnemy').css('width', hpEnemy + '%');

        $('#hpenemy-info-text').html(hpEnemy);

        if (hpEnemy < 1) {

            killPlayer++;

            dyneCoin += 10;

            $('#killPlayer').html(killPlayer);
            $('#dyneCoin').html(dyneCoin);

            spawnEnemy();
            health();
        }

        setTimeout(function () {
            $('.enemy').removeClass('bg-secondary');
            $('.enemy').addClass('bg-primary');

            moveEnemy();

        }, 100);


    }
}
