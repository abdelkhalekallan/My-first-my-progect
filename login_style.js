const wrapper =document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-Iink');
const registerLink = document.querySelector('.register-Iink');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
      wrapper.classList.add('active');
}) ;

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    }) ;
btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
  }) ;
  iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
}) ;
