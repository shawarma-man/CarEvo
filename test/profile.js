var bgImageArray = ["backgroundnew.jpg", "background.jpg"],
    base = "";
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = base + img;
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
    window.clearTimeout();
    var k = 0;
    for (i = 0; i < bgImageArray.length; i++) {
        setTimeout(function(){
            document.body.style.backgroundImage = "url(" + base + bgImageArray[k] + ")";
            document.body.style.backgroundSize ="cover";
            if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
        }, (secs * 1000) * i)
    }
}
backgroundSequence();