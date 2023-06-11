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
animateBoxes();



const newButton = document.querySelector("#newGrid");
newButton.addEventListener('click' , () => {
    let amount = parseInt(prompt("Please enter a number for the next grid size: "));
    grid.innerHTML = '';

    if(amount > 100) {
        addRows(100);
        addBoxes(100);
        animateBoxes();
    } else {
        addRows(amount);
        addBoxes(amount);
        animateBoxes();
    }; 
});

function animateBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'black';
    });
});
};




