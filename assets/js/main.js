let slideIndex = 0;
let theme;
var user_data = document.getElementById('user-avatar');
var menu_mobile = document.getElementById('menu-mobile');
var remove_user = document.getElementById('remove-user');
var removie_menu = document.getElementById('remove-menu');
var navbar_user = document.getElementById('navbar-user');
var navbar_menu = document.getElementById('navbar-menu');
var change_theme = document.getElementById('change-theme');

// document.cookie = "loginCookie=KhangDora; max-age=" + 60 * 60 * 24 * 7;
// var loginCookie = document.cookie.split(';').find(cookie => cookie.includes('loginCookie='));
// Thông tin tài khoản
// tài khoản 1 usernormal / 123456 / tài khoản thường
// tài khoản 2 uservip / 123456 / tài khoản vip
// tài khoản 3 admin / 123456 / tài khoản quản trị

if (localStorage.hasOwnProperty("userlogin")) {

    var userloginString = localStorage.getItem("userlogin");
    var userlogin = JSON.parse(userloginString);

    document.getElementById("userpoint").innerHTML = Math.round(userlogin.coin).toLocaleString() + " KIM CƯƠNG";
    document.getElementById("username").innerHTML = userlogin.displayname;
    document.getElementById("useravatar").src = userlogin.avatar;
    if (userlogin.permission == 0) {
        document.getElementById("useravatar").style.borderColor = "#ccc";
    } else if (userlogin.permission == 1) {
        noads();
    } else if (userlogin.permission == 2) {
        document.getElementById("useravatar").style.borderColor = "#d60000";
        document.getElementById("admin").style.display = "block";
        noads();
    }

} else {
    document.getElementById("navbar-user").innerHTML = '<div class="profile"> <img class="navbar-user-avatar" src="./assets/img/user.png"/> <div class="navbar-user-name">Chào mừng bạn!</div> <div class="navbar-user-times" id="remove-user" onclick="removeuser()"><i class="fa fa-times"></i></div> </div> <div class="navbar-tabs"> <div class="navbar-tab-item actived" id="login" onclick="login();">Đăng nhập</div> <div class="navbar-tab-item" id="signup" onclick="signup();">Đăng ký</div> </div> <div class="navbar-content" id="content-login"> <div class="navbar-content-item"> <label class="navbar-lbl">Tên tài khoản</label> <input class="navbar-input" type="text" name="username" id="username" /> <i class="fa fa-user-o"></i> <span class="navbar-tip">từ 3 - 20 ký tự</span> </div> <div class="navbar-content-item"> <label class="navbar-lbl">Mật khẩu</label> <input class="navbar-input" type="password" name="password" id="password" /> <i class="fa fa-lock"></i> <span class="navbar-tip">từ 6 - 30 kí tự</span> </div> <div class="navbar-content-item"> <label class="navbar-lbl"><input type="checkbox" checked/> Ghi nhớ</label> <a href="" class="forgot-password">Quên mật khẩu?</a> </div> <div class="navbar-content-item" id="result"></div> <div class="navbar-content-item"> <button class="navbar-btn" name="login" onclick="submitlogin();">Đăng nhập</button> </div> <div class="navbar-content-item"> <button class="navbar-btn facebook" name="facebook">Đăng nhập với Facebook</button> </div> </div> <div class="navbar-content" id="content-signup"> <div class="navbar-content-item"> <label class="navbar-lbl">Tên tài khoản</label> <input class="navbar-input" type="text" name="username" id="username" /> <i class="fa fa-user-o"></i> <span class="navbar-tip">từ 3 - 20 ký tự</span> </div> <div class="navbar-content-item"> <label class="navbar-lbl">Mật khẩu</label> <input class="navbar-input" type="password" name="password" id="password" /> <i class="fa fa-lock"></i> <span class="navbar-tip">từ 6 - 30 kí tự</span> </div> <div class="navbar-content-item"> <label class="navbar-lbl">Nhập lại mật khẩu</label> <input class="navbar-input" type="password" name="password2" id="password2" /> <i class="fa fa-lock"></i> </div> <div class="navbar-content-item"> <label class="navbar-lbl">Tên hiển thị</label> <input class="navbar-input" type="text" name="name" id="name" /> <i class="fa fa-comments"></i> <span class="navbar-tip">từ 6 - 30 kí tự</span> </div> <div class="navbar-content-item"> <label class="navbar-lbl">Email</label> <input class="navbar-input" type="email" name="email" id="email" /> <i class="fa fa-envelope-o"></i> </div> <div class="navbar-content-item"> <button class="navbar-btn" name="login">Đăng ký</button> </div> </div>';
}

function noads() {
    var ads = document.querySelectorAll("#ads");
    for (var i = 0; i < ads.length; i++) {
        ads[i].style.display = "none";
    }
}

function logout() {
    localStorage.removeItem("userlogin");
    location.reload();
}

