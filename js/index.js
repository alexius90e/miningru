const headerBurgerButton = document.querySelector('.header__burger-button');
const footerBurgerButton = document.querySelector('.footer__burger-button');
const headerNav = document.querySelector('.header__nav');

if (headerBurgerButton && headerNav) {
  headerBurgerButton.addEventListener('click', () => {
    const isActive = headerBurgerButton.classList.contains('active');

    if (isActive) {
      headerBurgerButton.classList.remove('active');
      if (footerBurgerButton) footerBurgerButton.classList.remove('active');
      headerNav.classList.remove('active');
    } else {
      headerBurgerButton.classList.add('active');
      if (footerBurgerButton) footerBurgerButton.classList.add('active');
      headerNav.classList.add('active');
    }
  });

  if (footerBurgerButton) {
    footerBurgerButton.addEventListener('click', () => {
      const isActive = headerBurgerButton.classList.contains('active');

      if (isActive) {
        headerBurgerButton.classList.remove('active');
        footerBurgerButton.classList.remove('active');
        headerNav.classList.remove('active');
      } else {
        headerBurgerButton.classList.add('active');
        footerBurgerButton.classList.add('active');
        headerNav.classList.add('active');
      }
    });
  }
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
        event.target.innerText = 'Развернуть пост';
      } else {
        textEl.style.maxHeight = textEl.scrollHeight + 'px';
        expandEl.style.marginTop = -20 + 'px';
        event.target.innerText = 'Cвернуть пост';
      }
    }
  });
});

////

const postComments = document.querySelectorAll('.post__comments-item');

postComments.forEach((comment) => {
  const answer = comment.querySelector('.post__comments-item-answer');
  const answerExpandBtn = answer.querySelector('.post__comments-item-answer-expand-button');
  const answerAdd = answer.querySelector('.post__comments-item-answer-add');

  if (answer && answerExpandBtn && answerAdd) {
    function hideAnswerAdd() {
      answer.classList.remove('active');
    }

    function showAnswerAdd() {
      answer.classList.add('active');
    }

    function checkAnswerAdd() {
      const isActive = answer.classList.contains('active');
      answerAdd.style.maxHeight = `${isActive ? answerAdd.scrollHeight : 0}px`;
      answerExpandBtn.innerText = isActive ? 'Ответить' : 'Отмена';
    }

    function updateAnswerAdd() {
      const isActive = answer.classList.contains('active');
      if (isActive) hideAnswerAdd();
      if (!isActive) showAnswerAdd();
      checkAnswerAdd();
    }

    checkAnswerAdd();

    answer.addEventListener('click', (event) => {
      const isExpandBtn = event.target === answerExpandBtn;
      if (isExpandBtn) updateAnswerAdd();
    });
  }

  const branch = comment.querySelector('.post__comments-item-branch');
  const branchExpandBtn = branch.querySelector('.post__comments-item-branch-expand-button');
  const branchContent = branch.querySelector('.post__comments-item-branch-content');

  if (branch && branchExpandBtn && branchContent) {
    function checkBranchContent() {
      const isActive = branch.classList.contains('active');
      const branchBtnText = branchExpandBtn.querySelector(
        '.post__comments-item-branch-expand-button-text'
      );
      if (branchBtnText) branchBtnText.innerText = `${isActive ? 'Свернуть' : 'Развернуть'} ветку`;
    }

    function updateBranchContent() {
      const isActive = branch.classList.contains('active');
      if (isActive) branch.classList.remove('active');
      if (!isActive) branch.classList.add('active');
      checkBranchContent();
    }

    checkBranchContent();

    branchExpandBtn.addEventListener('click', (event) => {
      const isExpandBtn = event.target === branchExpandBtn;
      if (isExpandBtn) {
        updateBranchContent();
      }
    });
  }
});


////

const labelPasswords = document.querySelectorAll('.label-password');

labelPasswords.forEach(label => {
  const input = label.querySelector('.label-password__input')
  const show = label.querySelector('.label-password__show')

  if (show && input) {
    show.addEventListener('mousedown', (event) => {
      event.currentTarget.classList.add('active')
      input.setAttribute('type', 'text')
    })

    show.addEventListener('mouseup', (event) => {
      event.currentTarget.classList.remove('active')
      input.setAttribute('type', 'password')
    })
  }
})