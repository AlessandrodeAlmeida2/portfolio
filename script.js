var typed = new Typed(".multiple-text",{
    strings: ["Full-Stack Developer", "Data Scientist"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
})

// Adicione um evento de clique ao botão de menu hambúrguer para alternar a visibilidade do menu
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
