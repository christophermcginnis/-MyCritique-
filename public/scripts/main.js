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

Userbtn.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault;
    if(notificationsPopup.classList.contains('slideleft')){
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.add('slideright')
    }
    else if (messagesPopup.classList.contains('slideleft')){
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.add('slideright')
    }

    if(profilePopup.classList.contains('slideright')){
    profilePopup.classList.remove('slideleft')
    profilePopup.classList.remove('slideright')

    void window.offsetWWidth;

    profilePopup.classList.add('slideleft')
    }
    else if(profilePopup.classList.contains('slideleft')){
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.remove('slideright')
    
        void window.offsetWWidth;
    
        profilePopup.classList.add('slideright')
    }
    else {
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.remove('slideright')
    
        void window.offsetWWidth;
    
        profilePopup.classList.add('slideleft')
        }
    

})

/* Controls Notifications popup */
const notificationsBtn = document.querySelector('.notifications');
const notificationsPopup = document.querySelector('.popup-notifications');

notificationsBtn.addEventListener('click', (e) => {
    console.log('working')
    e.stopPropagation()
    e.preventDefault;
    if(profilePopup.classList.contains('slideleft')){
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.add('slideright')
    }
    else if (messagesPopup.classList.contains('slideleft')){
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.add('slideright')
    }

    if(notificationsPopup.classList.contains('slideright')){
    notificationsPopup.classList.remove('slideleft')
    notificationsPopup.classList.remove('slideright')

    void window.offsetWWidth;

    notificationsPopup.classList.add('slideleft')
    }
    else if(notificationsPopup.classList.contains('slideleft')){
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.remove('slideright')
    
        void window.offsetWWidth;
    
        notificationsPopup.classList.add('slideright')
    }
    else {
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.remove('slideright')
    
        void window.offsetWWidth;
    
        notificationsPopup.classList.add('slideleft')
        }
    

})

/* Controls Messages popup */
const messagesBtn = document.querySelector('.messages');
const messagesPopup = document.querySelector('.popup-messages');


messagesBtn.addEventListener('click', (e) => {
    console.log('working')
    e.stopPropagation()
    e.preventDefault;
    if(profilePopup.classList.contains('slideleft')){
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.add('slideright')
    }
    else if (notificationsPopup.classList.contains('slideleft')){
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.add('slideright')
    }

    if(messagesPopup.classList.contains('slideright')){
    messagesPopup.classList.remove('slideleft')
    messagesPopup.classList.remove('slideright')

    void window.offsetWWidth;

    messagesPopup.classList.add('slideleft')
    }
    else if(messagesPopup.classList.contains('slideleft')){
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.remove('slideright')
    
        void window.offsetWWidth;
    
        messagesPopup.classList.add('slideright')
    }
    else {
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.remove('slideright')
    
        void window.offsetWWidth;
    
        messagesPopup.classList.add('slideleft')
        }
    

})

/* Closes PopUp */
/* Only declared here for scope */
const recentSearches = document.querySelector('.popup-search');
window.addEventListener('click', (e) => {
    
    if(navBar[1].classList.contains('transition-slide-down')){
        navBar[1].classList.remove('transition-slide-down')
        navBar[1].classList.add('transition-slide-up')
    }

    if(profilePopup.classList.contains('slideleft')){
        profilePopup.classList.remove('slideleft')
        profilePopup.classList.add('slideright')
    }
    else if (notificationsPopup.classList.contains('slideleft')){
        notificationsPopup.classList.remove('slideleft')
        notificationsPopup.classList.add('slideright')
    }
    else if (messagesPopup.classList.contains('slideleft')){
        messagesPopup.classList.remove('slideleft')
        messagesPopup.classList.add('slideright')
    }
    else if (recentSearches.classList.contains('slidedown')){
        recentSearches.classList.remove('slidedown')
        recentSearches.classList.add('slideup')
    }
})

/* Search Popup */
const searchBtnMobile = document.querySelector('.search');
const logo = document.getElementById('logo')
const icons = document.querySelectorAll('.home-icon')
const searchBar = document.getElementById('notification-bar-search')
const closeSearch = document.getElementById('close-search')
const searchBtn = document.getElementById('site-search');

searchBtnMobile.addEventListener('click', () => {
    logo.style = 'display: none;';
    icons.forEach((e) => {
        e.style = "display: none;"
    })
    searchBar.style = " display: initial"
    searchBar.classList.add('visible')
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
    searchBar.style = " display: none"
    searchBar.classList.remove('visible')
})

searchBtn.addEventListener('input', (e) => {
    e.stopPropagation();
    recentSearches.classList.remove('slideup')
    recentSearches.classList.add('slidedown')
})



