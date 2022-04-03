function moveEnemy() {

    var randomX = Math.floor((Math.random() * 3) + 1);
    var randomY = Math.floor((Math.random() * 3) + 1);

    if (randomX == 1) {
        xEnemy++;
    } else if (randomX == 2) {
        xEnemy--;
    }

    if (randomY == 1) {
        yEnemy++;
    } else if (randomY == 2) {
        yEnemy--;
    }

    //teleport
    if (yEnemy < 1) {
        yEnemy = height;
    }
    if (yEnemy > height) {
        yEnemy = 1;
    }
    if (xEnemy > width) {
        xEnemy = 1;
        //y++;
    }
    if (xEnemy < 1) {
        xEnemy = width;
    }

    hitEnemy();

    if (xEnemy == x && yEnemy == y) {
        moveEnemy();
    }

    $('.td').removeClass('bg-primary enemy');
    $('.td').removeClass('bg-secondary');
    $(`.td-${xEnemy}${yEnemy}`).addClass('bg-primary enemy');

}

function hitEnemy() {
    var left = {
        xEnemy: xEnemy - 1,
        yEnemy: yEnemy,
    };

    var right = {
        xEnemy: xEnemy + 1,
        yEnemy: yEnemy,
    };

    var up = {
        xEnemy: xEnemy,
        yEnemy: yEnemy - 1,
    };

    var down = {
        xEnemy: xEnemy,
        yEnemy: yEnemy + 1,
    };


    if ((left.xEnemy == x && left.yEnemy == y) || (right.xEnemy == x && right.yEnemy == y) || (up.xEnemy == x && up.yEnemy == y) || (down.xEnemy == x && down.yEnemy == y)) {

        $('.player').removeClass('bg-danger');
        $('.player').addClass('bg-secondary');

        randomHitEnemy = Math.floor((Math.random() * 10) + 1);

        if(randomHitEnemy == 1){
            damageEnemy = 10 + damageEnemyUp;
            damageEnemy -= shield;

            test = 1;

            if(damageEnemy < 0){
                damageEnemy = 3;
            }

            hpPlayer -= damageEnemy;
            
        }else if(randomHitEnemy >= 2 && randomHitEnemy <= 5){
            damageEnemy = 8 + damageEnemyUp;
            damageEnemy -= shield;

            test = 2;

            if(damageEnemy < 0){
                damageEnemy = 3;
            }

            hpPlayer -= damageEnemy;

        }else if(randomHitEnemy >= 6 && randomHitEnemy <= 8){
            damageEnemy = 7 + damageEnemyUp;
            damageEnemy -= shield;

            test = 3;

            if(damageEnemy < 0){
                damageEnemy = 2;
            }

            hpPlayer -= damageEnemy;

        }else if(randomHitEnemy >= 9 && randomHitEnemy <= 10){
            damageEnemy = 6 + damageEnemyUp;
            damageEnemy -= shield;

            test = 4;

            if(damageEnemy < 1){
                damageEnemy = 0;
            }

            hpPlayer -= damageEnemy;

        }

        $('#hpPlayer').css('width', hpPlayer + '%');
        $('#hp-info-text').html(hpPlayer);

        if (hpPlayer < 1) {

            alert('Game Over!');
            spawn();
            spawnEnemy();
        }

        setTimeout(function () {
            $('.player').removeClass('bg-secondary');
            $('.player').addClass('bg-danger');

        }, 200);


    }
}
