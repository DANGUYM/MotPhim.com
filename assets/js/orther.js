
function orther(number) {
    if(number == 1) {

        //Tất cả js của pages thể loại
        alert("Đã oke");

        $.post("../data/category.json", function(data){

            alert("Đã oke");

            var data = JSON.parse(data);
            var list = $('<li class="dropdown-category-items">');

            alert(data.length);

        });


    }



}