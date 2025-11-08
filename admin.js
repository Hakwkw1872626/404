  const ADMIN_PASS = 'admin123'; 
    const ADMIN_URL = './admin.html'; 

    const adminLink = document.getElementById('adminLink');
    const modal = document.getElementById('adminModal');
    const input = document.getElementById('adminPasswordInput');
    const submitBtn = document.getElementById('submitAdminBtn');
    const cancelBtn = document.getElementById('cancelAdminBtn');
    const errorText = document.getElementById('adminError');

    function openModal() {
      input.value = '';
      errorText.classList.add('hidden');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      input.focus();
    }

    function closeModal() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    if (adminLink) {
      adminLink.addEventListener('click', function(e){
        e.preventDefault();
        openModal();
      });
    }

    function checkPassword() {
      const val = input.value;
      if (!val) {
        errorText.textContent = 'Введите пароль';
        errorText.classList.remove('hidden');
        return;
      }
      if (val === ADMIN_PASS) {
        window.location.href = ADMIN_URL;
      } else {
        errorText.textContent = 'Неверный пароль';
        errorText.classList.remove('hidden');
        input.value = '';
        input.focus();
      }
    }

    submitBtn.addEventListener('click', checkPassword);
    input.addEventListener('keydown', function(e){
      if (e.key === 'Enter') checkPassword();
      if (e.key === 'Escape') closeModal();
    });
    cancelBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e){
      if (e.target === modal) closeModal();
    });