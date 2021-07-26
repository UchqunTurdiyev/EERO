window.addEventListener('DOMContentLoaded', function() {

    

    window.addEventListener('scroll', function(){
        let header = document.querySelector('header');
        header.classList.toggle('sticy', window.scrollY > 0 );
    })

    let bar = document.querySelector('.fa-bars'),
    menuX = document.querySelector('.fa-times');
    bar.addEventListener('click', function (){
        document.querySelector('nav > ul').classList.toggle('active');
        bar.style.display = 'none';
        menuX.style.display = 'block';

        menuX.addEventListener('click', function() {
          document.querySelector('nav ul').classList.toggle('no-active');
          menuX.style.display = 'none';
          bar.style.display = 'block';
        })
    })



})