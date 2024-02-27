document.addEventListener("DOMContentLoaded", function() {
    const headerDiscoverUsLink = document.querySelector('.js-discover-us-section')
    const navbar = document.querySelector('.js-nav')

    function showHeadDiscoverUsLink() {
        headerDiscoverUsLink.classList.remove("hide")
        navbar.classList.remove("hide")
    }

    document.addEventListener("mouseover", showHeadDiscoverUsLink)


    const svgHeaderDiscoverUs = document.querySelector('.js-discover-us-svg')
    svgHeaderDiscoverUs.addEventListener("click", function() {
        document.querySelector(".js-main-section").scrollIntoView({ behavior: "smooth" })
    })
})


