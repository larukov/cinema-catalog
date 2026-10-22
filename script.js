(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const text = document.getElementById('themeText');

  setTheme('light' );

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    icon.textContent = isDark ? '🌙' : '☀️';
    text.textContent = isDark ? 'Тёмная тема' : 'Светлая тема';
    toggle.setAttribute('aria-pressed', String(isDark));
  }

  toggle.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
})();