function submitlogin() {
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    if (typeof dsusers !== 'undefined') {
        document.getElementById("result").innerHTML = "Lỗi kết nối cơ sở dữ liệu.";
    }

    $.each(dsusers, function(index, user) {
        if (user.username === username && user.password === password) {
            let userlogin = {
                id: user.id,
                username: user.username,
                displayname: user.displayname,
                password: user.password,
                coin: user.coin,
                avatar: user.avatar,
                permission: user.permission
            }
            localStorage.setItem("userlogin", JSON.stringify(userlogin));
            location.reload();
            return;
        } else {
            document.getElementById("result").innerHTML = "Tên đăng nhập hoặc mật khẩu không chính xác.";
        }
    })

}

if (localStorage.hasOwnProperty("theme")) {
    theme = parseInt(localStorage.getItem("theme"));
    if (theme == 1)
        document.getElementById("dark").setAttribute("href", "assets/css/dark.css");
} else {
    theme = 0;
}

function search() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("q");
    document.getElementById("result-search").innerHTML = q;
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow-items");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 4000);

}

function signup() {
    document.getElementById("content-login").style.display = "none";
    document.getElementById("content-signup").style.display = "block";
    document.getElementById("login").classList.remove("actived");
    document.getElementById("signup").classList.add("actived");
}

function login() {
    document.getElementById("content-login").style.display = "block";
    document.getElementById("content-signup").style.display = "none";
    document.getElementById("login").classList.add("actived");
    document.getElementById("signup").classList.remove("actived");
}

document.getElementById("actionmenu").addEventListener('click', function() {

    if (navbar_menu.style.left === "-300px") {
        navbar_menu.style.left = "0px";
        navbar_user.style.right = "-300px";
        document.getElementById("tool-mobile").click();
    } else {
        navbar_menu.style.left = "-300px";
    }

});

menu_mobile.addEventListener('click', function() {

    if (navbar_menu.style.left === "-300px") {
        navbar_menu.style.left = "0px";
        navbar_user.style.right = "-300px";
    } else {
        navbar_menu.style.left = "-300px";
    }

});

document.getElementById("actionuser").addEventListener('click', function() {

    if (navbar_user.style.right === "-300px") {
        navbar_user.style.right = "0px";
        navbar_menu.style.left = "-300px";
        document.getElementById("tool-mobile").click();
    } else {
        navbar_user.style.right = "-300px";
    }

});

user_data.addEventListener('click', function() {

    if (navbar_user.style.right === "-300px") {
        navbar_user.style.right = "0px";
        navbar_menu.style.left = "-300px";
    } else {
        navbar_user.style.right = "-300px";
    }

});

document.getElementById("tool-mobile").addEventListener('click', function() {
    var floating = document.getElementById("floating");
    if (floating.classList.contains("actived")) {
        floating.classList.remove("actived");
        document.getElementById("tool-mobile").classList.remove("actived");
        document.getElementById("tool-icon").classList.remove("fa-times");
        document.getElementById("tool-icon").classList.add("fa-bullseye");
        document.getElementById("ontop").classList.remove("action-ontop-item");
        document.getElementById("actionuser").classList.remove("action-user-item");
        document.getElementById("actionmenu").classList.remove("action-menu-item");
        document.getElementById("actionhome").classList.remove("action-home-item");
    } else {
        floating.classList.add("actived");
        document.getElementById("tool-mobile").classList.add("actived");
        document.getElementById("tool-icon").classList.add("fa-times");
        document.getElementById("tool-icon").classList.remove("fa-bullseye");
        document.getElementById("ontop").classList.add("action-ontop-item");
        document.getElementById("actionuser").classList.add("action-user-item");
        document.getElementById("actionmenu").classList.add("action-menu-item");
        document.getElementById("actionhome").classList.add("action-home-item");
    }

})

document.getElementById("ontop").addEventListener('click', function() {
    const currentPosition = window.pageYOffset;
    const scrollStep = -currentPosition / 20;
    const scrollAnimation = setInterval(function() {
        window.scrollBy(0, scrollStep);
        if (window.pageYOffset <= 0) {
            clearInterval(scrollAnimation);
        }
    }, 15);
    document.getElementById("tool-mobile").click();
});

document.getElementById("actionhome").addEventListener('click', function() {
    window.location.assign("./index.html");
})

// if(loginCookie) {
//     var cookieValue = myCookie.split('=')[1];
//     var user_name = document.getElementsByClassName("navbar-user-name").innnerHTML(cookieValue);
// }

removie_menu.addEventListener('click', function() {
    navbar_menu.style.left = "-300px";
});

function removeuser() {
    navbar_user.style.right = "-300px";
}

change_theme.addEventListener('click', function() {

    if (theme == 0) {
        document.getElementById("dark").setAttribute("href", "assets/css/dark.css");
        theme++;
    } else {
        document.getElementById("dark").setAttribute("href", "");
        theme--;
    }

    localStorage.setItem("theme", theme);
});