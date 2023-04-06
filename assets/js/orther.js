
function orther(number) {
    if(number == 1) {

        //Trang thể loại

        function chooseFilter(x,y) {

            document.getElementById("list-category").style.display = "none";

            var status = document.getElementById(x);

            status.addEventListener('click', function() {
                if(document.getElementById(y).style.display == "none") 
                    document.getElementById(y).style.display = "grid";
                else 
                    document.getElementById(y).style.display = "none";
            })
        }

        chooseFilter('category','list-category');
        chooseFilter('status','list-status');
        chooseFilter('movie','list-movie');
        chooseFilter('sort','list-sort');
        
        //https://cors-anywhere.herokuapp.com/https://motphimz.000webhostapp.com/assets/js/category.json

        $.getJSON("https://motphimz.000webhostapp.com/assets/js/category.json", function(data){
            var items = [];
            $.each(data, function(key, val){
              items.push('<li class="dropdown-category-items">' +
              '<input name="category[]" value="' + val.id + '" type="checkbox" data-cate="'+ val.id + '"><label>' + val.category + '</label></li>');
            });
            $("#list-category").append(items.join(""));
          });

        document.body.addEventListener('click', function(e){
            if(e.target.id != 'list-category' && e.target.id != 'category') 
                document.getElementById('list-category').style.display = "none";

            if(e.target.id != 'list-status' && e.target.id != 'status') 
                document.getElementById('list-status').style.display = "none";

            if(e.target.id != 'list-movie' && e.target.id != 'movie') 
                document.getElementById('list-movie').style.display = "none";

            if(e.target.id != 'list-sort' && e.target.id != 'sort') 
                document.getElementById('list-sort').style.display = "none";
        })
        
    }

    if(number == 2) {

        //Trang tìm kiếm

        const urlParams = new URLSearchParams(window.location.search);
        const q = urlParams.get('q');
        if(q==""||q==null) {
            window.location.href="./index.html";
        }
        document.getElementById("result-search").innerHTML = q;


    }

    if(number == 3) {

        //Trang xem phim

        var lightdark = document.getElementById("lightdark");
        var darkplayer = document.getElementById("darkplayer");
        var btnepisode = document.getElementById("btn-episode");
        var btncomment = document.getElementById("btn-comment");
        var btninfomation = document.getElementById("btn-infomation");

        btnepisode.addEventListener('click', function() {

            document.getElementById("tab-episode").style.display = "block";
            document.getElementById("tab-comment").style.display = "none";
            btncomment.classList.remove("actived");
            btninfomation.classList.remove("actived");
            btnepisode.classList.add("actived");

        });

        btninfomation.addEventListener('click', function() {

            document.getElementById("tab-episode").style.display = "none";
            document.getElementById("tab-comment").style.display = "none";
            btncomment.classList.remove("actived");
            btninfomation.classList.add("actived");
            btnepisode.classList.remove("actived");

        });

        btncomment.addEventListener('click', function() {

            document.getElementById("tab-episode").style.display = "none";
            document.getElementById("tab-comment").style.display = "block";
            btninfomation.classList.remove("actived");
            btncomment.classList.add("actived");
            btnepisode.classList.remove("actived");

        });

        lightdark.addEventListener('click', function() {

            if(darkplayer.style.visibility == "hidden") {
                document.getElementById("darkplayer").style.visibility = "unset";
                document.getElementById("darkplayer").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                document.getElementById("player-embed").style.zIndex = "99999";
                lightdark.style.opacity = "100%";
            }else {
                document.getElementById("player-embed").style.zIndex = "0";
                document.getElementById("darkplayer").style.visibility = "hidden";
                document.getElementById("darkplayer").style.backgroundColor = "transparent";
                lightdark.style.opacity = "70%";
            }

        })

    }
}