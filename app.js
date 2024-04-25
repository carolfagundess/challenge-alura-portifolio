const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

console.log(menuLinks);

function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    console.log(id)
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    })
}

function scrollToSection(event){
    event.preventDefault();   
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 20;
    nativeScroll(distanceFromTheTop);
}


menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
})