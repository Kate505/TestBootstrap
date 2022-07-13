var btnMenu = document.getElementById("btnMenu");
var menuCollapse = document.getElementById("navbarToggleExternalContent");
var body = document.getElementById("cuerpo");
var mUni = document.getElementById("menuUni");
var mCar = document.getElementById("menuCarreras");
var mTest = document.getElementById("menuTest");
var smUni = document.getElementById("smUni");
var smOpciones = document.getElementById("smOpciones");
var btnInge = document.getElementById("btnIngenierias");
var btnLic = document.getElementById("btnLicenciaturas");
var btnCT = document.getElementById("btnCT");
var smInge = document.getElementById("smIngenierias");
var smLic = document.getElementById("smLicenciaturas");
var smCT = document.getElementById("smCarrerasTecnicas");
var smTest = document.getElementById("smTest");

/* preloader*/
window.onload = function () {
    //myPreLoader();
}

/*Menu principal collapsable de arriba */
var bsCollapse = new bootstrap.Collapse(menuCollapse, {
    toggle: false
});


cuerpo.addEventListener("mouseover", function (event) {
    bsCollapse.hide();
}, false);


/*Submenús collapsables de la navbar */

/*Menu de las Universidades */
mUni.addEventListener("mouseover", function (event) {
    smOpciones.classList.remove("subMenuVisible");
    smOpciones.classList.add("subMenuOculto");

    smTest.classList.remove("subMenuVisible");
    smTest.classList.add("subMenuOculto");

    ocultarSMCarreras();

    smUni.classList.remove("subMenuOculto");
    smUni.classList.add("subMenuVisible");

    bsCollapse.show();
});

/*Menú de las Carreras */
mCar.addEventListener("mouseover", function (event) {
    smUni.classList.remove("subMenuVisible");
    smUni.classList.add("subMenuOculto");

    smTest.classList.remove("subMenuVisible");
    smTest.classList.add("subMenuOculto");

    smOpciones.classList.remove("subMenuOculto");
    smOpciones.classList.add("subMenuVisible");

    bsCollapse.show();
});

    btnInge.addEventListener("mouseover", function (event) {
        smInge.classList.remove("subMenuOculto");
        smInge.classList.add("subMenuVisible"); 
        
        smLic.classList.remove("subMenuVisible");
        smLic.classList.add("subMenuOculto"); 
        
        smCT.classList.remove("subMenuVisible");
        smCT.classList.add("subMenuOculto");  
    });

    btnLic.addEventListener("mouseover", function (event) {
        smLic.classList.remove("subMenuOculto");
        smLic.classList.add("subMenuVisible");  

        smInge.classList.remove("subMenuVisible");
        smInge.classList.add("subMenuOculto");  

        smCT.classList.remove("subMenuVisible");
        smCT.classList.add("subMenuOculto");  
    });

    btnCT.addEventListener("mouseover", function (event) {
        smCT.classList.remove("subMenuOculto");
        smCT.classList.add("subMenuVisible");          

        smInge.classList.remove("subMenuVisible");
        smInge.classList.add("subMenuOculto");  

        smLic.classList.remove("subMenuVisible");
        smLic.classList.add("subMenuOculto"); 
    });

/*Menú del Test Vocacional */
mTest.addEventListener("mouseover", function (event) {
    smUni.classList.remove("subMenuVisible");
    smUni.classList.add("subMenuOculto");

    smOpciones.classList.remove("subMenuVisible");
    smOpciones.classList.add("subMenuOculto");

    ocultarSMCarreras();

    smTest.classList.remove("subMenuOculto");
    smTest.classList.add("subMenuVisible");    

    bsCollapse.show();
});

function myPreLoader() {
    element.classList.add("hidden");
    $('#preloader').delay(100).fadeOut();

    setTimeout(() => {
        console.log("1 Segundo esperado")
        element.classList.remove("hidden");
    }, 1000);

    //element.classList.add("visible");
}

function ocultarSMCarreras(){
    smInge.classList.remove("subMenuVisible");
    smInge.classList.add("subMenuOculto");  
    
    smLic.classList.remove("subMenuVisible");
    smLic.classList.add("subMenuOculto"); 
    
    smCT.classList.remove("subMenuVisible");
    smCT.classList.add("subMenuOculto");  
}
