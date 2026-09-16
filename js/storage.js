const storage = window.localStorage;
const MAX_ROWS = 10;
export function put(submit){
    let table = getTable() || [];
    table.push(submit);
    if (table.length > MAX_ROWS){
        table.shift();
    }
    storage.setItem("table", JSON.stringify(table));
}

export function getTable(){
    return JSON.parse(storage.getItem("table")) || [];
}

export function getLastId(){
    if (get().length == 0){
        return 0;
    }
    return Math.max(...get().map(item => item.id));
}