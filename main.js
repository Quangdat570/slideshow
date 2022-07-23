// window.addEventListener("submit",function(e) {
//     e.preventDefault();
// });



// window.addEventListener("load",function() {
//     const slide = this.document.querySelector(".slider");

//     const sliderMain = this.document.querySelector(".slide");

//     const sliderItems = this.document.querySelectorAll(".slider-show");

   
//     const sliderItemWidth = sliderItems[0].offsetWidth;

//     const sliderLength = sliderItems.length;

//     let postionX = 0;

    
// });
const slide = this.document.querySelector(".slider");

const sliderMain = this.document.querySelector(".slider-main");

const sliderItems = this.document.querySelectorAll(".slider-item");

   
const sliderItemWidth = sliderItems[0].offsetWidth;

console.log(sliderItemWidth);

const sliderLength = sliderItems.length;

let postionX = 0;
let index = 0;
const nextBtn = this.document.querySelector(".next");

const prevBtn = this.document.querySelector(".prev");



nextBtn.addEventListener("click", function() {
    handechangeslide(1);
});


prevBtn.addEventListener("click", function() {
    handechangeslide(-1);
});


function handechangeslide(direction) {
    if ( direction ==1) {
        index++;
        if ( index >= sliderLength) {
            index = sliderLength;
            return;
        };
        postionX = postionX - sliderItemWidth;
       sliderMain.style = `transform: translateX(${postionX}px);`;
       
    } else if ( direction == -1) {
        index--;
        if ( index <=0) {
            index = 0;
            return;
        };
        postionX = postionX + sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
    }
}

// sliderbar
const showMenu = function(toggleId, navbarId, bodyId) {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)
    
    if ( toggle && navbar) {
        toggle.addEventListener('click', function() {
            navbar.classList.toggle('show');
            toggle.classList.toggle('rotate');
            bodypadding.classList.toggle('expander');
            
        })

    }
}
showMenu('nav-toggle', 'navbar', 'body');

const linkColor = document.querySelectorAll(('.nav__link'));
function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach( l => l.addEventListener('click', colorLink));

// drop down button




function myFunction(dropId,userDropId,homeId,homeListId) {
    const drop1 = document.getElementById(dropId);
    const user = document.getElementById(userDropId);
    const home = document.getElementById(homeId);
    const homedrop = document.getElementById(homeListId);
    
    if (drop1 && user && home && homedrop) {
        drop1.addEventListener("click",function() {
            
            user.classList.toggle("show-list-user");
        })

        home.addEventListener("click",function() {
            homedrop.classList.toggle("show-list");
        })
    }
}
myFunction("drop","userDrop","home","homeList");

// Modal

function modalSign(bodyId,signId,closeId,swapper,boxId) {
    const box = document.getElementById(boxId);
    const sliders = document.getElementById(bodyId);
    const sign = document.getElementById(signId);
    const close = document.getElementById(closeId);
    const swappers = document.getElementById("swapper")
    if ( sliders && sign && close && swapper && myModal && box) {
        sign.addEventListener("click",function() {
            swappers.style.display ="block";
            box.style.display ="none";
            
            
        })

        close.addEventListener("click",function() {
            swappers.style.display = "none";
            
            
        })
    }
}

modalSign("body","sign", "closeModal","swapper","box");

function login(loginId,closeId,boxId) {
    // const swappers = document.getElementById(swapperId)
    const login = document.getElementById(loginId);
    const close = document.getElementById(closeId);
    const box = document.getElementById(boxId);

    if ( login && close && box) {
        login.addEventListener("click",function() {
            box.style.display ="block";
            // swappers.style.display = "none";
        })

        close.addEventListener("click",function() {
           box.style.display = "none";
            
            
        })
    }
}

login("login","closeModal","box");