function sideMenuToggle(){
    document.querySelector(".sideBar").classList.toggle("sideBarShow")
}

// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))