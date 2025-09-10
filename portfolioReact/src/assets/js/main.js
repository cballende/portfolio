
const API_URL_DATA = 'assets/data/';
const API_URL_IMG = 'assets/images/';
const API_URL_IMG_P = 'past/';
const API_URL_IMG_A = 'working/';
const API_URL_IMG_N = 'next/';

/* Script to open and close sidebar */
function navWideOpen() {
    document.getElementById("menuSidebar").style.display = "block";
    document.getElementById("main-overlay").style.display = "block";
}
 
function navWideClose() {
    document.getElementById("menuSidebar").style.display = "none";
    document.getElementById("main-overlay").style.display = "none";
}


/***************************************************
        RENDERING FROM SERVER DATA
****************************************************/


document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("close-nav").addEventListener(
      "click", navWideClose
    );
    document.getElementById("open-nav").addEventListener(
      "click", navWideOpen
    );
    document.getElementById("main-overlay").addEventListener(
      "click", navWideClose
    );
});


