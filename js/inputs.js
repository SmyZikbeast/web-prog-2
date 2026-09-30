export function addButton(varName, callback){
    const inputs = document.querySelectorAll(varName);
    inputs.forEach((input) => {
        input.addEventListener('click', (event) =>{
            inputs.forEach((input) => input.style.backgroundColor = '');
            input.style.backgroundColor = '#82aef5';
            callback(event.target.value)
        })
    })
}

export function getCheckbox(varName, callback){
    const inputs = document.querySelectorAll(varName);
    let val;
    let ctr = 0;
    inputs.forEach((input) => {
        if (input.checked){
            val = input.value;
            ctr++;
        }
    })
    ctr == 1 ? callback(val) : callback(null);
}

export function getText(varName, callback, min, max){
    const input = document.getElementById(varName);
    let val = +input.value.replace(',', '.');
    if (input.value.length == 0 || input.value.length > 10){
        callback('wrong length');
    } else if (!isNaN(val) && val >= min && val <=max){
        callback(val);
    } else {
        callback(null);
    }
}

export function addText(varName){
    const input = document.getElementById(varName);
    input.addEventListener('input', (event) => {
        if (input.value.length > 10){
            input.style.color = 'red';
        } else {
            input.style.color = 'black';
        }
    })
}