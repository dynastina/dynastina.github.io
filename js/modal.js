function shop() {
    $('#infoModal').modal('hide');
    $('#helpModal').modal('hide');

    $('#shopModal').modal('toggle');
};

function info() {
    $('#shopModal').modal('hide');
    $('#helpModal').modal('hide');

    $('#infoModal').modal('toggle');
};

function help() {
    $('#infoModal').modal('hide');
    $('#shopModal').modal('hide');

    $('#helpModal').modal('toggle');
};