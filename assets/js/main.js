let slideIndex = 0;
let theme;
var user_data = document.getElementById('user-avatar');
var menu_mobile = document.getElementById('menu-mobile');
var remove_user = document.getElementById('remove-user');
var navbar_user = document.getElementById('navbar-user');
var navbar_menu = document.getElementById('navbar-menu');
var change_theme = document.getElementById('change-theme');

// document.cookie = "loginCookie=KhangDora; max-age=" + 60 * 60 * 24 * 7;
// var loginCookie = document.cookie.split(';').find(cookie => cookie.includes('loginCookie='));
// Thông tin tài khoản
// tài khoản 1 usernormal / 123456 / tài khoản thường
// tài khoản 2 uservip / 123456 / tài khoản vip
// tài khoản 3 admin / 123456 / tài khoản quản trị

if(localStorage.hasOwnProperty("username")) {
    
}else {
    document.getElementById("navbar-user").innerHTML = "";
}

if(localStorage.hasOwnProperty("theme")) {
    theme = parseInt(localStorage.getItem("theme"));
    if(theme==1) 
        document.getElementById("dark").setAttribute("href","assets/css/dark.css");
}else {
    theme = 0;
}

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

menu_mobile.addEventListener('click', function() {

    if(navbar_menu.style.width === "0px" || navbar_menu.style.display === "none") {
        navbar_menu.style.width = "300px";
        navbar_menu.style.visibility = "unset";
    }else {
        navbar_menu.style.visibility = "hidden";
        navbar_menu.style.width = "0px";
    }

});

user_data.addEventListener('click', function() {

    if(navbar_user.style.width === "0px" || navbar_user.style.display === "none") {
        navbar_user.style.width = "300px";
    }else {
        navbar_user.style.width = "0px";
    }

});

// if(loginCookie) {
//     var cookieValue = myCookie.split('=')[1];
//     var user_name = document.getElementsByClassName("navbar-user-name").innnerHTML(cookieValue);
// }

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

    localStorage.setItem("theme", theme);
});
