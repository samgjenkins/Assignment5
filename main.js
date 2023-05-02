$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    let d = data['craft']

    data['people'].forEach(function (d) {
        $('#spaceships').prepend('<img id="rocket" src="images/rocketOG.png">');
    });
});
