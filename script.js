// Function to generate random RGB color
function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Function to change text color smoothly with faster transition
function changeColorSmoothly() {
    var nameElement = document.getElementById("name");
    var currentColor = window.getComputedStyle(nameElement).color;
    var targetColor = getRandomColor();
    var steps = 100; // Number of steps for smooth transition (reduce for faster transition)
    var delay = 10; // Delay between each step in milliseconds (reduce for faster transition)

    // Parse current color
    var currentRGB = currentColor.match(/\d+/g).map(Number);
    // Parse target color
    var targetRGB = targetColor.match(/\d+/g).map(Number);

    // Calculate step size for each color component
    var stepSizes = targetRGB.map((color, i) => (color - currentRGB[i]) / steps);

    // Smooth transition function
    function transitionStep(step) {
        if (step >= steps) return;
        var newColor = 'rgb(' +
            Math.round(currentRGB[0] + stepSizes[0] * step) + ',' +
            Math.round(currentRGB[1] + stepSizes[1] * step) + ',' +
            Math.round(currentRGB[2] + stepSizes[2] * step) + ')';
        nameElement.style.color = newColor;
        document.getElementById('button-view-profile').style.borderColor = newColor; // Change border color
        setTimeout(function () {
            transitionStep(step + 1);
        }, delay);
    }

    // Start smooth transition
    transitionStep(0);
}

// Call the function to change color smoothly every 2 seconds (2000 milliseconds)
setInterval(changeColorSmoothly, 2000);


feather.replace();

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}