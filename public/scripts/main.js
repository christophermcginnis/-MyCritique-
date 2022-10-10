/* Controls Navigation Bar animation */
const navBar = document.querySelectorAll('nav')

navBar[1].addEventListener('click', (e) => 
{   e.stopPropagation()
    e.preventDefault;
    navBar[1].classList.remove('transition-slide-up')
    navBar[1].classList.remove('transition-slide-down')

    void window.offsetWWidth;

    navBar[1].classList.add('transition-slide-down')
})


/* Controls Profile popup */
const Userbtn = document.querySelector('.user');
const profilePopup = document.querySelector('.popup-profile');
const logoutBtn = document.getElementById('logout-btn')
usertoggle = false;

if(Userbtn == null){
    void(0)
}else{

Userbtn.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault;

    if(usertoggle == false){
        usertoggle = true;
    }else if (usertoggle == true){
        usertoggle = false;
    }
    console.log(usertoggle)
    
    if(usertoggle == true){
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.remove('slideright')

        void window.offsetWWidth

        profilePopup.classList.add('slideleft');
    }else{
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.remove('slideright')

        void window.offsetWWidth
        profilePopup.classList.add('slideright');
    }


})

Userbtn.addEventListener('focus', (e) => {
    e.stopPropagation()
    e.preventDefault;
    if(notificationsPopup.classList.contains('slideleft')){
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.add('slideright')
        notificationstoggle = false
    }
    else if(messagesPopup.classList.contains('slideleft')){
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.add('slideright')
        messagestoggle = false
    }
    profilePopup.classList.remove('slideright')
    profilePopup.classList.remove('slideleft')

    void window.offsetWWidth

    profilePopup.classList.add('slideleft')

})

logoutBtn.addEventListener('focusout', (e) => {
    e.stopPropagation()
    e.preventDefault()
    profilePopup.classList.remove('slideleft')
    profilePopup.classList.remove('slideright')

    void window.offsetWWidth

    profilePopup.classList.add('slideright')
})
}
/* Controls Notifications popup */
const notificationsBtn = document.querySelector('.notifications');
const notificationsPopup = document.querySelector('.popup-notifications');
notificationstoggle = false

if(notificationsBtn == null){
    void(0)
}
    
else {

notificationsBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault;
    if(notificationstoggle == false){
        notificationstoggle = true;
    }else if (notificationstoggle == true){
        notificationstoggle = false;
    }
    console.log(notificationstoggle)
    
    if(notificationstoggle == true){
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.remove('slideright')

        void window.offsetWWidth

        notificationsPopup.classList.add('slideleft');
    }else{
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.remove('slideright')

        void window.offsetWWidth
        notificationsPopup.classList.add('slideright');
    }

})

notificationsBtn.addEventListener('focus', (e) => {
    e.stopPropagation()
    e.preventDefault;
    if(profilePopup.classList.contains('slideleft')){
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.add('slideright')
        usertoggle = false
    }
    else if(messagesPopup.classList.contains('slideleft')){
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.add('slideright')
        messagestoggle = false
    }
    notificationsPopup.classList.remove('slideright')
    notificationsPopup.classList.remove('slideleft')

    void window.offsetWWidth

    notificationsPopup.classList.add('slideleft')

})
}

/* Controls Messages popup */
const messagesBtn = document.querySelector('.messages');
const messagesPopup = document.querySelector('.popup-messages');
messagestoggle = false

if(messagesBtn == null) {
    void(0)
}else {

messagesBtn.addEventListener('click', (e) => {
    console.log('working')
    e.stopPropagation()
    e.preventDefault;
    if(messagestoggle == false){
        messagestoggle = true;
    }else if (messagestoggle == true){
        messagestoggle = false;
    }
    console.log(messagestoggle)
    
    if(messagestoggle == true){
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.remove('slideright')

        void window.offsetWWidth

        messagesPopup.classList.add('slideleft');
    }else{
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.remove('slideright')

        void window.offsetWWidth
        messagesPopup.classList.add('slideright');
    }

})

messagesBtn.addEventListener('focus', (e) => {
    e.stopPropagation()
    e.preventDefault;
    if(profilePopup.classList.contains('slideleft')){
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.add('slideright')
        usertoggle = false
    }
    else if(notificationsPopup.classList.contains('slideleft')){
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.add('slideright')
        notificationstoggle = false
    }
    messagesPopup.classList.remove('slideright')
    messagesPopup.classList.remove('slideleft')

    void window.offsetWWidth

    messagesPopup.classList.add('slideleft')

})

}

