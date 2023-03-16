let slideIndex = 0;
showSlides();
var user_data = document.getElementById('user-avatar');
var remove_user = document.getElementById('remove-user');

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("slideshow-items");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  
    
    slides[slideIndex-1].style.display = "block";  

    setTimeout(showSlides, 4000);

}

user_data.addEventListener('click', function() {

    var x = document.getElementById("navbar-user");

    if(x.style.width === "0px" || x.style.display === "none") {
        x.style.width = "310px";
    }else {
        x.style.width = "0px";
    }

});

remove_user.addEventListener('click', function() {
    document.getElementById("navbar-user").style.width = "0px";
});
