/*for theme switcher*/

document.querySelector(".toggler").addEventListener('click',function() {
    document.body.classList.toggle("light");
});

/*for hover effects*/

var follows1 = [".facebook",".twitter",".instagram",".youtube"];
var follows2 = [];

follows1.forEach(element => {
    var y =  document.querySelector(element);
    follows2.push(y);
});

follows2.forEach(element => {
    element.addEventListener("mouseover",function() {
        element.style.backgroundColor = "var(--hover-color)";
    });
    element.addEventListener("mouseout",function() {
        element.style.backgroundColor = "var(--card-color)";
    });
});

var overview1 = ['.b1','.b2','.b3','.b4','.b5','.b6','.b7','.b8'];
var overview2 = [];

overview1.forEach(element => {
    var x = document.querySelector(element);
    overview2.push(x);
});

overview2.forEach(element => {
    element.addEventListener("mouseover",function() {
        element.style.backgroundColor = "var(--hover-color)";
    });
    element.addEventListener("mouseout",function() {
        element.style.backgroundColor = "var(--card-color)";
    });
});
