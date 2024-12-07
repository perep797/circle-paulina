let button = document.getElementById("bgbutton");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");

button.addEventListener('click', function() {
    
    document.body.classList.toggle("nighttime");

    if (document.body.classList.contains("nighttime")) {
        button.textContent = 'Daytime!'
        img1.src = "place/IMG_5456.jpg"
        img2.src = "place/IMG_5457.jpg"
        img3.src = "place/whoops.jpg"
        img4.src = "place/IMG_5454.jpg"
        img5.src = "place/IMG_5451.jpg"
        img6.src = "place/IMG_5453.jpg";
    } else {
        button.textContent = "Nighttime!"
        img1.src = "place/IMG_5397.jpg"
        img2.src = "place/IMG_5388.jpg"
        img3.src = "place/IMG_5437.jpg"
        img4.src = "place/IMG_5405.jpg"
        img5.src = "place/IMG_5416.jpg"
        img6.src = "place/IMG_5421.jpg";
    }

    console.log("button has been clicked!")
    
});
