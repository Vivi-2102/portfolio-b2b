// MENU RESPONSIVO

export function initMenuToggle() {
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

```
// Evita erros caso os elementos não existam na página
if (!menuToggle || !navMenu) {
    return;
}

// Abre e fecha o menu
menuToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');

    // Atualiza o estado de acessibilidade
    menuToggle.setAttribute('aria-expanded', String(isActive));

    // Atualiza o texto do botão
    menuToggle.setAttribute(
        'aria-label',
        isActive ? 'Fechar menu' : 'Abrir menu'
    );
});


// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');

        // Mantém a acessibilidade sincronizada
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
});
```

}
