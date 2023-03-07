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

// show socila links on scroll

const socialLinkBlock = document.getElementById('socialBlock');

window.onscroll = ()=> {
    if(window.scrollY > 2) {
        socialLinkBlock.classList.add('social_block_show');
    } else {
        socialLinkBlock.classList.remove('social_block_show');
    }
}