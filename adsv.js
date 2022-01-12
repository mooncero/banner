var file = "url.txt";
$.get(file,function(txt) {

    // Split data and convert it into array
    var lines = txt.responseText.split("\n");
    var link = lines[Math.floor(Math.random() * lines.length)];

    // Apply plugin here
    $('#default-usage .to-lock').sociallocker({

        buttons: {order:["facebook-like","twitter-tweet","google-plus"]},
        twitter: {url:link},
        facebook: {url:link},
        google: {url:link},

        text: {
            header: "Like us To Unlock This Content",
            message: "This content is locked. Like us on Twitter, Facebook or Google plus to unlock it."
        },

        locker: {close: false, timer: 0,},
        theme: "secrets"
    });

}); 
