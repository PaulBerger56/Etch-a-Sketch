const grid = document.querySelector('#gridContainer');

function addRows(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
  }
}

function addBoxes(num) {
  const rows = document.querySelectorAll('.row');

  rows.forEach((row) => {
    for (let i = 0; i < num; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      row.appendChild(box);
    }
  });
}

addRows(16);
addBoxes(16);

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'red';
    });
});




