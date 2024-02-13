document.getElementById('rectangle-btn').addEventListener('click', function() {
    const width = getElementByIdInput('rectangle-width');
    const height = getElementByIdInput('rectangle-height')
    const area = width * height;
    showResult('rectangle-result',area);
})

function getElementByIdInput(element) {
    const rectangleInputWidth = document.getElementById(element);
    const rectangleInputText = rectangleInputWidth.value;
    const width = parseFloat(rectangleInputText);
    return width;
}

function showResult(element, area) {
    const showResultElement = document.getElementById(element);
    showResultElement.innerText = area 
}