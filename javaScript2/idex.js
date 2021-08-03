"use strict";
window.addEventListener('DOMContentLoaded', function() {

    

    window.addEventListener('scroll', function(){
        let header = document.querySelector('header');
        header.classList.toggle('sticy', window.scrollY > 0 );
    });

    let bar = document.querySelector('.fa-bars'),
    menuX = document.querySelector('.fa-times');
    bar.addEventListener('click', function (){
        document.querySelector('nav > ul').classList.toggle('active');
       
    });

    window.addEventListener('scroll', function () {
        let scr = document.querySelector('.scr');
        scr.classList.toggle('sticys', window.scrollY > 900);
   
        });
        // scr.addEventListener('click', () => {
        //     document.body.scrollTop = 0;
        //     document.documentElement.scrollTop = 0;
        // });      
        
        const loader = document.querySelector('.loader');
        setTimeout(function() {
        loader.classList.add('loading');
        setTimeout(function () {
            loader.style.display = "none";
        }, 100);
        }, 200);

                                                                

    });              




    // "use strict";
    // function loger() {
    //     console.log("hello world");
    // } 
    // const timer = setTimeout(loger, 2000);