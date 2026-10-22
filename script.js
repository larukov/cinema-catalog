// Переключение темы: светлая / тёмная
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const text = document.getElementById('themeText');
  const KEY = 'marvel-catalog-theme';

  // Запоминаем выбранную тему, иначе берём тему системы
  const saved = localStorage.getItem(KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(saved || (prefersLight ? 'light' : 'dark'));

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
    localStorage.setItem(KEY, next);
  });
})();
