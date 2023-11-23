
document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("myButton");


    myButton.addEventListener("click", function () {
        // Selektujemo div po ID-ju
        var myResult = document.getElementById("myResult");

        // Postavljamo sadržaj div-a
        myResult.innerHTML = '<p>Ovo je dinamički dodat tekst kada je gumb kliknut!</p>';
    });
});