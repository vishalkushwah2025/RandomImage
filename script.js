function random() {
    var arr = [
        "images/PngItem_475588.png", "images/PngItem_1117187.png", "images/PngItem_1117201.png", "images/PngItem_1117226.png", "images/PngItem_1117318.png", "images/PngItem_1619546.png", "images/PngItem_1949819.png", "images/PngItem_4785654.png", "images/PngItem_5367907 - Copy.png"
    ];
    
    let imgRandom = arr[Math.floor(Math.random() * arr.length)];
    var randomX = Math.random() * 100;
    var randomY = Math.random() * 100;
    var rotate = Math.floor(Math.random() * 360);
    return { randomX, randomY, rotate, imgRandom };
}
var main = document.querySelector("#main");

var btn = document.querySelector("button");
btn.addEventListener("click", function () {
    var { randomX, randomY, rotate, imgRandom } = random();
    var img = document.createElement("img");
    img.src = imgRandom;
    img.style.height = "200px";
    img.style.left = randomX + "%";
    img.style.top = randomY + "%";
    img.style.rotate = rotate + "deg";
    img.style.position = "absolute";
    img.style.opacity = "0";
    img.style.transform = "scale(0.5)";
    img.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    
    main.appendChild(img);
    
    setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "scale(1)";
    }, 10);
});
