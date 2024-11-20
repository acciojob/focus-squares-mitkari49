// Select all elements with the class "square"
let boxs = document.querySelectorAll(".square");

boxs.forEach((box, index) => {
  box.addEventListener('mouseover', () => {
    // Change the color of other squares to Coffee
    boxs.forEach((s, i) => {
      if (i !== index) {
        s.style.backgroundColor = '#6F4E37'; // Coffee
      }
    });
  });

  box.addEventListener('mouseleave', () => {
    // Reset all squares to Lavender
    boxs.forEach(s => {
      s.style.backgroundColor = '#E6E6FA'; // Lavender
    });
  });
});
