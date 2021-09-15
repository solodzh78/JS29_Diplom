const menu = () => {
const popupMenu = document.querySelector('.popup-menu');
const popupDialogMenu = document.querySelector('.popup-dialog-menu');
const menuBtn = document.querySelector('.menu__icon');

// console.log('menu: ', popupMenu);

const showMenu = () => {

	// if (window.innerWidth > 1024) {
	// 	popupDialogMenu.style.right = '639px';
	// } else {
	// 	popupDialogMenu.style.right = '549px';
	// }
};

const toggleMenu = () => {
	// showMenu();
	popupDialogMenu.classList.toggle('showHide-menu');
	if (	popupMenu.style.visibility === 'visible') {
		popupMenu.style.visibility = 'hidden';
	} else {
		popupMenu.style.visibility = 'visible';
	}
	
};

popupMenu.addEventListener('click', e => {
	const target = e.target;
	console.log('target: ', target);
	if (target.classList.contains('close-menu') 
	|| target.classList.contains('menu-link')
	|| (!target.closest('.popup-dialog-menu'))) {
		toggleMenu();
	}
});

menuBtn.addEventListener('click', toggleMenu);

};

export default menu;