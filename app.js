const hamburgerMenu = document.querySelector('.showMenu');
// const closeMenu = document.querySelector('.closeMenu');

handleClick = (event) => {
  const menu = event.target
  menu.className = 'showHiddenNav'
}

hamburgerMenu.addEventListener('click', handleClick);



