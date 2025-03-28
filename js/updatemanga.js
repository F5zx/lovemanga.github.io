document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const items = document.querySelectorAll('.upcoming-item');
    let current = 0;
  
    function nextItem() {
      items[current].classList.remove('active');
      current = (current + 1) % items.length;
      items[current].classList.add('active');
    }
  
    // Автопрокрутка только на десктопе
    if (window.innerWidth > 992) {
      setInterval(nextItem, 5000);
    }
  
    // Закрытие сайдбара при клике снаружи
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 992 && 
          !sidebar.contains(e.target) && 
          !document.querySelector('.sidebar-toggle').contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });
  });
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
  }
  
  // Закрытие сайдбара при клике снаружи
  document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });