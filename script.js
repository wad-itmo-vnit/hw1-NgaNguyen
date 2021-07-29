let model = document.getElementById("modal01");
let slides = document.getElementsByClassName("mySlides");
let img01 = document.getElementById("img01")

let slideIndex = 0;
    
function showCurrentImg(n) {
    model.style.display = "block";
    showSlide(n);
    
}

function showSlide(n){
    img01.removeAttribute('src');
    slideIndex = n;
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    img01.src = slides[slideIndex].firstElementChild.src;
    
    
    
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    model.style.display = "none";
}

// Next/previous controls
function plusSlides(i) {
    showSlide(slideIndex += i);
}

