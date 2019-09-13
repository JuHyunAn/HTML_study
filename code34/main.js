document.getElementById("wrap").onmouseover = function(){
    // this : div 태그를 의미
    this.setAttribute("class", "over"); // class 속성 부여, 명칭은 over
};
// 마우스를 올렸을 때 해당 클래스 속성 부여

document.getElementById("wrap").onmouseout = function(){
    this.setAttribute("class", "");
};
// 마우스를 다른곳으로 뺏을 때 해당 클래스 속성 부여