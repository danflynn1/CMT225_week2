// function to retrieve DOM elements
const $ = selector => {
    return document.querySelector(selector);
};

// form submit handler function
const getThirdSide = event => {
    event.preventDefault();
    
    // cast user variables to floating point
    const side1 = parseFloat($('#side1').value);
    const side2 = parseFloat($('#side2').value);

    // i used a text field instead of number input in the HTML in order to demonstrate checking for numeric input
    if (isNaN(side1) || isNaN(side2)) {
        alert('Error: Enter numeric values only.')
        clearForm();
        return
    };

    // initialize output variable
    let side3;

    // determine formula based on which side is longest
    if ($('#neither').checked) {
        side3 = Math.sqrt(side1**2 + side2**2);
    } else if ($('#hypSide1').checked) {
        side3 = Math.sqrt(side1**2 - side2**2)
    } else if ($('#hypSide2').checked) {
        side3 = Math.sqrt(side2**2 - side1**2)
    };

    // display result
    $('#side3').innerHTML = `The length of side 3 is: ${side3.toFixed(2)}`;
};

const clearForm = () => {
    $('#side3').innerHTML = '&nbsp;';
};

$('#submit').addEventListener('click', getThirdSide);
$('#clearForm').addEventListener('click', clearForm);

