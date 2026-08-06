// Roda antes da hidratação para aplicar o tema salvo sem flash.
// "light"/"dark" força o tema; ausência de valor (ou "system") segue o SO via CSS.
export const THEME_STORAGE_KEY = "theme";

export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
`;
