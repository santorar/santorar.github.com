document.querySelector('.lateral').addEventListener("click", () =>{
    document.querySelector(".nav-content").classList.toggle("show");
    console.log("click");
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cubes', { delay: 500 });
ScrollReveal().reveal('.baner', { delay: 500 });