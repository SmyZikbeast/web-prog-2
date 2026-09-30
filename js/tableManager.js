import {addButton, getCheckbox, getText, addText} from './inputs.js';
import {put, get, getLastId, getLast} from './storage.js';
import {drawPoint, clear, draw} from './canvas.js';
import {submit_point} from './tableService.js';
const form = document.getElementById('form')
const table = document.getElementById('result-table');
const tbody = document.getElementById('result-table-body');
const error = document.getElementById('error-field');

const MAX_ROWS = 10;
let rows = 0;
let x;
let y;
let r;

async function addNewLine(x,y,r){
    let submit = await submit_point(x, y, r);
    put(submit);
    addLine(submit);
}

function addLine(submit){
    rows++;
    if (rows > MAX_ROWS){
        table.deleteRow(MAX_ROWS);
    }
    const newRow = tbody.insertRow(0);
    
    newRow.insertCell(0).textContent = submit.id;
    newRow.insertCell(1).textContent = submit.x;
    newRow.insertCell(2).textContent = submit.y;
    newRow.insertCell(3).textContent = submit.r;
    let time = new Date(submit.time);
    newRow.insertCell(4).textContent = time.toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});
    newRow.insertCell(5).textContent = submit.result;
}

export function handleTable(){
    updateTable();
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        getCheckbox('.r-check', updateR);
        getText('y-text', updateY, -5, 5);
        console.log("x = " + x + " y = " + y + " r = " + r);
        if (x == null){
            error.innerText = 'wrong x value';
        } else if (y == null){
            error.innerText = 'wrong y value';
        } else if (y == 'wrong length'){
            error.innerText = 'wrong y length';
        } else if (r == null){
            error.innerText = 'wrong r value';
        } else {
            await addNewLine(x,y,r);
            drawNewPoint();
            error.innerText = '';
        }
    }
    )
}

function updateTable(){
    rows = 0;
    tbody.innerHTML = '';
    get().forEach((submittion) => {
        addLine(submittion);
    })
}

let timezone = new Date().getTimezoneOffset();
function checkTimezone(){
    let newTimezone = new Date().getTimezoneOffset();
    if (timezone !== newTimezone){
        console.log('timezone changed, updating table');
        timezone = newTimezone;
        updateTable();
    }
    drawNewPoint();
}

function drawNewPoint(){
    clear();
    draw();
    let last = getLast();
    if(last){
        drawPoint(last.x, last.y, last.r);
    }
}

function updateX(value){
    x = value;
}

function updateY(value){
    y = value;
}

function updateR(value){
    r = value;
}

addButton('.x-button', updateX);
addText('y-text');
setInterval(checkTimezone, 500);
