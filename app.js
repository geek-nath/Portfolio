// window.addEventListener('load', ()=> {
//     const loader = document.querySelector('.building-blocks');
//     loader.classList.add('d-none');

//     // loader.addEventListener('transitionend', ()=> {
//     //     document.body.removeChild(loader);
//     // })
// });

window.addEventListener("load", function() {
    const loader = document.querySelector(".building-blocks");
    setTimeout(function() {
      loader.style.display = "none";
    }, 3000);
});