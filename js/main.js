const profile = document.getElementById('profile')
const login = document.getElementById('login')
const toggleMenu = document.getElementById('toggle-menu')
const btnExit = document.getElementById('exit')
const btnNavMenuOpenSideBar = document.getElementById('nav-toggle-button')
const sideBarMenu = document.getElementById('nav-toggle-menu')
const adsCircle = document.getElementsByClassName('partner')

// Меняем местами рекламу в блоке
function adsCircleSwaper () {
    if (!adsCircle[3].hidden){
        adsCircle[0].hidden = false
        adsCircle[1].hidden = false
        adsCircle[2].hidden = false
        adsCircle[3].hidden = true
        adsCircle[4].hidden = true
        adsCircle[5].hidden = true
    }else {
        adsCircle[0].hidden = true
        adsCircle[1].hidden = true
        adsCircle[2].hidden = true
        adsCircle[3].hidden = false
        adsCircle[4].hidden = false
        adsCircle[5].hidden = false
    }
    setTimeout(adsCircleSwaper, 10 * 1000)
}

if (window.innerWidth <= 480) adsCircleSwaper()
// Меняем местами рекламу в блоке





btnNavMenuOpenSideBar.addEventListener('click', (event) => {
    event.cancelBubble = true
    if (sideBarMenu.style.left !== "0px") {
        sideBarMenu.style.left = "0px"
    }else{
        sideBarMenu.style.left = "-100%"
    }
})

sideBarMenu.addEventListener('click', (event) => {
    event.cancelBubble = true
})




profile.addEventListener('click', (event) => {
    toggleMenu.hidden = !toggleMenu.hidden
    event.cancelBubble = true
})

toggleMenu.addEventListener('click', (event) => {
    event.cancelBubble = true
})

document.addEventListener('click', (event) => {
    if (toggleMenu.hidden == false) {
        toggleMenu.hidden = true
    }else if(sideBarMenu.style.left = "0px") {
        sideBarMenu.style.left = "-100%"
    }

})

btnExit.addEventListener('click', () => {
    profile.hidden = !profile.hidden
    login.hidden = !login.hidden
})

login.addEventListener('click', () => {
    login.hidden = !login.hidden
    profile.hidden = !profile.hidden
    toggleMenu.hidden = true
})

function toggleCategoriesDropdown (event) {
    const toggle = event.target.closest('.cat-item').querySelector('.cat-item-dropDown')
    if(toggle) toggle.hidden = !toggle.hidden
}



