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
const themes_btn = document.createElement('h3')
const settings_btn = document.createElement('h3')
const logout_btn = document.createElement('a')
const go_back = document.getElementById('go-back-icon')
const color1 = document.createElement('h3')
const color2 = document.createElement('h3')
const color3 = document.createElement('h3')
usertoggle = false;

if(Userbtn == null){
    void(0)
}
else {
    /* Creates profile menu item SETTINGS */
    go_back.style = 'display: none;'
    profilePopup.classList.add('home-menu')
    settings_btn.classList.add('profile-menu-btns')
    settings_btn.classList.add('settings')
    settings_btn.innerText = 'Settings'
    settings_btn.tabIndex = '4'
    profilePopup.appendChild(settings_btn)

    color1.classList.add('profile-menu-btns')
    color1.innerText = 'Color 1'
    color1.tabIndex = '4'

    color2.classList.add('profile-menu-btns')
    color2.innerText = 'Color 2'
    color2.tabIndex = '4'

    color3.classList.add('profile-menu-btns')
    color3.innerText = 'Color 3'
    color3.tabIndex = '4'

    /* Creates profile menu item LOGOUT */
   
     logout_btn.classList.add('profile-menu-btns')
     logout_btn.classList.add('logout-btn')
     logout_btn.href = '/logout'
     logout_btn.tabIndex = '4'
     logout = document.createElement('h3');
     logout.innerText = "Logout"
     logout_btn.appendChild(logout)
     profilePopup.appendChild(logout_btn)

    settings_btn.addEventListener('click', () => {
        go_back.style = 'display: initial'
        profilePopup.removeChild(settings_btn)
        profilePopup.removeChild(logout_btn)
        profilePopup.classList.remove('home-menu')
        profilePopup.classList.add('settings-menu')
        profilePopup.classList.remove('themes-menu')

        
        themes_btn.classList.add('profile-menu-btns')
        themes_btn.classList.add('themes')
        themes_btn.innerText = 'Themes'
        themes_btn.tabIndex = '4'
        profilePopup.appendChild(themes_btn)
    })

   


if (go_back == null) {
    void(0)
}
else{
go_back.addEventListener('click', () => {
    if (profilePopup.classList.contains('themes-menu')) {
        profilePopup.classList.remove('themes-menu')
        profilePopup.classList.add('settings-menu')
        profilePopup.removeChild(color1)
        profilePopup.removeChild(color2)
        profilePopup.removeChild(color3)
        profilePopup.appendChild(themes_btn)
    }
    else if (profilePopup.classList.contains('settings-menu')) {
        profilePopup.classList.remove('settings-menu')
        profilePopup.classList.add('home-menu')
        profilePopup.removeChild(themes_btn)
        profilePopup.appendChild(settings_btn)
        profilePopup.appendChild(logout_btn)
        go_back.style = 'display: none;'
    }
})}

themes_btn.addEventListener('click', () => {
    profilePopup.removeChild(themes_btn)
    profilePopup.appendChild(color1)
    profilePopup.appendChild(color2)
    profilePopup.appendChild(color3)
    profilePopup.classList.remove('settings-menu')
    profilePopup.classList.remove('home-menu')
    profilePopup.classList.add('themes-menu')
})

color1.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-secondary', '#673291')
})

color2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-secondary', '#234329')
})

color3.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-secondary', '#456494')
})

Userbtn.addEventListener('click', (e) => {
    e.stopPropagation()
    e.preventDefault()

    if(usertoggle == false){
        usertoggle = true;
    }else if (usertoggle == true){
        usertoggle = false;
    }
    
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

/* Closes PopUp */
window.addEventListener('click', (e) => {
    if(navBar[1].classList.contains('transition-slide-down')){
        navBar[1].classList.remove('transition-slide-down')
        navBar[1].classList.add('transition-slide-up')
    }
})


