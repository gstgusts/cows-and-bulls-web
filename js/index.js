$(document).ready(function() {
    
    var game = new CowsAndBulls();
  
    $('#btnRestart').on('click', function() {
        game.restart();
        disableUi(false);
    });

    $('#btnOk').on('click', function() {
       let val = $('#txtInput').val();

       if(val === '' || parseInt(val) < 1000 || parseInt(val) > 9999) {
           return;
       }

       let result = game.guess(val);

       console.log(result);

       $('#guessResult').append('<tr><td>'+game.getGuessCount()+'</td><td>'+result.number+'</td><td>'+result.bulls+'</td><td>'+result.cows+'</td></tr>');

       if(game.isGameOver()) {
           disableUi(true);
       }

    });

    $('#txtInput').on('blur', function() {
        let val = $('#txtInput').val();

        if(val === '' || parseInt(val) < 1000 || parseInt(val) > 9999) {
            $('#txtInput').addClass('input-invalid');
        } else {
            $('#txtInput').removeClass('input-invalid');
        }
    });


});

function disableUi(status) {
    $('#btnOk').prop('disabled', status);
    $('#txtInput').prop('disabled', status);
}