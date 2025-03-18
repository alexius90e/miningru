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

const blogPosts = document.querySelectorAll('.blog-posts__post');

blogPosts.forEach((post) => {
  const expandEl = post.querySelector('.blog-posts__post-expand');
  const textEl = post.querySelector('.blog-posts__post-text');
  const heightLimit = 140;

  if (textEl && expandEl && textEl.scrollHeight > heightLimit) {
    expandEl.style.display = 'flex';
    textEl.style.maxHeight = `${heightLimit}px`;
  }

  post.addEventListener('click', (event) => {
    const isExpandBtn = event.target.classList.contains('blog-posts__post-expand-button');

    if (textEl && expandEl && isExpandBtn) {
      if (textEl.style.maxHeight !== `${heightLimit}px`) {
        textEl.style.maxHeight = `${heightLimit}px`;
        expandEl.style.marginTop = -expandEl.scrollHeight + 'px';
        event.target.innerText = 'Развернуть пост'
      } else {
        textEl.style.maxHeight = textEl.scrollHeight + 'px';
        expandEl.style.marginTop = -20 + 'px';
        event.target.innerText = 'Cвернуть пост'
      }
    }
  });
});
