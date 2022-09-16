let nanvBar = document.getElementById("navbar");
let sections = document.getElementsByTagName("section");

// Fill the navbar
for (let section of sections) {
	let title = section.getAttribute("data-title");
	nanvBar.innerHTML += `
        <li>
            <button class="nav-btn" data-section="${title}">${title}</button>
        </li>
    `;
}

let buttons = document.getElementsByClassName("nav-btn");

for (let button of buttons) {
	button.addEventListener("click", () => {
		for (let section of sections) {
			if (
				section.getAttribute("data-title") ===
				button.getAttribute("data-section")
			) {
				section.scrollIntoView();
			}
		}
	});
}

// add scroll event listener to set active state
window.addEventListener("scroll", () => {
	for (let section of sections) {
		let size = section.getBoundingClientRect();
		let viewportHeight = window.innerHeight;
		if (
			size.top > 0 &&
			size.bottom > 0 &&
			size.bottom <= viewportHeight + size.height
		) {
			if (!section.classList.contains("active")) {
				section.classList.add("active");
			}
		} else {
			section.classList.remove("active");
		}
	}
});
