$(document).ready(function() {

    //Load dữ liệu
    $('.counter-value').eq(1).attr('data-target', typeof dsphim !== 'undefined' ? dsphim.length : 100);
    $('.counter-value').eq(2).attr('data-target', typeof dsphim !== 'undefined' ? dsusers.length : 100);
    $('.counter-value').eq(3).attr('data-target', typeof dsphim !== 'undefined' ? dscmt.length : 100);

    //Load html
    var userloginString = localStorage.getItem("userlogin");
    var userlogin = JSON.parse(userloginString);

    $("#username").html(userlogin.username);
    $("#useravatar").attr("src", userlogin.avatar);
    $("#displayname").html("Xin chào " + userlogin.displayname);

    if (userlogin.permission != 2) {
        window.location.href = "../index.html";
    }


});

function logout() {
    localStorage.removeItem("userlogin");
    window.location.href = "../index.html";
}

if (!(localStorage.hasOwnProperty("userlogin"))) {
    window.location.href = "../index.html";
}