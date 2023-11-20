const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menuBar = document.querySelector('.menu-bar');

menuBtn.addEventListener('click', () => {
	menuBar.style.display = 'block';
	menuBtn.style.display = 'none';
	closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
	menuBar.style.display = 'none';
	menuBtn.style.display = 'block';
	closeBtn.style.display = 'none';
});
