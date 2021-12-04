
let cars_btn=document.getElementById("cars-btn");

let profile_btn=document.getElementById("profile-btn");

cars_btn.addEventListener("click",swap);

profile_btn.addEventListener("click",swap);
function swap(){
    if(this.id=="cars-btn"){
        $(".profile-panel").hide();
        $(".data").show();
        $(".Grops").show();
        $(".da").hide();
        $("#cars").show();
        $(".title").text("Owned Cars");
    }
    else if(this.id=="profile-btn"){
        $(".data").hide();
        $(".Grops").hide();
        $(".profile-panel").show();
    }
}

ourfile = document.getElementById('img-input');
preview = document.getElementById('profile-img');

fr = new FileReader();

ourfile.onchange = function () {
    file = ourfile.files[0];
    fr.readAsDataURL(file);
}

fr.onload = function(){
    preview.src = fr.result;
}