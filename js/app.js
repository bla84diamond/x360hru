// Мобильное меню (без изменений - безопасно)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Модальное окно (безопасная версия)
const modal = (() => {
  const createModal = () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const content = document.createElement('div');
    content.className = 'modal-content';
    
    const title = document.createElement('h3');
    title.textContent = 'Вызов мастера';
    
    const form = document.createElement('form');
    form.id = 'callForm';
    
    // Создаем элементы вручную
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Ваше имя';
    nameInput.required = true;
    
    const telInput = document.createElement('input');
    telInput.type = 'tel';
    telInput.placeholder = 'Телефон';
    telInput.required = true;
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Вызвать';
    
    // Собираем структуру
    form.append(nameInput, telInput, submitBtn);
    content.append(title, form);
    modal.append(content);
    
    return modal;
  };
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