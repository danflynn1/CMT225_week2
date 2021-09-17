// grab DOM elements
const $ = selector => {
    return document.querySelector(selector);
};

// handler function for submit button click
const findAngle = event => {
    event.preventDefault();

    const ang1 = parseFloat($('#angle1').value);
    const ang2 = parseFloat($('#angle2').value);

    // coerce user input
    if (ang1 == '' || ang2 == '') {
        alert('Error: field cannot be blank.')
        return
    }

    // validate user values
    if ((ang1 + ang2) >= 180) {
        alert('Angles exceed 180 degrees. This shape cannot be a triangle. Please enter 2 valid angles')
        return
    }

    // calculate angle
    const ang3 = 180 - ang1 - ang2;
    
    // display angle and type of triangle if applicable
    $('#angle3').innerHTML = ang3.toFixed(2);

    if ([ang1, ang2, ang3].includes(90)) {
        $('#typeOf').style.display = 'visible';
        $('#typeOf').innerHTML = 'This is a right triangle.';
    };
    if (ang1 == ang2 || ang2 == ang3 || ang1 == ang3) {
        $('#typeOf').style.display = 'visible';
        $('#typeOf').innerHTML = 'This is an isoceles triangle.';
    };
};

const clearForm = () => {
    $("#angle3").innerHTML = '';
    $("#typeOf").innerHTML = '&nbsp;';
};

$("#submit").addEventListener("click", findAngle);
$("#clear").addEventListener("click", clearForm);

