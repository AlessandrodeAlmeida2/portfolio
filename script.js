window.addEventListener('DOMContentLoaded', (event) => {

  // Adicione um evento de clique ao botão de menu hambúrguer para alternar a visibilidade do menu
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });

  // Scroll sections active link

  /*let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href=' + id + ']').classList.add('active')
        });
      };
    });
  }; */

  var typed = new Typed(".multiple-text",{
    strings: ["Full-Stack Developer", "Data Scientist"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
  })

  // Sticky navbar

  let header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 100);
  });


  // toggle icon navbar

  /*let menuIcon = document.querySelectorAll('#menu-icon');
  let navbar = document.querySelectorAll('.navbar');
  
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('x-xb');
    navbar.classList.toggle('active');
  };*/
});
