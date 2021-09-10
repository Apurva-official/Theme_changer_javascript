var color_flag = 0;


document.querySelector(".btn-change").addEventListener("click", function() {
    if (color_flag == 0) {
        darkMode();
        color_flag += 1;
    } else if (color_flag == 1) {
        jellyFishMode();
        color_flag += 1;

    } else if (color_flag == 2) {
        purpleMode();
        color_flag += 1;

    } else {
        defaultMode();
        color_flag = 0;
    }
});

function darkMode() {
    document.querySelector("body").style.color = "white";
    document.querySelector(".header").style.background = "#171010";
    document.querySelector(".menu").style.background = "rgba(0,0,0, 0.934)";
    document.querySelector(".sidebar").style.background = "rgba(0,0,0, 0.954)";
    document.querySelector(".main").style.background = "rgba(0,0,0, 0.974)";
    document.querySelector(".footer").style.background = "purple";
}

function jellyFishMode() {
    document.querySelector("body").style.color = "black";
    document.querySelector(".header").style.background = "dodgerblue";
    document.querySelector(".menu").style.background = "rgba(185, 230, 85, 0.486)";
    document.querySelector(".sidebar").style.background = "rgba(605, 175, 240, 0.486)";
    document.querySelector(".main").style.background = "rgba(50, 50, 245, 0.186)";
    document.querySelector(".footer").style.background = "orangered";
    document.querySelector("*").style.boxShadow = "none";
}

function purpleMode() {
    document.querySelector(".header").style.background = "#1E3163";
    document.querySelector(".menu").style.background = "#3DB2FF";
    document.querySelector(".sidebar").style.background = "#B5FFD9";
    document.querySelector(".main").style.background = "#F8F0DF";
    document.querySelector(".footer").style.background = "#FF2442";
}


function defaultMode() {
    document.querySelector("body").style.color = "black";
    document.querySelector(".header").style.background = "rgba(30, 30, 31, 0.986)";
    document.querySelector(".menu").style.background = "rgba(197, 197, 197, 0.986)";
    document.querySelector(".sidebar").style.background = "rgba(212, 211, 211, 0.986)";
    document.querySelector(".main").style.background = "rgba(231, 231, 231, 0.986)";
    document.querySelector(".footer").style.background = "dodgerblue";
}