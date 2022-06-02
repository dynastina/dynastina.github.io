function move() {
    $('.td').removeClass('bg-danger player');
    $('.td').removeClass('bg-secondary');
    $(`.td-${x}${y}`).addClass('bg-danger player');

    // health
    if (xHealth == x && yHealth == y) {

        randomHealth = Math.floor((Math.random() * 12) + 1);

        if (randomHealth == 1) {
            hpPlayer += 60;
            if (hpPlayer > maxHp) {
                hpPlayer = maxHp;
            }

        } else if (randomHealth >= 2 && randomHealth <= 5) {
            hpPlayer += 55;

            if (hpPlayer > maxHp) {
                hpPlayer = maxHp;
            }

        } else if (randomHealth >= 6 && randomHealth <= 8) {
            hpPlayer += 45;

            if (hpPlayer > maxHp) {
                hpPlayer = maxHp;
            }

        } else if (randomHealth >= 9 && randomHealth <= 12) {
            hpPlayer += 40;

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

        $('.enemy').removeClass(modeEnemy);
        $('.enemy').addClass('bg-secondary');

        randomHitPlayer = Math.floor((Math.random() * criticalRate) + 1);

        if (randomHitEnemy == 1) {

            hpEnemy -= (12 + damagePlayer);

        } else if (randomHitEnemy >= 2 && randomHitEnemy < 3) {

            hpEnemy -= (11 + damagePlayer);

        } else if (randomHitEnemy >= 3 && randomHitEnemy <= 7) {

            hpEnemy -= (10 + damagePlayer);

        } else if (randomHitEnemy >= 8 && randomHitEnemy <= 10) {

            hpEnemy -= (9 + damagePlayer);

        } else {
            hpEnemy -= (15 + damagePlayer);
        }

        $('#hpEnemy').css('width', hpEnemy + '%');

        $('#hpenemy-info-text').html(hpEnemy);

        if (hpEnemy < 1) {

            killPlayer++;

            if(killPlayer >= 5){
                modeEnemy = 'bg-dark';
            }

            dyneCoin += 10;

            $('#killPlayer').html(killPlayer);
            $('#dyneCoin').html(dyneCoin);

            spawnEnemy();
            health();
        }

        setTimeout(function () {
            $('.enemy').removeClass('bg-secondary');
            $('.enemy').addClass(modeEnemy);

            moveEnemy();

        }, 100);


    }
}