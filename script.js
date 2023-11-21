const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menuBar = document.querySelector('.menu-bar');

function toggleElement(e) {
	e.querySelector('.items').classList.toggle('show');
}

const skillsSection = (() => {
	const skills = document.querySelectorAll('#skills .skill');
	skills.forEach((element) => {
		element.addEventListener('click', function () {
			toggleElement(this);
		});
	});
	return { skills };
})();

menuBtn.addEventListener('click', () => {
	// menuBar.style.display = 'block';
	menuBar.classList.add('active');

	menuBtn.style.display = 'none';
	closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
	// menuBar.style.display = 'none';
	menuBar.classList.remove('active');

	menuBtn.style.display = 'block';
	closeBtn.style.display = 'none';
});
