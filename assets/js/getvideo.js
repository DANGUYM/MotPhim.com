$(document).ready(function() {

    let dsphim = JSON.parse(localStorage.getItem("dsphim"))
    let dsvideo = JSON.parse(localStorage.getItem("dsvideo"))
    let idphim = localStorage.getItem("idphim")
    let idvideo = localStorage.getItem("idvideo")

    let phim = dsphim.find(p => p.idphim == idphim)
    let video = dsvideo.find(v => v.idvideo == idvideo)

    let tenphim
    if (phim.movie == 1) {
        tenphim = phim.tenphim + " Full"
    } else {
        tenphim = phim.tenphim + " Tập " + video.tap
    }

    $("#filmname").html(tenphim)
    $("#filmviews").html(phim.luotxem.toLocaleString())
    $("#filmdate").html(video.ngaydang)
    $("#numberheart").html(phim.luotthich.toLocaleString())
    $("#numberfollow").html(phim.luottheodoi.toLocaleString())

    //Thumbnail
    let img = "<img src='" + phim.thumbnail + "' alt='" + tenphim + "'/>"
    $("#phimthumbnail").html(img)

    //Thể loại
    let arr = phim.theloai.split("; ");
    let theloai = "<span class='lbl-film'>Thể loại</span>"
    $.each(arr, function(index, element) {
        theloai += "<span class='categoryfilm-item'>" + element + "</span>"
    });
    $("#phimcategory").html(theloai)

    //Quốc gia
    $("#phimcountry").html(phim.quocgia)

    //Nội dung phim
    $("#phimdescription").html(phim.noidung)

    //Cập nhật video
    $("#filmplayer").attr("src", video.linkframe)

    if (phim.movie == 1) {
        $("#btn-comment").trigger("click")
        $("#btn-episode").css("display", "none")
    } else {

        let filteredPhim = dsvideo.filter(function(p) {
            return p.idphim == idphim;
        }).sort(function(a, b) {
            return b.tap - a.tap;
        });

        $("#totalvideos").html(filteredPhim.length)

        let listvideo = ""

        $.each(filteredPhim, function(index, phim) {

            let actived = "",
                tenvideo = "";
            if (phim.idvideo == idvideo)
                actived = " actived";

            if (phim.tenvideo == "")
                tenvideo = "Tập " + phim.tap;
            else
                tenvideo = "Tập " + phim.tap + " - " + phim.tenvideo;

            listvideo += "<div class='episode-item" + actived + "'><a class='episode-item-content' onclick='setPhim(" + phim.idphim + "," + phim.idvideo + ")'> <div class='episode-item-thumbnai'><img src='" + phim.thumbnai + "'></div><div class='episode-item-meta'><div class='episode-item-title'>" + tenvideo + "</div> <div class='episode-item-views'>" + phim.luotxem.toLocaleString() + " lượt xem</div> </div> </a> </div>"
        });

        $("#listvideo").html(listvideo)
        $('#quickSearch').val(video.tap)

    }

    // $('#downloadvideo').click(function(event) {
    //     if(video.downloadlink===""||video.downloadlink===null) {
    //         alert("Không thể tải video này.");
    //     }else {

    //         event.preventDefault();

    //         var url = "https://video.wixstatic.com/video/a0a7b4_76c7119fbb73457a81e908751bdca3e8/480p/mp4/file.mp4";

    //         $.ajax({
    //         url: url,
    //         method: 'GET',
    //         xhrFields: {
    //             responseType: 'blob' // đặt kiểu dữ liệu trả về là blob để có thể tải xuống file
    //         },
    //         success: function(data) {
    //             // tạo đường dẫn tải xuống
    //             var blob = new Blob([data]);
    //             var link = document.createElement('a');
    //             link.href = window.URL.createObjectURL(blob);
    //             link.download = tenphim+".mp4"; // đặt tên file tải xuống ở đây
    //             link.click();
    //         },
    //         error: function() {
    //             alert('Đã xảy ra lỗi khi tải xuống file.');
    //         }
    //         });

    //     }
    // });


    // function napSP(sp) {
    //     let temp = "<img src='" + sp.hinhanh + "' alt='' class='v-100' style='height: 500px;'>"
    //     $("#ha").html(temp)
    // }
    // $(document).ready(function () {
    //     dssp.forEach(sp => {
    //         napSP(temp)
    //     });
    // })

    // var quantitiy = 0;
    // $('.quantity-right-plus').click(function (e) {

    //     // Stop acting like a button
    //     e.preventDefault();
    //     // Get the field name
    //     var quantity = parseInt($('#quantity').val());

    //     // If is not undefined

    //     if(quantity < temp.soluong)
    //     $('#quantity').val(quantity + 1);


    //     // Increment

    // });

    // $('.quantity-left-minus').click(function (e) {
    //     // Stop acting like a button
    //     e.preventDefault();
    //     // Get the field name
    //     var quantity = parseInt($('#quantity').val());

    //     // If is not undefined

    //     // Increment
    //     if (quantity > 1) {
    //         $('#quantity').val(quantity - 1);
    //     }
    // });

});