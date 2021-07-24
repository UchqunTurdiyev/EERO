window.addEventListener('DOMContentLoaded', function() {

    

    window.addEventListener('scroll', function(){
        let header = document.querySelector('header');
        header.classList.toggle('sticy', window.scrollY > 0 );
    })

    let bar = document.querySelector('.fa-bars');
    bar.addEventListener('click', function (){
        document.querySelector('nav > ul').classList.toggle('active');
    })



})