const curtain = document.querySelector('#curtain');

document.addEventListener('DOMContentLoaded', function(){

    // Click event - mobile menu
    const mobile_menu_options = document.getElementById('mobile-menu-options-list');
    document.getElementById('hamburguer-botton').addEventListener('click', function(){
        mobile_menu_options.classList.toggle('display');
    });


    //Click event - grid elements
    const elements = document.querySelectorAll('.cell');
    elements.forEach(element => {
        element.addEventListener('click', function(){
            curtain_down();
        });
        
    });

});



function curtain_down(){
    curtain.classList.add('curtain');

    setTimeout(function (){
        curtain.classList.remove('curtain');
    }, 2100);
}