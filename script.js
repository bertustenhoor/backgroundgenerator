var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById('color3');
var random = document.querySelector("#random");
var css = document.querySelector("#css-property");
var backGround = document.querySelector("#background");

const colors = [color1, color2, color3];
//set inital value of the colorpickers to the default background value + edit text of the css line
setCSS();

//set eventlisteners
colors.forEach(color => { 
    color.addEventListener("input", () => setCSS()); 
})

random.addEventListener("click", function() {

    color1.value = getRandomColor();
    color2.value = getRandomColor();
    color3.value = getRandomColor();

    setCSS();

})

//edit the css of the background and edit the css textline, all-in-one function
function setCSS() {
    
    backGround.style.setProperty("background", `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`);

    setCSStext();

}

//setting element text to css line
function setCSStext() {
    css.textContent = `background: linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value});`;
}

function getRandomColor() {

    var newColor = '#';

    const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    for (i = 0; i<6; i++) {
        var index = Math.floor(Math.random() * 17);
        newColor += chars[index];
    }

    return newColor;
    
}


