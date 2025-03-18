const headerBurgerButton = document.querySelector('.header__burger-button');
const headerNav = document.querySelector('.header__nav');

if (headerBurgerButton && headerNav) {
  headerBurgerButton.addEventListener('click', (event) => {
    const isActive = headerBurgerButton.classList.contains('active');

    if (isActive) {
      headerBurgerButton.classList.remove('active');
      headerNav.classList.remove('active');
    } else {
      headerBurgerButton.classList.add('active');
      headerNav.classList.add('active');
    }
  });
}
