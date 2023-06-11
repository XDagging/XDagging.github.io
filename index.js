const body = document.getElementById('body');
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
    // console.log(event.target)

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

    document.querySelectorAll(".fa-solid fa-circle").forEach(check => {
        if (event.target == check) {
            console.log(check)
        }
    })

  
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

    if (i < console_text.length) {

        document.getElementById("coding-text").innerHTML += console_text.charAt(i);


        i = i + 1;
        setTimeout(typewriter, speed);
    }
}





const middle_elements = document.querySelectorAll(".middle-element")

const options = {
    root: null, //This means that it is checking if its on the viewport
    threshold: 0.5
    // rootMargin: "0px" //This means that the api will be fired up 150opx before the element is actually in the viewport. Works exactly like margin does in css
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        var element_in_viewport = entry.target
        console.log(entry.isIntersecting)

        if (entry.isIntersecting == false) {
            console.log("opacity 0")
            element_in_viewport.style.opacity = 0;
        }



        if (entry.isIntersecting == true) {
            let element = element_in_viewport;
            let opacity = 0;
            let fadeIn = setInterval(() => {
                element.style.opacity = opacity
                opacity += 0.01;
                console.log("this is happening")
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                    opacity = 0;
                }
            }, 10);

            if (opacity >= 1) {
                clearInterval(fadeIn);
                opacity = 0;
            }

        }  
       

        // Here you put the code to what happens to the elements
    })
}, options)




middle_elements.forEach(element => {
    observer.observe(element);
})

// var time = 0;
// var hover = 0;
// var out = 0;

// function getInTime() {
//   hover = Date.now();
// }

// function getOutTime() {
//   out = Date.now();
//   time = out-hover;
//   console.log(time)

//   if (time > 500) {
//     window.location.replace("https://github.com/XDagging")
//   }
// }



// The code above can be used to put a lot of observers on elements that the functions applies to



