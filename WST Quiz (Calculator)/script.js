
function calculate() {
    let numberOne = document.getElementById("answer").value;
    let numberTwo = eval(numberOne);
    parseFloat(document.getElementById("answer").value = numberTwo);
}
function display(value) {
    document.getElementById("answer").value += value
}
