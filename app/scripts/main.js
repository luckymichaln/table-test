let table = document.querySelector('.table');
let button = document.querySelector('.js-button');
let buttons = document.querySelectorAll('.js-button');
let row = document.querySelector('.js-row');
let rows = document.querySelectorAll('.js-row');
let rowItemButton = document.querySelectorAll('.row__item-button');
let iconTrashCan = document.querySelectorAll('.trash-can');

let activeClass = 'row_active';
let deleteConfirmClass = 'js-delete-confirm';

function clearRows() {
    rows.forEach(row => row.classList.remove(activeClass));
}

function activateRow(ev) {
    let clickedRow = this.parentElement.parentElement;

    ev.stopPropagation();
    clearRows();
    clickedRow.classList.add(activeClass);

    if (this.classList.contains(deleteConfirmClass)) {
        let rowToDelete = this.parentElement.parentElement;
        table.removeChild(rowToDelete);
    }
    
    this.classList.add(deleteConfirmClass);
}

window.addEventListener('click', clearRows);
buttons.forEach(button => button.addEventListener('click', activateRow));
