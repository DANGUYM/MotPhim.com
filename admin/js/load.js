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

    //Load danh sách người dùng
    if (typeof dsusers === 'undefined') {
        $("#list-films").html("<tr><td colspan='5'>Lỗi. Không thể tải dữ liệu người dùng.</td></tr>");
    } else {
        let listusers = "";

        $.each(dsusers, function(index, user) {

            var permissionStr = "";
            if (user.permission == 1) {
                permissionStr = ' <span class="badge badge-outline-info">VIP</span>';
            } else if (user.permission == 2) {
                permissionStr = ' <span class="badge badge-outline-danger">ADMIN</span>';
            }

            var str = '<tr class="col-md-12 item-row" data-id="' + user.iduser + '" data-name="' + user.username + '">';
            str += '<td class="hidden-xs"><img class="preview-thumbnail" style="width: 50px;" src="' + user.avatar + '" alt="" data-bs-toggle="modal" data-bs-target="#preview-thumbnail"></td>';
            str += '<td><a href="edit-users.html">' + user.username + '</a>' + permissionStr + '</td>';
            str += '<td class="hidden-xs"><span>' + user.displayname + '</span></td>';
            str += '<td class="hidden-xs hidden-sm">' + user.email + '</td>';
            str += '<td class="text-end" style="width: 70px"> <div class="btn-group" rel="tooltip" data-bs-original-title="Quản lý"> <a class="btn btn-icon btn-sm dropdown-toggle btn-outline-warning" aria-expanded="true" data-bs-toggle="dropdown" data-bs-auto-close="true"></a> <ul class="dropdown-menu dropdown-menu-right animation-expand dropdown-2-col" role="menu"> <li class="dropdown-item"> <a href="edit-users.html">Sửa tài khoản</a> </li> <li class="dropdown-item"> <a href="#!">Gửi thông báo</a> </li> </ul> </div> <!--end .btn-group --> </td>';
            str += '</tr>';
            listusers += str;
        });

        $("#list-users").html(listusers);

    }

    //Load danh sách bình luận
    if (typeof dscmt === 'undefined' || typeof dsphim === 'undefined') {
        $("#list-films").html("<tr><td colspan='7'>Lỗi. Không thể tải dữ liệu bình luận.</td></tr>");
    } else {

        var listcmt = "";

        $.each(dscmt, function(index, cmt) {

            let users = dsusers.filter(function(p) {
                return p.iduser == cmt.id_user;
            });

            let phim = dsphim.filter(function(p) {
                return p.idphim = cmt.id_film;
            });

            var str = '<tr>';
            str += '<td class="text-center hidden-xs"><img class="rounded avatar-sm" data-bs-toggle="tooltip" data-bs-original-title="' + users[0].username + '" src="' + users[0].avatar + '" alt="" /> </td>';
            str += '<td class="break-word hidden-xs"> <span data-bs-toggle="tooltip" data-bs-original-title="' + users[0].iduser + '">' + users[0].displayname + '</span> </td>';
            str += '<td class="cm-content break-word"> ' + cmt.content + ' <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-original-title="' + cmt.ver + '"><i class="mdi mdi-cellphone text-info"></i></a> </td>';
            str += '<td class="text-center hidden-xs hidden-sm"> <a href="javascript:void(0);" class="moment-ago" data-date="' + cmt.date + '" data-bs-toggle="tooltip" data-placement="top" data-bs-original-title="' + cmt.date + '">' + formatRelativeTime(cmt.date) + "<br>" + formatTime(cmt.date) + '</a> </td>';
            str += '<td class="text-center hidden-xs"> <img src="' + (phim[0].thumbnail.includes("i.imgur.com") ? phim[0].thumbnail : ("../" + phim[0].thumbnail)) + '" style="height: 70px;"> </a> </td>';
            str += '<td class="text-center"> <div class="form-check form-switch form-switch-custom form-switch-success text-center"> <input class="hide-comment form-check-input" type="checkbox" data-mod="true" data-item-id="' + cmt.id + '" data-item-hide="0" data-item-type="c" role="switch"> </div></td>';
            str += '<td class="text-end"> <div class="btn-group"> <a class="btn btn-icon btn-sm btn-outline-info dropdown-toggle" aria-expanded="true" data-bs-toggle="dropdown"></a> <ul class="dropdown-menu" role="menu"> <li class="dropdown-item"><a href="#m-cmt" data-bs-toggle="modal" class="reply visible-xs"><i class="bx bx-reply"></i>&nbsp; Trả lời</a></li> <li class="dropdown-item"> <a href="#m-cmt" data-bs-toggle="modal" class="edit-comment" data-item-id="1203944"><i class="bx bx-edit "></i>&nbsp; Chỉnh sửa</a></li> <li class="dropdown-divider"></li> <li class="dropdown-item"><a href="#!"><i class="bx bx-film"></i>&nbsp; Tìm phim</a> </li> <li class="dropdown-divider"></li> <li class="dropdown-item"><a href="#m-ban-user" data-bs-toggle="modal" class="ban-user"><i class="bx bx-lock"></i>&nbsp; Ban nick</a></li></ul> </div> </td>';
            str += '</tr>';
            listcmt += str;
        });

        $("#list-comment").html(listcmt);

        var tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

    }

    //Đếm ký tự trong create films
    $('.ql-editor').on('input', function() {
        var text = $(this).text();
        var characterCount = text.replace(/<[^>]+>/g, '').length;
        $('#word-text').html(characterCount);
    });



});

