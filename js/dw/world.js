$(document).ready(function () {

    generateWorld();
    spawn();
    spawnEnemy();

})

function generateWorld() {

    var height = 10;
    var width = 30;

    var world = ``;

    for (var i = 1; i <= height; i++) {
        world += `<tr>`;
        for (var ii = 1; ii <= width; ii++) {
            world += `<td class="td td-${ii}${i}"></td>`
        }
        world += `</tr>`;
    }

    $('.dyne-table').html(world);

}

function spawn() {

    // restore health
    hpPlayer = 100;
    $('#hpPlayer').css('width', hpPlayer + '%');

    // restore kill
    killPlayer = 0;
    $('#killPlayer').html(killPlayer);

    // restore shop
    shield = 0;
    hp = 0;
    maxHp = 100;
    damagePlayer = 0;
    critical = 0;

    criticalRate = 10;

    $('#buy-shield-text').html(shield);
    $('#buy-hp-text').html(hp);
    $('#buy-damage-text').html(damagePlayer);
    $('#buy-critical-text').html(critical);

    // restore coin
    dyneCoin = 10;
    $('#dyneCoin').html(dyneCoin);

    // restore info
    $('#hp-info-text').html(hpPlayer);
    $('#maxhp-info-text').html(maxHp);
    $('#kill-info-text').html(killPlayer);
    $('#dynecoin-info-text').html(dyneCoin);


    // position
    $('.td').removeClass('bg-danger player bg-secondary');
    $(`.td-${x}${y}`).addClass('bg-danger player');
}

function spawnEnemy() {

    $('.td').removeClass('enemy bg-secondary');
    $('.td').removeClass(modeEnemy);

    // restore health
    hpEnemy = 100;
    $('#hpEnemy').css('width', hpEnemy + '%');

    $('#hpenemy-info-text').html(hpEnemy);

    if (killPlayer % 2 == 0) {

        damageEnemyUp++;

    }

    // random place
    xEnemy = Math.floor((Math.random() * width) + 1);
    yEnemy = Math.floor((Math.random() * height) + 1);

    $(`.td-${xEnemy}${yEnemy}`).addClass('enemy');
    $(`.td-${xEnemy}${yEnemy}`).addClass(modeEnemy);

}