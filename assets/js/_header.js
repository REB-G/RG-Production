const navMenuSvg = document.querySelector('.js-phone-nav-menu-svg')
const navCloseMenuSvg = document.querySelector('.js-phone-nav-close-menu-svg')
const headerDiscoverUsLink = document.querySelector('.js-discover-us-section')
const navbar = document.querySelector('.js-nav')
const svgHeaderDiscoverUs = document.querySelector('.js-discover-us-svg')

const start = () => {
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(showHeadDiscoverUsLink, 1000);
        showHeadDiscoverUsLink()
        openAndCloseNavMenu()
        showMainSection()
    })
}

const showHeadDiscoverUsLink = () => {
    headerDiscoverUsLink.classList.remove("hide")
    navbar.classList.remove("hide")
}

const openAndCloseNavMenu = () => {
    navMenuSvg.addEventListener('click', (event) => {
        navbar.classList.remove('hide-menu-for-phone-size')
        navbar.classList.add('show-phone-nav')
        navCloseMenuSvg.classList.remove('hide-phone-nav-svg')
        navMenuSvg.classList.add('hide-phone-nav-svg')
    })
    navCloseMenuSvg.addEventListener('click', (event) => {
        navbar.classList.add('hide-menu-for-phone-size')
        navbar.classList.remove('show-phone-nav')
        navCloseMenuSvg.classList.add('hide-phone-nav-svg')
        navMenuSvg.classList.remove('hide-phone-nav-svg')
    })
}

const showMainSection = () => {
    svgHeaderDiscoverUs.addEventListener("click", function() {
        document.querySelector(".js-main-section").scrollIntoView({ behavior: "smooth" })
    })
}

start()
