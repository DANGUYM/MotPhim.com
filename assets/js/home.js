var remove_preview_trailer = document.getElementById('remove-trailer');
var preview_trailer = document.getElementById('previewtrailer');
var myClassElements = document.getElementsByClassName("trailerfilm");
var myVideo = document.getElementById("myVideo");
var count = 0;

remove_preview_trailer.addEventListener('click', function(){
    preview_trailer.style.display = "none";
    document.getElementById("player").setAttribute("src","");
})

function getPreviewFilm(number) {
    if(number==1) {
            document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/6R6q2fAp2n4");
            document.getElementById("previewtrailer").style.display = "block";
            document.getElementsByClassName("player-title")[0].innerHTML = "Đóng chặt cửa nào Suzume";
            document.getElementsByClassName("player-type")[0].innerHTML = "Dành cho mọi lứa tuổi";
            document.getElementsByClassName("player-type")[0].style.backgroundColor = "#789c45";
            document.getElementsByClassName("player-view")[0].innerHTML = "271.328" + " lượt xem";
            document.getElementsByClassName("player-year")[0].innerHTML = "Năm 2023";
            document.getElementsByClassName("player-description")[0].innerHTML = "Khóa Chặt Cửa Nào Suzume kể câu chuyện khi Suzume vô tình gặp một chàng trai trẻ đến thị trấn nơi cô sinh sống với mục đích tìm kiếm một cánh cửa. Để bảo vệ Nhật Bản khỏi thảm họa, những cánh cửa rải rác khắp nơi phải được đóng lại, và bất ngờ thay Suzume cũng có khả năng đóng cửa đặc biệt này. Từ đó cả hai cùng nhau thực hiện sự mệnh khóa chặt cửa!";
    }
    if(number==2) {
        document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/"+"MZaYfS5CS6c");
        document.getElementById("previewtrailer").style.display = "block";
        document.getElementsByClassName("player-title")[0].innerHTML = "Biệt đội rất ổn";
        document.getElementsByClassName("player-type")[0].innerHTML = "Dành người trên 13 tuổi";
        document.getElementsByClassName("player-type")[0].style.backgroundColor = "#fcdf05";
        document.getElementsByClassName("player-view")[0].innerHTML = "32.281" + " lượt xem";
        document.getElementsByClassName("player-year")[0].innerHTML = "Năm 2023";
        document.getElementsByClassName("player-description")[0].innerHTML = "BIỆT ĐỘI RẤT ỔN xoay quanh bộ đôi Quyên (Hoàng Oanh) và Phong (Hứa Vĩ Văn). Sau lần chạm trán tình cờ, bộ đôi lôi kéo Bảy Cục (Võ Tấn Phát), Bảy Súc (Nguyên Thảo), Quạu (Ngọc Phước), Quọ (Ngọc Hoa) tham gia vào phi vụ đặc biệt: Đánh tráo chiếc vòng đính hôn bằng kim cương quý giá và lật tẩy bộ mặt thật của Tuấn - chồng cũ của Quyên trong đám cưới giữa hắn và Tư Xoàn - nữ đại gia miền Tây sở hữu khối tài sản triệu đô. Màn kết hợp bất đắc dĩ của Biệt Đội Rất Ổn - Phong, Quyên và Gia Đình Cục Súc nhằm qua mắt “cô dâu, chú rể” tại khu resort sang chảnh hứa hẹn cực kỳ gay cấn, hồi hộp nhưng không kém phần hài hước, xúc động."; 
    }
    if(number==3) {
        document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/"+"hWei0TioFvo");
        document.getElementById("previewtrailer").style.display = "block";
        document.getElementsByClassName("player-title")[0].innerHTML = "The First Slam Dunk";
        document.getElementsByClassName("player-type")[0].innerHTML = "Dành người trên 13 tuổi";
        document.getElementsByClassName("player-type")[0].style.backgroundColor = "#fcdf05";
        document.getElementsByClassName("player-view")[0].innerHTML = "95.388" + " lượt xem";
        document.getElementsByClassName("player-year")[0].innerHTML = "Năm 2023";
        document.getElementsByClassName("player-description")[0].innerHTML = "Hanamichi Sakuragi là một tên côn đồ có quá khứ từng bị các cô gái bỏ rơi. Sau khi đăng ký vào trường trung học Shohoku, Hanamichi bắt đầu quan tâm đến một cô gái tên Haruko, người yêu thích bộ môn bóng rổ, vì vậy cậu ấy đã tham gia vào đội của trường. Nhiều tháng sau, cậu ta và đội thách đấu với nhà vô địch bóng rổ liên trường, trường Sannoh."; 
    }
    if(number==4) {
        document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/"+"1ZSytvp2I0I");
        document.getElementById("previewtrailer").style.display = "block";
        document.getElementsByClassName("player-title")[0].innerHTML = "Lật mặt 6: Tấm vé định mệnh";
        document.getElementsByClassName("player-type")[0].innerHTML = "Dành người trên 13 tuổi";
        document.getElementsByClassName("player-type")[0].style.backgroundColor = "#fcdf05";
        document.getElementsByClassName("player-view")[0].innerHTML = "312.218" + " lượt xem";
        document.getElementsByClassName("player-year")[0].innerHTML = "Năm 2023";
        document.getElementsByClassName("player-description")[0].innerHTML = "Lật mặt 6 sẽ thuộc thể loại giật gân, tâm lý pha hành động, hài hước.";      
    }
    if(number==5) {
        document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/"+"lAoBjciGva4");
        document.getElementById("previewtrailer").style.display = "block";
        document.getElementsByClassName("player-title")[0].innerHTML = "Nàng tiên cá 2023";
        document.getElementsByClassName("player-type")[0].innerHTML = "Dành cho mọi lứa tuổi";
        document.getElementsByClassName("player-type")[0].style.backgroundColor = "#789c45";
        document.getElementsByClassName("player-view")[0].innerHTML = "1.271.382" + " lượt xem";
        document.getElementsByClassName("player-year")[0].innerHTML = "Năm 2023";
        document.getElementsByClassName("player-description")[0].innerHTML = "Ariel, một nàng tiên cá 16 tuổi, con gái vua thủy tề Triton, chán cuộc sống nơi biển khơi, mơ ước cuộc sống của con người trên đất liền. Ariel thường cùng cá Flouder bạn mình thu thập những thứ đồ của con người và đưa cho hải âu Scuttle, người cung cấp thông tin về tập quán của con người và hiểu biết về tập quán đó thì rất nực cười. Bất chấp lời cảnh báo của cha mình và nhạc trưởng của triều đình, cua Sebastian rằng mối quan hệ giữa người cá và con người là điều nghiêm cấm, Ariel vẫn muốn được trở thành một phần của thế giới bên trên, cô đã thu thập đầy một hang bí mật toàn đồ dùng của con người mà cô tìm thấy. Trong khi đó, Sebastian, người đã lãnh trách nhiệm không để cô lên bề mặt nước nữa, cố thuyết phục Ariel rằng tốt hơn hết cô nên sống ở biển khơi.";      
    }
    if(number==6) {
        document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/"+"89aYxQcGGA4");
        document.getElementById("previewtrailer").style.display = "block";
        document.getElementsByClassName("player-title")[0].innerHTML = "Vệ binh dải ngân hà 3";
        document.getElementsByClassName("player-type")[0].innerHTML = "Dành cho người trên 16 tuổi";
        document.getElementsByClassName("player-type")[0].style.backgroundColor = "#f7921e";
        document.getElementsByClassName("player-view")[0].innerHTML = "789.323" + " lượt xem";
        document.getElementsByClassName("player-year")[0].innerHTML = "Năm 2023";
        document.getElementsByClassName("player-description")[0].innerHTML = "Sau khi mua Knowhere từ The Collector, đội Vệ binh dải Ngân Hà cố gắng biến nó thành nơi trú ẩn an toàn cho những người tị nạn sau cú búng tay di dời. Nhưng sau một cuộc tấn công tàn bạo, Peter Quill, vẫn cảm xúc vì mất Gamora, phải tập hợp các Vệ binh để thực hiện sứ mệnh bảo vệ vũ trụ và bảo vệ một người trong số họ khỏi kẻ thù chung nguy hiểm.";      
    }
    if(number==7) {
        document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/"+"IbyYUvLZ6fM");
        document.getElementById("previewtrailer").style.display = "block";
        document.getElementsByClassName("player-title")[0].innerHTML = "Thanh gươm diệt quỷ: Đường đến làng rèn gươm";
        document.getElementsByClassName("player-type")[0].innerHTML = "Dành cho người trên 13 tuổi";
        document.getElementsByClassName("player-type")[0].style.backgroundColor = "#fcdf05";
        document.getElementsByClassName("player-view")[0].innerHTML = "473.883" + " lượt xem";
        document.getElementsByClassName("player-year")[0].innerHTML = "Năm 2023";
        document.getElementsByClassName("player-description")[0].innerHTML = "Thanh Gươm Diệt Quỷ: Đường Đến Làng Rèn Gươm sẽ tái hiện trận chiến khốc liệt nhất tại Phố Đèn Đỏ trong tập 10 và 11 giữa Tanjiro, Sound Hashira, Tengen Uzui với anh em Thượng Huyền Lục - Daki và Gyutaro lần đầu tiên trên màn ảnh rộng. Bên cạnh đó, phim sẽ công chiếu tập 1 của Làng Rèn Gươm: Sau trận chiến khốc liệt với anh em quỷ Thượng Huyền Lục Gyuutarou và Daki tại Phố Đèn Đỏ, Tanjiro và các kiếm sĩ diệt quỷ đều bị thương nặng và được đưa trở về trụ sở của Đội Diệt Quỷ để dưỡng thương và phục hồi. Sau trận chiến, thanh gươm của Tanjiro cũng bị hư hỏng nặng và lúc này, cậu cần một thanh gươm mới để tiếp tục lên đường làm nhiệm vụ. Cậu được đưa đến Làng Rèn Gươm, nơi phụ trách rèn vũ khí cho các kiếm sĩ của Đội Diệt Quỷ và chuẩn bị cho trận chiến mới với các thành viên mạnh nhất trong hàng Thượng Huyền của Thập Nhị Quỷ Nguyệt.";      
    }
}



