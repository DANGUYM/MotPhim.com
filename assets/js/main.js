let slideIndex = 0;
let theme = 0;
var user_data = document.getElementById('user-avatar');
var remove_user = document.getElementById('remove-user');
var navbar_user = document.getElementById('navbar-user');
var change_theme = document.getElementById('change-theme');

document.cookie = "loginCookie=KhangDora; max-age=" + 60 * 60 * 24 * 7;

var loginCookie = document.cookie.split(';').find(cookie => cookie.includes('loginCookie='));

function search() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("q");
    document.getElementById("result-search").innerHTML = q;
}

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

    if(navbar_user.style.width === "0px" || navbar_user.style.display === "none") {
        navbar_user.style.width = "310px";
    }else {
        navbar_user.style.width = "0px";
    }

});

if(loginCookie) {
    var cookieValue = myCookie.split('=')[1];
    var user_name = document.getElementsByClassName("navbar-user-name").innnerHTML(cookieValue);
}

remove_user.addEventListener('click', function() {
    navbar_user.style.width = "0px";
});

change_theme.addEventListener('click', function() {

    if(theme == 0) {
        document.getElementById("dark").setAttribute("href","assets/css/dark.css");
        theme++;

    }else {

        document.getElementById("dark").setAttribute("href","");
        theme--;

    }
});
