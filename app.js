const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navRight = document.querySelector('.nav-right');

hamburgerIcon.addEventListener('click', (e) => {
	hamburgerIcon.classList.toggle('cross');
	navRight.classList.toggle('d-none');
});

const switchMode = document.querySelector('.switch-wrapper');
const body = document.querySelector('body');
const switchToggle = document.querySelector('.switch-toggle');
const faToggle = document.querySelector('.switch-toggle > .fa');

switchMode.addEventListener('click', () => {
	body.classList.toggle('dark');
	if (faToggle.classList[1] === 'fa-sun-o') {
		faToggle.classList.remove('fa-sun-o')
		faToggle.classList.add('fa-moon-o')
		faToggle.classList.add('fa-flip-horizontal')
	} else {
		faToggle.classList.remove('fa-moon-o')
		faToggle.classList.remove('fa-flip-horizontal')
		faToggle.classList.add('fa-sun-o')
	}
});