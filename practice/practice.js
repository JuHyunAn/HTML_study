// 단순하게 마우스오버일때 텍스트 노출되고, 아웃일때 사라지도록...

document.getElementById("porum").onmouseover = function(){
    this.innerHTML = "포럼으로!!!";
}

document.getElementById("porum").onmouseout = function(){
    this.innerHTML = "";
}

document.getElementById("install").onmouseover = function(){
    this.innerHTML = "게임설치!!!";
}

document.getElementById("install").onmouseout = function(){
    this.innerHTML = "";
}
