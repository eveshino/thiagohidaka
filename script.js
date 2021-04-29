    let hamburger  = document.querySelector('#container-ham');


    hamburger.addEventListener('click', function(){
        let menu = document.querySelector('.nav-links');
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        
    })





function myFunction(x) {
    x.classList.toggle("change");
  }