var element = document.getElementById("cuerpo");
var element = document.getElementById("btnMenu");

window.onload = function(){
    element.classList.add("custom-toggler:hover");
    myPreLoader();
}

function myPreLoader(){
    element.classList.add("hidden");
    $('#preloader').delay(100).fadeOut();

    setTimeout(() => {
        console.log("1 Segundo esperado")
        element.classList.remove("hidden");
      }, 1000);

    //element.classList.add("visible");
}
