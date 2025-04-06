function changeTheme(bg, text, nav, hero, button, card) {
    document.documentElement.style.setProperty('--background-color', bg);
    document.documentElement.style.setProperty('--text-color', text);
    document.documentElement.style.setProperty('--navbar-color', nav);
    document.documentElement.style.setProperty('--hero-color', hero);
    document.documentElement.style.setProperty('--button-color', button);
    document.documentElement.style.setProperty('--card-color', card);
  }
  
  // Exemplo:
  changeTheme('#000000', '#ffffff', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)', '#ff5722', '#1a1a1a');
  