function logout() {
    localStorage.removeItem("userlogin");
    window.location.href = "../index.html";
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

//Is Movie in Films Create
$('input[name="is_movie"]').click(function() {
    if (this.checked) {
        $('#time-type').html('phút');
        $('input[name="time_type"]').val('phút');
    } else {
        $('#time-type').html('tập');
        $('input[name="time_type"]').val('tập');
    }
});

//Reason Comments List
$('input[name="reason"]').click(function() {
    "another" == $('input[name="reason"]:checked').val() ? $('input[name="another-reason"]').removeAttr("disabled") : $('input[name="another-reason"]').attr("disabled", "disabled");
});

// $('#word-count').on('input', function() {
//     var charCount = $(this).val().length;
//     $('#word-text').html(charCount);
// });

$('#btn-films').click(function() {
    var description = $("#word-count").val();
    var genres = $('select[name="genres[]"]').val();
    var title = $('input[name="name"]').val();
    var title_vi = $('input[name="name_vi"]').val();
    var countrys = $('select[name="countrys[]"]').val();

    if (title.trim().length == 0) {
        notifyWhat("e", "Bạn chưa nhập tên phim");
        return;
    }

    if (title_vi.trim().length == 0) {
        notifyWhat("e", "Bạn chưa nhập tên khác");
        return;
    }

    if (genres.length <= 0) {
        notifyWhat("e", "Bạn chưa chọn thể nào");
        return;
    }

    if (countrys.length <= 0) {
        notifyWhat("e", "Bạn chưa chọn quốc gia nào");
        return;
    }

    if (description.length < 160) {
        notifyWhat("e", "Nội dung phải >= 160 ký tự");
        return;
    }

    notifyWhat("s", "Tạo phim thành công!");
});

function formatRelativeTime(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (seconds < 60) {
        return 'Vừa xong';
    } else if (minutes < 60) {
        return `${minutes} phút trước`;
    } else if (hours < 24) {
        return `${hours} giờ trước`;
    } else if (days < 30) {
        return `${days} ngày trước`;
    } else if (months < 12) {
        return `${months} tháng trước`;
    } else {
        return `${years} năm trước`;
    }
}

if (!(localStorage.hasOwnProperty("userlogin"))) {
    window.location.href = "../index.html";
}

function notifyWhat(type, text, seconds, position) {
    if (type == 's') {
        type = 'bg-success';
    } else if (type == 'e') {
        type = 'bg-danger';
        if (!text) {
            text = 'Lỗi nha!';
        }
    } else if (type == 'w') {
        type = 'bg-warning';
    }
    if (!seconds) {
        seconds = 3;
    }
    if (!position) {
        position = 'right';
    }
    Toastify({ text: text, className: type, duration: seconds * 1000, position: position }).showToast();
}