function togglePlay() {
    if(myVideo.paused) {
        myVideo.play();
    }else {
        myVideo.pause();
    }
}

function toggleMute() {
    var iconVolume = document.getElementById("iconVolume");

    if (myVideo.muted) {
        myVideo.muted = false;
        iconVolume.classList.add("fa-volume-up");
        iconVolume.classList.remove("fa-volume-off");
      } else {
        myVideo.muted = true;
        iconVolume.classList.add("fa-volume-off");
        iconVolume.classList.remove("fa-volume-up");
      }
}

myVideo.addEventListener('play', () => {
    var iconPlay = document.getElementById("iconPlay");
    iconPlay.classList.add("fa-pause");
    iconPlay.classList.remove("fa-play");
})

myVideo.addEventListener('pause', () => {
    var iconPlay = document.getElementById("iconPlay");
    iconPlay.classList.add("fa-play");
    iconPlay.classList.remove("fa-pause");
})

var slideshowvideos = document.getElementById("slideshow-videos");
slideshowvideos.addEventListener('mouseover', function() {
    myVideo.play();
});

myVideo.addEventListener("ended", () => {

    var logoVideo = document.getElementById("logoVideo");

    if(count==0) {
        myVideo.poster = 'https://i.imgur.com/3YF9HF2.png';
        myVideo.src = './assets/videos/202304071425.mp4';
        logoVideo.src = './assets/videos/logo2.png';
        myVideo.load();
        count++;
    }else {
        myVideo.poster = 'https://i.imgur.com/RGjz89k.jpg';
        myVideo.src = './assets/videos/1149434306409740104.mp4';
        logoVideo.src = './assets/videos/logo1.png';
        myVideo.load();
        count--;
    }
});


function showTooltip(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function hideTooltip(id) {
    document.getElementById(id).style.display = "none";
  }

for (var i = 0; i < myClassElements.length; i++) {
    myClassElements[i].addEventListener("click", function(event) {
      var parentTrailerfilm = event.target.closest(".trailerfilm");
      var index = parentTrailerfilm.dataset.index;
      getPreviewFilm(index);
      alert("Đã click vào phần tử thứ " + number + " trong danh sách");
    });
}
  
  $('#left1').on('click', function() {
      $('.tray-content-ranking').animate({
        scrollLeft: '-=500'
      }, 300, 'swing');
    });
    
  $('#right1').on('click', function() {
      $('.tray-content-ranking').animate({
        scrollLeft: '+=500'
      }, 300, 'swing');
  });
  