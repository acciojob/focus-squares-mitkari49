//your JS code here. If required.
let boxs = document.querySelectorAll(".square");

boxs.forEach ((box, index) => {
	box.addEventListener('mouseenter', () => {
		boxs.forEach((s, i) => {
			if (i !== index) {
				s.style.backgroundColor = '#6F4E37';
			}
		});
	})
	box.addEventListener('mouseleave', () => {
		boxs.forEach(s => {
			s.style.backgroundColor = '#E6E6FA';
		});
	});
});
