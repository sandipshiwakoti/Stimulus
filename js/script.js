// shows navlinks in small screen when btn-open is clicked
const btnOpen = document.getElementById("btn-open");
const navLinks = document.getElementById("nav-links");

btnOpen.addEventListener("click",()=>{
    navLinks.classList.toggle("show-nav-links");
});


// holds fixed behavior of nav-bar for a while
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 61)
        navBar.classList.add("fixed");
    else
        navBar.classList.remove("fixed");
});

// scroll links
const scrollLinks = document.querySelectorAll(".scroll-links");


scrollLinks.forEach(link=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        navLinks.classList.remove("show-nav-links");
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        let position;
        if(navBar.classList.contains("fixed"))
            position = element.offsetTop - 61;
        else
            position = element.offsetTop - 122;

        if(window.innerWidth < 972){
            if(navBar.classList.contains("fixed"))
                position = element.offsetTop - 61;
            else
                position = element.offsetTop - 215 - 122;
        }

        window.scrollTo({
            top: position,
            left: 0,
            behavior: "smooth",
        });
    }); 
});

// generates current year

const currentYear = document.getElementById("current-year");
currentYear.innerHTML = new Date().getFullYear();