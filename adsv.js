$.get('//cdn.jsdelivr.net/gh/mooncero/banner@main/url.txt', function(txt) {
var lines = txt.responseText.split("\n");
var randLineNum = Math.floor(Math.random() * lines.length);
return lines[randLineNum]; // random line from the text file
});
