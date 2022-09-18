let nanvBar = document.getElementById('navbar');
let sections = document.getElementsByTagName('section');

// Fill the navbar
for (let section of sections) {
	let title = section.getAttribute('data-title');
	nanvBar.innerHTML += `
        <li>
            <button class="nav-btn" data-section="${title}">${title}</button>
        </li>
    `;
}

// get created navbar buttons and add click listeners to them
let buttons = document.getElementsByClassName('nav-btn');

for (let button of buttons) {
	button.addEventListener('click', () => {
		for (let section of sections) {
			 // Scroll into the specefix section with the same title
			if (section.getAttribute('data-title') === button.getAttribute('data-section')) {
				section.scrollIntoView({behavior: 'smooth'});
			}
		}
	});
}

// Add active class to sections in the viewport
window.addEventListener('scroll', () => {
	for (let section of sections) {
		let rect = section.getBoundingClientRect();
		let viewportHeight = window.innerHeight;
		if (
			(rect.top >= 0 && rect.top <= viewportHeight) && // if top is in the viewport 
			(rect.bottom <= viewportHeight && rect.bottom >= 0) && // if bottom is in the viewport
			!section.classList.contains('active') // if the section isn't active
		) {
			section.classList.add('active');
		} else {
			section.classList.remove('active');
		}
	}
});
