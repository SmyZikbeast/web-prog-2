const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
ctx.translate(canvas.clientWidth/2, canvas.clientHeight/2);
const radius = canvas.height/2 - 40;
const d = canvas.height/2;

export function draw(){
    drawFigure();
    drawAxis();
}

function drawAxis(){
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.beginPath();

    ctx.moveTo(0,  d);
    ctx.lineTo(0, -d);
    ctx.lineTo(-10, -d + 20);
    ctx.moveTo(0, -d);
    ctx.lineTo(10, -d + 20);

    ctx.moveTo(-d, 0);
    ctx.lineTo(d, 0);
    ctx.lineTo(d - 20, 10);
    ctx.moveTo(d, 0);
    ctx.lineTo(d - 20, -10);

    ctx.closePath();
    ctx.stroke();
    
    ctx.font = '22px Arial'
    ctx.fillText('x', d - 20, -10);
    ctx.fillText('y', 10, -d + 20);
    
    ctx.fillText('-R', -radius-5, -10);
    ctx.fillText('-R/2', -radius/2 - 5, -10);

    ctx.fillText('R', radius-5, -10);
    ctx.fillText('R/2', radius/2 - 5, -10);

    ctx.fillText('-R', 10, radius + 10);
    ctx.fillText('-R/2', 10, radius/2 + 10);

    ctx.fillText('R', 10, -radius + 10);
    ctx.fillText('R/2', 10, -radius / 2 + 10);

    ctx.fillRect(radius-1, -5, 2,10);
    ctx.fillRect(radius/2-1, -5, 2,10);

    ctx.fillRect(-radius-1, -5, 2,10);
    ctx.fillRect(-radius/2-1, -5, 2,10);

    ctx.fillRect(-5, radius+1, 10,2);
    ctx.fillRect(-5, radius/2+1, 10,2);

    ctx.fillRect(-5, -radius-1, 10,2);
    ctx.fillRect(-5, -radius/2-1, 10,2);
}

function drawFigure(){
    ctx.fillStyle = '#498bf2';
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.arc(0, 0, radius, Math.PI, 1.5*Math.PI);
    ctx.lineTo(0,0);
    ctx.lineTo(radius, 0);
    ctx.lineTo(0, radius);
    ctx.lineTo(-radius/2, radius);
    ctx.lineTo(-radius/2, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}