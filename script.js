function random() {
    var arr = ["https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_960_720.png",
        "https://cdn.pixabay.com/photo/2015/10/27/08/51/autumn-1008520_960_720.png",
        "https://cdn.pixabay.com/photo/2017/06/04/23/57/stem-2372543_960_720.png",
        "https://cdn.pixabay.com/photo/2016/04/20/21/19/png-1342119_960_720.png",
        "https://cdn.pixabay.com/photo/2024/03/21/23/06/created-by-ai-8648630_960_720.png"
    ];
    
    
    let imgRandom = arr[Math.floor(Math.random() * arr.length)];
    var randomX = Math.random() * 100;
    var randomY = Math.random() * 100;
    var rotate = Math.floor(Math.random() * 360);
    return { randomX, randomY, rotate, imgRandom };
}


var btn = document.querySelector("button");
btn.addEventListener("click", function () {
    var { randomX, randomY, rotate, imgRandom } = random();
    var img = document.createElement("img");
    img.src = imgRandom;
    img.style.height = "100px";
    img.style.left = randomX + "%";
    img.style.top = randomY + "%";
    img.style.rotate = rotate + "deg";
    img.style.position = "absolute";
    document.body.appendChild(img);
});


