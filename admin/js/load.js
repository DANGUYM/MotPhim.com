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

    //Load danh sách phim
    if (typeof dsphim === 'undefined' || typeof dsvideo === 'undefined') {
        $("#list-films").html("<tr><td colspan='5'>Lỗi. Không thể tải dữ liệu phim.</td></tr>");
    } else {
        let listphim = "";

        $.each(dsphim, function(index, phim) {
            var tap;
            var episode = 1;
            if (phim.movie == 1) {
                tap = '<i class="mdi mdi-check-bold text-success"></i>';
            } else {
                let filteredPhim = dsvideo.filter(function(p) {
                    return p.idphim == phim.idphim;
                });
                if (filteredPhim.length > 0) {
                    episode = filteredPhim[0].idvideo;
                }
                if (filteredPhim.length == phim.sotap) {
                    tap = '<i class="mdi mdi-check-bold text-success"></i>';
                } else {
                    tap = filteredPhim.length + "/ " + phim.sotap;
                }
            }
            var str = '<tr class="col-md-12 item-row" data-id="' + phim.idphim + '" data-name="' + phim.tenphim + '">';
            str += '<td class="hidden-xs"><img class="preview-thumbnail" style="height: 65px;" src="' + (phim.thumbnail.includes("i.imgur.com") ? phim.thumbnail : ("../" + phim.thumbnail)) + '" alt="" data-bs-toggle="modal" data-bs-target="#preview-thumbnail"></td>';
            str += '<td><a href="edit-films.html">' + phim.tenphim + '</a></td>';
            str += '<td class="text-end hidden-xs"><span>' + Math.round(phim.luotxem).toLocaleString() + '</span></td>';
            str += '<td class="text-center hidden-xs hidden-sm">' + tap + '</td>';
            str += '<td class="text-end" style="width: 70px"> <div class="btn-group" rel="tooltip" data-bs-original-title="Quản lý"> <a href="../xemphim.html" onclick="setPhim(' + phim.idphim + ',' + episode + ')" target="_blank" class="btn btn-icon btn-sm btn-outline-info" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="Ra giao diện user"> <i class="mdi mdi-link-variant"></i> </a> <a class="btn btn-icon btn-sm dropdown-toggle btn-outline-warning" aria-expanded="true" data-bs-toggle="dropdown" data-bs-auto-close="true"></a> <ul class="dropdown-menu dropdown-menu-right animation-expand dropdown-2-col" role="menu"> <li class="dropdown-item"> <a href="episodes.html" target="_blank">Danh sách tập</a> </li> <li class="dropdown-item"> <a href="create-episode.html">Thêm tập</a> </li> <li class="dropdown-divider"></li> <li class="dropdown-item"> <a class="upload-img" data-bs-toggle="modal" data-item-name="Majutsushi Orphen Hagure Tabi" href="#m-upload-img" data-bs-target=".m-upload-img" data-item-id="6374" data-upload-type="p">Thêm hình</a> </li> </ul> </div> <!--end .btn-group --> </td>';
            str += '</tr>';
            listphim += str;
        });
        $("#list-films").html(listphim);
    }

});

function logout() {
    localStorage.removeItem("userlogin");
    window.location.href = "../index.html";
}

if (!(localStorage.hasOwnProperty("userlogin"))) {
    window.location.href = "../index.html";
}