let users_btn=document.getElementById("users-btn");
let cars_btn=document.getElementById("cars-btn");
let pending_btn=document.getElementById("pending-btn");
let history_btn=document.getElementById("history-btn");
let profile_btn=document.getElementById("profile-btn");
users_btn.addEventListener("click",swap);
cars_btn.addEventListener("click",swap);
pending_btn.addEventListener("click",swap);
history_btn.addEventListener("click",swap);
profile_btn.addEventListener("click",swap);
let msg = "dumb fuck"
function swap(){
    if(this.id=="users-btn"){
        $(".profile-panel").hide();
        $(".data").show();
        $(".Grops").show();
        $(".da").hide();
        $("#users").show();
        $(".title").text("Registered Users");
    }
    else if(this.id=="cars-btn"){
        $(".profile-panel").hide();
        $(".data").show();
        $(".Grops").show();
        $(".da").hide();
        $("#cars").show();
        $(".title").text("Cars in the inventory");
    }
    else if(this.id=="pending-btn"){
        $(".profile-panel").hide();
        $(".data").show();
        $(".Grops").show();
        $(".da").hide();
        $("#pending").show();
        $(".title").text("Pending orders");
    }
    else if(this.id=="history-btn"){
        $(".profile-panel").hide();
        $(".data").show();
        $(".Grops").show();
        $(".da").hide();
        $("#history").show();
        $(".title").text("Recent Orders");
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