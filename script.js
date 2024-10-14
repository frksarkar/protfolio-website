// select the html element
const nav = (() => {
	const menuBtn = document.querySelector('.menu-btn');
	const closeBtn = document.querySelector('.close-btn');
	const menuBar = document.querySelector('.menu-bar');
	const navContainer = document.querySelector('nav');
	return { menuBar, menuBtn, closeBtn, navContainer };
})();

// active menu button click handler
const menu = (() => {
	const menu = nav.menuBar.querySelectorAll('a');
	menu.forEach((element) => {
		element.addEventListener('click', function () {
			menu.forEach((element) => {
				if (element.className) {
					return element.classList.remove('active-menu');
				}
			});
			activeSection(this.href);
			this.classList.add('active-menu');
		});
	});
	return menu;
})();

const about = (() => {
	const readMoreBtn = document.querySelector('.read-more');
	const readMoreContent = document.querySelector('.read-more-content');
	return {
		readMoreBtn,
		readMoreContent,
	};
})();

function toggleElement(e) {
	e.querySelector('.items').classList.toggle('show');
}

// show and hide the skills item
const skillsSection = (() => {
	const skills = document.querySelectorAll('#skills .skill');
	skills.forEach((element) => {
		element.addEventListener('click', function () {
			toggleElement(this);
		});
	});
	return { skills };
})();

// show mobile menu bar when clicking on the menu bar button
nav.menuBtn.addEventListener('click', () => {
	// menuBar.style.display = 'block';
	nav.menuBar.classList.add('active');

	nav.menuBtn.style.display = 'none';
	nav.closeBtn.style.display = 'block';
});

// hide mobile menu bar when clicking on the menu bar button
nav.closeBtn.addEventListener('click', () => {
	// menuBar.style.display = 'none';
	nav.menuBar.classList.remove('active');

	nav.menuBtn.style.display = 'block';
	nav.closeBtn.style.display = 'none';
});

// show and hide the read-more content
about.readMoreBtn.addEventListener('click', () => {
	about.readMoreContent.classList.toggle('show-content');
	const isShowContent = about.readMoreContent.className.split(' ')[1];
	console.log(about.readMoreBtn.innerText);
	if (isShowContent) {
		return (about.readMoreBtn.innerText = 'Show less');
	}
	about.readMoreBtn.innerText = 'Show more';
});

// show box shadow down the navbar when scrolling down
window.addEventListener('scroll', () => {
	nav.navContainer.classList.toggle('nav-box-shadow', window.scrollY > 50);
	console.log(window.scrollY);
});

// progress bar width setter
(() => {
	const progressBars = document.querySelectorAll('.progress-bar');
	progressBars.forEach((element) => {
		const width = element.nextElementSibling.innerText;
		const progress = element.firstElementChild;
		if (width && progress) {
			progress.style.width = width;
		}
	});
})();

// active section
const activeSection = (href) => {
	let sectionName = href.split('#')[1];
	if (sectionName === '') {
		sectionName = 'hero-section';
	}
	const sections = document.querySelectorAll('section');
	sections.forEach((section) => {
		section.style.display = 'none';
		if (section.id === sectionName) {
			section.style.display = 'flex';
			console.log(sectionName);
		}
	});
};
