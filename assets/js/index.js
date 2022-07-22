document.addEventListener('DOMContentLoaded', function(){


    // Click event - mobile menu
    const mobile_menu_options = document.getElementById('mobile-menu-options-list');
    document.getElementById('hamburguer-botton').addEventListener('click', function(){
        
        if(mobile_menu_options.classList.contains('display')){
            mobile_menu_options.classList.remove('display');
        }
        else{
            mobile_menu_options.classList.add('display');
        }

    });


});