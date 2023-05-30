
const load_timeout = setTimeout(load_navbar, 1000)
var time_num = -1
const navbar_icon = $("#navbar-button-wrapper")
var i = 0;
const navbar_bars = document.getElementById("navbar-button")
const modal_background = $("#modal-background")
const line_coding = $(".line-coding")

function load_navbar() {
    navbar_icon.animate({opacity: "1"}, )
    $("#main-title").animate({opacity: "1"}, 1000)
    clearTimeout(load_timeout); 
    typewriter()
} 
 



setInterval(function() {
    time_num += 1;
    if (time_num % 2) {
        line_coding.animate({opacity: 0}, 1)
    } else {
        line_coding.animate({opacity: 1}, 1)
    }

}, 500)

window.onclick = function(event) {
    console.log(event.target)

    if (event.target == navbar_bars) {

        $(".navbar-panel").addClass("visible")
        make_navbar_button_disappear()
        make_modal_background_appear()
        }
    
    if (event.target == document.getElementById("modal-background")) {
        
        make_navbar_button_appear()
        make_modal_background_disappear()
        $(".navbar-panel").removeClass("visible")
}
}


function make_navbar_button_disappear() {
    navbar_icon.addClass("invisible")
}



function make_navbar_button_appear() {
    navbar_icon.removeClass("invisible")

}

function make_modal_background_appear() {
    modal_background.addClass("visible")
}

function make_modal_background_disappear() {
    modal_background.removeClass("visible")
}


function typewriter() {
    const console_text = 'print("2+ years of experience")'

    const speed = 100;
    console.log(console_text.length)
    if (i < console_text.length) {
        console.log(document.getElementById("coding-text").innerHTML)
        document.getElementById("coding-text").innerHTML += console_text.charAt(i);

        console.log(i)
        i = i + 1;
        setTimeout(typewriter, speed);
    }
}



