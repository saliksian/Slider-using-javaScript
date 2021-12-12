var dom = document;
var image = dom.getElementById("img")

var slider = ["./Aiden.png","./BackGround (1).png","./Background (2).png","./Ethel.png","./Fannie.png"]

var index =0;
function next() {
    index++;
    if (index == slider.length) {
        index = 0;
        image.src = slider[index]
    }
    else{
        image.src = slider[index]

    }
    
}