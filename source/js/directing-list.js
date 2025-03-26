const  submunuButtons = document.querySelectorAll('.directing__item-open');
const subList = document.querySelector('.directing__sublist');
const body = document.body;

if(submunuButtons){

submunuButtons.forEach((submenuButton) =>{        
        const submenuOpen = submenuButton.nextElementSibling;
        const submenuIcon = submenuButton;
        submenuButton.addEventListener('click', () => {
            submenuOpen.classList.toggle('directing__sublist--open');
            submenuIcon.classList.toggle('directing__submenu--icon');    
            body.classList.toggle('directing__body');
            if (submenuOpen.classList.contains('directing__sublist--open')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });       
    });
}

