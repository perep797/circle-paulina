let title = document.getElementById("title");
let subtitle = document.getElementById("subtitle");
let clicks = 0;

function clickInstructions(el) { 

    if(el == title) {
        let img = document.createElement("img");
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
        imageWrapper.appendChild(img)
        img.src = "images/Matrix-Neo-Wakes-Up-1.gif";
        document.body.appendChild(img)
        console.log('title clicked')
    } else if (el == subtitle) {
        let p = document.createElement("p");
        let firstText = document.createTextNode("The internet is made up of monkeys on typewriters.");
        secondText = document.createTextNode("The internet is made up of sand.");
        p.appendChild(firstText);
        p.appendChild(secondText)
        document.body.appendChild(p);
        console.log('subtitle clicked')
    }
    
    if (clicks === 5) {
        let img = document.createElement("img");
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
        imageWrapper.appendChild(img)
        img.src = "images/clint.jpg";
        document.body.appendChild(img)
        console.log('title clicked')
    }
}

document.addEventListener("click", function(event) {
    clickInstructions(event.target)
    clicks += 1;
    console.log(clicks)
});


