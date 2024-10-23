var typed = new Typed(".typing",{
    strings:["Web Designer","Frontend Developer","Music Producer","Video Editor"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');  // Toggle the hamburger icon to cross
    document.getElementById('nav-list').classList.toggle('active');  // Show/hide the menu list
});

