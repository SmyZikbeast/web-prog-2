import {addButton, getCheckbox, getText} from './inputs.js';
import {put, getTable, getLastId} from './storage.js';
import submittion from './submittion.js';
import {get, post} from './checker.js';
const form = document.getElementById('form')
const table = document.getElementById('result-table');
const tbody = document.getElementById('result-table-body');
const error = document.getElementById('error-field');
const MAX_ROWS = 10;
let rows = 0;

let x;
let y;
let r;
function addNewLine(x,y,r){
    let submit = get(x,y,r);
    put(submit);
    addLine(submit);
}

function addLine(submit){
    rows++;
    if (rows > MAX_ROWS){
        table.deleteRow(MAX_ROWS);
    }
    const newRow = tbody.insertRow(0);
    let time = new Date(submit.localtime);
    newRow.insertCell(0).textContent = submit.id;
    newRow.insertCell(1).textContent = submit.x;
    newRow.insertCell(2).textContent = submit.y;
    newRow.insertCell(3).textContent = submit.r;
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
    newRow.insertCell(6).textContent = submit.time;
}

export function handleTable(){
    updateTable();
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        getCheckbox('.r-check', updateR);
        getText('y-text', updateY, -5, 5);
        console.log("x = " + x + " y = " + y + " r = " + r);
        if (x == null){
            error.innerText = 'wrong x value';
        } else if (y == null){
            error.innerText = 'wrong y value';
        } else if (r == null){
            error.innerText = 'wrong r value';
        } else {
            addNewLine(x,y,r);
            error.innerText = '';
        }
    }
    )
}

function updateTable(){
    rows = 0;
    tbody.innerHTML = '';
    getTable().forEach((submittion) => {
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
setInterval(checkTimezone, 500);
