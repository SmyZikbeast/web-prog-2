import {getLastId} from './storage.js';
import Point from './point.js';
var id = getLastId();
export function submit_point(x, y, r){
    id++;
    let result = post(id, x, y, r);
    return result;
}

async function post(id,x,y,r) {
    let url = "localhost:22887";   
    let result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new Point(id, x, y, r))
    });
    return result;
}