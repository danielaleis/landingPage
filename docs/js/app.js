// Creates the navbar dynamically

const navList = document.querySelector('.navbar__menu');
const navMenu = [
    'products',
    'bake',
    'cookies',
    'about'
];

const list = document.createElement('ul');

let i = 0;
navMenu.forEach(function (listDynamic) {
    const listElement = document.createElement('li');
    const listLink = document.createElement('a');
    listLink.innerHTML = navMenu[i];
    listLink.setAttribute('href', `#${navMenu[i]}`);
    listLink.setAttribute('class', 'menu__link');
    listElement.appendChild(listLink);
    list.appendChild(listElement);
    i = i + 1;
})
// Add menu to the DOM

navList.appendChild(list);

// Logic for button to expand menu in smallest resolution

document.getElementById("burger").addEventListener('click', () => {
    if (document.getElementsByClassName("navbar__menu")[0].classList.contains("hidden")) {
        document.getElementsByClassName("navbar__menu")[0].classList.remove("hidden");
    } else {
        document.getElementsByClassName("navbar__menu")[0].classList.add("hidden");
    }
});

// Show menu correctly when resizing window

function manageHiddenStatus() {
    let w = document.documentElement.clientWidth;
    if (w <= 599) {
        if (document.getElementsByClassName("navbar__menu")[0].classList.contains("hidden")) {
            document.getElementsByClassName("navbar__menu")[0].classList.remove("hidden");
        } else {
            document.getElementsByClassName("navbar__menu")[0].classList.add("hidden");
        }
    } else {
        if (document.getElementsByClassName("navbar__menu")[0].classList.contains("hidden")) {
            document.getElementsByClassName("navbar__menu")[0].classList.remove("hidden");
        }
    }
}

window.addEventListener("resize", manageHiddenStatus);


// Listens for scroll-event to get current position

const sections = document.querySelectorAll("section[id]");

document.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset;
    sections.forEach(current => {
        const height = current.offsetHeight;
        const top = current.offsetTop - 526;
        sectionId = current.getAttribute("id");
        // Manages active class
        console.log("height:"+height+" / top:"+top + " / scrollTop:"+scrollTop);
        if (
            scrollTop > top &&
            scrollTop <= top + height
        ) {
            document.querySelector("a[href*=" + sectionId + "]").classList.add("active");
            document.getElementById(sectionId).classList.add("your-active-class");
           // console.log("the class was added!!");
        } else {
            document.querySelector("a[href*=" + sectionId + "]").classList.remove("active");
            document.getElementById(sectionId).classList.remove("your-active-class");

            //console.log("the class was removed!!");
        }
    });
})

// Prevents the default jump and adds smooth scroll to anchor

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});