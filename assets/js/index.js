document.addEventListener('DOMContentLoaded', function(){
    
    document.getElementById('hamburguer-botton').addEventListener('click', function(){
        const mobile_menu_options = document.getElementById('mobile-menu-options-list')
        if(mobile_menu_options.classList.contains('display')){
            mobile_menu_options.classList.remove('display');
        }
        else{
            mobile_menu_options.classList.add('display');
        }

    });


});