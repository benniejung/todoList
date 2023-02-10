const images = ["bg1.jpg","bg2.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = chosenImage;


const oneColor = ["#FF3300","#0066CC","009966","#FFFFFF","#66CCFF", "#777", "#000000","#FFFF00","#6666FF","#FFCCFF","#FFCC00","#CC66FF","#66CC00","rgb(116, 134, 215)"]
const secondColor = ["#FF3300","#0066CC","009966","#FFFFFF","#66CCFF", "#777", "#000000","#FFFF00","#6666FF","#FFCCFF","#FFCC00","#CC66FF","#66CC00"]


const oneColor_Btn = document.querySelector("#one_color");
const gradient_Btn = document.querySelector("#gradient");




gradient_Btn.addEventListener("click", (e)=>{
    const aColor = ["#0066CC","009966","#FFFFFF","#66CCFF", "#777", "#000000","#FFFF00","#6666FF","#FFCCFF","#FFCC00","#CC66FF","#66CC00"]
    const bColor = ["#FF3300","#0066CC","009966","#FFFFFF","#66CCFF", "#777", "#000000","#FFFF00","#6666FF","#FFCCFF","#FFCC00","#CC66FF","#66CC00"]
    const a = secondColor[Math.floor(Math.random() * aColor.length)];
    const b = secondColor[Math.floor(Math.random() * bColor.length)];
    if (a === b) {
        return;
    } else {
        document.body.style.background = `linear-gradient(90deg, ${a}, ${b})`;
    }
})

oneColor_Btn.addEventListener("click",(e) => {
    document.body.style.background = oneColor[Math.floor(Math.random() * oneColor.length)];
});









