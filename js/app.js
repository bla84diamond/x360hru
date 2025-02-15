 // Мобильное меню
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Модальное окно
const modal = document.createElement('div');
modal.className = 'modal';

document.querySelectorAll('.btn-call').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Вызов мастера</h3>
        <form id="callForm">
          <input type="text" placeholder="Ваше имя" required>
          <input type="tel" placeholder="Телефон" required>
          <button type="submit">Вызвать</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
  });
});

// Закрытие модалки
modal.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});