window.addEventListener('DOMContentLoaded', function() {

    

    window.addEventListener('scroll', function(){
        let header = document.querySelector('header');
        header.classList.toggle('sticy', window.scrollY > 0 );
    })

    let bar = document.querySelector('.fa-bars'),
    menuX = document.querySelector('.fa-times');
    bar.addEventListener('click', function (){
        document.querySelector('nav > ul').classList.toggle('active');
       
    })

    window.addEventListener('scroll', function () {
        let scr = document.querySelector('.scr');
        scr.classList.toggle('sticys', window.scrollY > 900);
   
        })
        scr.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })

    })


