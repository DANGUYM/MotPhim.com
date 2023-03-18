
function orther(number) {
    if(number == 1) {

        var category = document.getElementById('category');
        category.addEventListener('click', function() {
            if(document.getElementById('list-category').style.display == "none") 
                document.getElementById('list-category').style.display = "grid";
            else 
                document.getElementById('list-category').style.display = "none";
        })

        $.getJSON("https://cors-anywhere.herokuapp.com/https://motphimz.000webhostapp.com/assets/js/category.json", function(data){
            var items = [];
            $.each(data, function(key, val){
              items.push('<li class="dropdown-category-items">' +
              '<input name="category[]" value="' + val.id + '" type="checkbox" data-cate="'+ val.id + '"><label>' + val.category + '</label></li>');
            });
            $("#list-category").append(items.join(""));
          });


    }



}