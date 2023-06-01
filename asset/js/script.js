var name_val = document.querySelector("#btn1");
var iframe1 = document.getElementById("iframeSrc");

var g2_val = document.querySelector("#btn2");
var iframe2 = document.getElementById("iframeSrc");

name_val.addEventListener("click", prakash);
g2_val.addEventListener("click", g2Techsoft);

function prakash() {
    iframe1.src = "/asset/components/prakash/index.html";
}

function g2Techsoft() {
    iframe2.src = "/asset/components/g2Techsoft/index.html";
}

