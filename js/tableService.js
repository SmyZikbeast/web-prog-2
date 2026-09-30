import {getLastId} from './storage.js';
import Point from './point.js';
import Submittion from './submittion.js';
export async function submit_point(x, y, r){
    let id = getLastId() + 1;
    let data = await post(id, x, y, r);
    let submission = new Submittion(
    data.id,
    data.x,
    data.y,
    data.r,
    data.localtime,
    data.time,
    data.result
);
    return submission;
}

async function post(id,x,y,r) {
    let url = "/fcgi-bin/server.jar?";   
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new Point(id, x, y, r))
    });
    return response.json();
}