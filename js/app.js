// Мобильное меню (без изменений - безопасно)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Модальное окно (безопасная версия)
const modal = (() => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  // ... код createModal из примера выше
  
  return modal;
})();

document.querySelectorAll('.btn-call').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
  });
});

modal.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.classList.remove('active');
  }
});