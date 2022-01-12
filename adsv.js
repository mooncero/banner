$.ajax({
  url: '//cdn.jsdelivr.net/gh/mooncero/banner@main/url.txt',
  success: function(text) {
    var fileList = text.split('\n');
    var randomIndex = randomInt(0, fileList.length - 1);    

    $('iframe').attr('src', fileList[randomIndex]);
  }
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
