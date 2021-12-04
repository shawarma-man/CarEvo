let users_btn=document.getElementById("users-btn");
let cars_btn=document.getElementById("cars-btn");
let pending_btn=document.getElementById("pending-btn");
let history_btn=document.getElementById("history-btn");
users_btn.addEventListener("click",swap);
cars_btn.addEventListener("click",swap);
pending_btn.addEventListener("click",swap);
history_btn.addEventListener("click",swap);
let msg = "dumb fuck"
function swap(){
    if(this.id=="users-btn"){
        $(".da").hide();
        $("#users").show();
        $(".title").text("Registered Users");
    }
    else if(this.id=="cars-btn"){
        $(".da").hide();
        $("#cars").show();
        $(".title").text("Cars in the inventory");
    }
    else if(this.id=="pending-btn"){
        $(".da").hide();
        $("#pending").show();
        $(".title").text("Pending orders");
    }
    else if(this.id=="history-btn"){
        $(".da").hide();
        $("#history").show();
        $(".title").text("Recent Orders");
    }
}