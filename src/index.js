function component() {
    let element = document.createElement("div");
    element.innerHTML = "Hello LDJAM!";
    return element;
}

document.body.appendChild(component());