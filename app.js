const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseover', () => {
  let x = Math.random() * 500; // generate a random x-coordinate
  let y = Math.random() * 300; // generate a random y-coordinate

 noButton.style.transform=`translate(${x}px,${y}px)`;
});