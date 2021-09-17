// shorthand to target DOM elements
const $ = selector => {
    return document.querySelector(selector);
};

// submit button event handler function
const onSubmit = event => {

    // stop page reload on form submit
    event.preventDefault();


    // grab user input variables
    const l = parseFloat($("#length").value);
    const w = parseFloat($("#width").value);
    const u = $("#units").value;

    // math
    const area = l * w;
    const perim = (l + w) * 2;

    // output calculation results to display
    $("#area").innerHTML = `${area} ${u}<sup>2</sup>`;
    $("#perimeter").innerHTML = `${perim} ${u}`;
};

// reset button event handler function
const clearForm = () => {
    $("#area").innerHTML = '';
    $("#perimeter").innerHTML = '';
};

// trigger event handlers on button click
$("#submit_form").addEventListener("click", onSubmit);
$("#clear").addEventListener("click", clearForm);