function component() {
    let element = document.createElement("canvas");
    element.width = 320;
    element.height = 600;
    return element;
}

function drawBackground(ctx, canvas){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

const canvas = component();
const ctx = canvas.getContext("2d");

document.body.appendChild(canvas);
drawBackground(ctx, canvas);