/* Search Popup */
const searchBtnMobile = document.querySelector('.search');
const logo = document.getElementById('logo')
const icons = document.querySelectorAll('.home-icon')
const searchBar = document.getElementById('notification-bar-search')
const closeSearch = document.getElementById('close-search')
const searchBtn = document.getElementById('site-search');
const recentSearches = document.querySelector('.popup-search');
const btns = document.querySelectorAll('.bar-btn');
const login_signup_btns = document.querySelectorAll('.nav-btn')
searchtoggle = false

searchBtnMobile.addEventListener('click', () => {
    logo.style = 'display: none;';
    icons.forEach((e) => {
        e.style = "display: none;"
    })

    login_signup_btns.forEach((e) => {
        e.style = "display: none;"
    })
    
    searchBar.style = " display: initial"
    searchBar.classList.add('visible')

    if(searchtoggle == false){
        searchtoggle = true;
    }else if (searchtoggle == true){
        searchtoggle = false;
    }

        btns.forEach((e) => {
            e.style = "visibility: hidden;"
        })
    
})

var width,height;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;
    if(window.width > 970) {
        searchBar.style = " display: initial"
        logo.style = 'display: initial;';
        icons.forEach((e) => {
        e.style = "display: 'initial';"
    })
    
}else if(searchBar.classList.contains('visible')){
    logo.style = 'display: none';
        icons.forEach((e) => {
        e.style = "display: none;"
    })
}
else {
     logo.style = 'display: initial;';
        icons.forEach((e) => {
        e.style = "display: '';"
    })
    searchBar.style = " display: none"
}
}

closeSearch.addEventListener('click', () => {
    logo.style = 'display: initial;';
    icons.forEach((e) => {
        e.style = "display: '';"
    })

    login_signup_btns.forEach((e) => {
        e.style = "display: '';"
    })
    searchBar.style = " display: none"
    searchBar.classList.remove('visible')

    btns.forEach((e) => {
        e.style = "visibility: visible;"
    })
})

searchBtn.addEventListener('input', (e) => {
    /*
    recentSearches.classList.remove('slideup')
    recentSearches.classList.add('slidedown')
    if (searchBtn.value == ''){
        recentSearches.classList.remove('slidedown')
        recentSearches.classList.add('slideup')
    }
    */
})

searchBar.addEventListener('submit', (e) => {
    console.log(searchBtn.value)
})


/* Controls navigations bar focusing */
const homeIcon = document.querySelector('.home');
const moviesIcon = document.querySelector('.movies');

homeIcon.addEventListener('focus', (e) => {
    e.stopPropagation();
    e.preventDefault();

    navBar[1].classList.remove('transition-slide-up')
    navBar[1].classList.remove('transition-slide-down')

    void window.offsetWWidth;

    navBar[1].classList.add('transition-slide-down')

})

moviesIcon.addEventListener('focusout', (e) => {
    e.stopPropagation();
    e.preventDefault();

    navBar[1].classList.remove('transition-slide-up')
    navBar[1].classList.remove('transition-slide-down')

    void window.offsetWWidth;

    navBar[1].classList.add('transition-slide-up')

})

/* Closes PopUp */
/* Only declared here for scope */

window.addEventListener('click', (e) => {
    if(navBar[1].classList.contains('transition-slide-down')){
        navBar[1].classList.remove('transition-slide-down')
        navBar[1].classList.add('transition-slide-up')
    }

    if(profilePopup === null){
        return
    }

    if (notificationsPopup === null){
        return
    }

    if(messagesPopup === null) {
        return
    }

    if(profilePopup.classList.contains('slideleft')){
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.add('slideright')
        usertoggle = false
    }
    else if (notificationsPopup.classList.contains('slideleft')){
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.add('slideright')
        notificationstoggle = false
    }
    else if (messagesPopup.classList.contains('slideleft')){
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.add('slideright')
        messagestoggle = false
    }
    else if (recentSearches.classList.contains('slidedown')){
        recentSearches.classList.remove('slidedown')
        recentSearches.classList.add('slideup')
    }

})


