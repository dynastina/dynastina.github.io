$(document).ready(function () {
    $('#buy-shield').on('click', function () {
        buyShield();
    });

    $('#buy-hp').on('click', function () {
        buyHp();
    });
    
    $('#buy-restore-hp').on('click', function () {
        buyRestoreHp();
    });
    
    $('#buy-damage').on('click', function () {
        buyDamage();
    });

    $('#buy-critical').on('click', function () {
        buyCritical();
    });
});

function buyShield() {

    if (dyneCoin >= 10) {

        // purchase
        dyneCoin -= 10;
        $('#dyneCoin').html(dyneCoin);

        // up
        shield += 1;
        $('#buy-shield-text').html(shield);

        $('#dynecoin-info-text').html(dyneCoin);

    }
}

function buyHp() {

    if (dyneCoin >= 10) {

        // purchase
        dyneCoin -= 10;
        $('#dyneCoin').html(dyneCoin);

        // up
        hp += 1;
        $('#buy-hp-text').html(hp);

        //effect
        hpPlayer += 10;
        maxHp += 10;

        $('#hp-info-text').html(hpPlayer);
        $('#maxhp-info-text').html(maxHp);

        $('#dynecoin-info-text').html(dyneCoin);

        console.log(maxHp);
        $('#hpPlayer').css('width', hpPlayer + '%');
    }
}

function buyRestoreHp() {

    if (dyneCoin >= 10 && hpPlayer < maxHp) {

        // purchase
        dyneCoin -= 10;
        $('#dyneCoin').html(dyneCoin);

        //effect
        hpPlayer = maxHp;

        $('#hp-info-text').html(hpPlayer);
        $('#maxhp-info-text').html(maxHp);

        $('#dynecoin-info-text').html(dyneCoin);

        $('#hpPlayer').css('width', hpPlayer + '%');
    }
}

function buyDamage() {

    if (dyneCoin >= 10) {

        // purchase
        dyneCoin -= 10;
        $('#dyneCoin').html(dyneCoin);

        // up
        damagePlayer += 1;
        $('#buy-damage-text').html(damagePlayer);

        $('#dynecoin-info-text').html(dyneCoin);

    }
}

function buyCritical() {

    if (dyneCoin >= 10) {

        // purchase
        dyneCoin -= 10;
        $('#dyneCoin').html(dyneCoin);

        // up
        critical += 1;
        $('#buy-critical-text').html(critical);

        criticalRate -= 1;

        $('#dynecoin-info-text').html(dyneCoin);

    }
}
