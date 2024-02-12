


setInterval(function () {





    var countDownDate = new Date("oct 16, 2022 12:00:00").getTime();
    var now = new Date().getTime();

    var diff = countDownDate - now;

    var days = Math.floor(diff / (24 * 60 * 60 * 1000));
    var hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
    var min = Math.floor((diff % (60 * 60 * 1000)) / (1000 * 60));
    var seconds = Math.floor((diff % (60 * 1000)) / (1000));

    document.getElementById("time").innerHTML = (days + "D " + hours + "H " + min + "M " + seconds + "s");


}, 1000)