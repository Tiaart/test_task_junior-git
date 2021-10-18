// Модальное окно (открыть/закрыть)
const btnClose = document.querySelector('.modal__btn');
const modal =  document.querySelector('.modal-bg');
const btnOpen = document.querySelector('.header__btn');

btnOpen.addEventListener('click', () =>{
    modal.classList.remove('modal-close');
})

btnClose.addEventListener('click', () =>{
    modal.classList.add('modal-close');
})

// Переключение между табами:

document.querySelector('.nav__tabs-list').addEventListener('click', getTab);

function getTab(event) {
    
    if (event.target.className == 'nav__tabs-item') {
        let dataTab = event.target.getAttribute('data-tab');
        let tabsItem = document.querySelectorAll('.nav__tabs-item');
        for (let item of tabsItem) {
            item.classList.remove('tab_active')
        }
        event.target.classList.add('tab_active');
        let tabsInner = document.querySelectorAll('.tabs__content');
        for (i = 0; i < tabsInner.length; i++) {
            if (i == dataTab) {
                tabsInner[i].style.display = 'block';
            }
            else {
                tabsInner[i].style.display = 'none';
            }
        }
    }
}

// Изменение имени пользователя:

btnOpen.addEventListener('click', getLogin(saveInputUsers));

function getLogin(callback) {

    const checkboxInput = document.querySelector('.modal__checkbox-input');
    let userLogin = document.querySelector('.modal_login');
   
    checkboxInput.addEventListener('change', () => {
        if (checkboxInput.checked) {
            localStorage.setItem('login', userLogin.value);
           
        } else {
            document.querySelector('.modal_login').value = '';
            document.querySelector('.modal_password').value = '';
        }
    });

    btnClose.addEventListener('click', (event) => {
        event.preventDefault();
        callback(userLogin);
        btnExit();
    });

    onLoad();
}

function saveInputUsers(userLogin) {
    userLogin.value = localStorage.getItem('login');
    document.querySelector('.users').setAttribute('placeholder', userLogin.value);
  
}

function onLoad() {
    window.onload = document.querySelector('.users').setAttribute('placeholder', `${localStorage.getItem('login')}`);
}

function btnExit() {
    btnOpen.innerHTML = 'Выйти';
    btnOpen.classList.add('header__btnExit');
    btnOpen.classList.remove('header_btnhover');
    btnOpen.addEventListener('click', () =>{
        modal.classList.add('modal-close'); 
    })
}

if (window.innerWidth <= 1000) {
    document.querySelector('.TVchannel__inner').removeAttribute('data-simplebar');
}
