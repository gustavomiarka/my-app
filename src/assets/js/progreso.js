window.onscroll= function() {
    var y = window.scrollY;
    const barra = new Array(document.querySelectorAll(".progress-bar"));
    console.log(y);
    if(y <= 2250){
        for (let index = 0; index < barra[0].length; index++) {
            let element = barra[0][index];
            element.setAttribute("style", "width:0%");
        }
    }
}