var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
var id = Math.random().toString(36).slice(2, 7);
var src = "https://drewderose.github.io/jostenscustomcode/main.js?" + id;
script.setAttribute("id", "jostenscustomcode_home");
script.src= src;
head.appendChild(script);
