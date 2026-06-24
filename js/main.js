/* ================================================
   كويك بلس - JavaScript الرئيسي
   الوظائف التفاعلية لجميع الصفحات
   ================================================ */

// تبديل الوضع الليلي
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const moonIcons = document.querySelectorAll('.moon-icon');
  const sunIcons = document.querySelectorAll('.sun-icon');
  
  moonIcons.forEach(function(icon) {
    if (theme === 'dark') {
      icon.classList.add('d-none');
    } else {
      icon.classList.remove('d-none');
    }
  });
  
  sunIcons.forEach(function(icon) {
    if (theme !== 'dark') {
      icon.classList.add('d-none');
    } else {
      icon.classList.remove('d-none');
    }
  });
}

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  
  // زر تبديل الوضع الليلي
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // تأثير التمرير لشريط التنقل
  const navbar = document.querySelector('.custom-navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 12) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
});

// تحديد الرابط النشط في القائمة
(function setActiveNavLink() {
  var currentPage = window.location.pathname.split('/').pop();
  if (currentPage === '' || currentPage === undefined) {
    currentPage = 'index.html';
  }
  
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else if (href !== '#' && href !== '') {
      link.classList.remove('active');
    }
  });
})();
