// ======= Progress Bar Animation =======
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.progress-bar');
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(skillTop < windowHeight - 100){
      if(skill.parentElement.previousElementSibling.textContent.includes('JavaScript')) skill.style.width = '70%';
      if(skill.parentElement.previousElementSibling.textContent.includes('Bootstrap')) skill.style.width = '100%';
      if(skill.parentElement.previousElementSibling.textContent.includes('WordPress')) skill.style.width = '90%';
      if(skill.parentElement.previousElementSibling.textContent.includes('Photoshop')) skill.style.width = '85%';
      if(skill.parentElement.previousElementSibling.textContent.includes('GitHub')) skill.style.width = '100%';
      if(skill.parentElement.previousElementSibling.textContent.includes('HTML')) skill.style.width = '100%';
      if(skill.parentElement.previousElementSibling.textContent.includes('CSS')) skill.style.width = '100%';
    }
  });
});

// ======= Scroll Button =======
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scrollBtn';
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  if(window.scrollY === 0){
    window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'});
  } else {
    window.scrollTo({top:0, behavior:'smooth'});
  }
});

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// بستن منو بعد از کلیک روی لینک
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ======= Smooth Scroll Navbar =======
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

