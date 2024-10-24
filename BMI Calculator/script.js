let wgt = document.getElementById("wgt");
let hgtf = document.getElementById("hgtf");
let hgtin = document.getElementById("hgtin");
let msg = document.getElementById("msg");

function calculate() {
    // Get the values and convert to numbers
    let weight = wgt.value;
    let heightFeet = hgtf.value;
    let heightInches = hgtin.value;


    // Calculate total height in inches
    let totalHeightMeters = (heightFeet * 0.3048) + (heightInches * 0.0254);

    // Calculate BMI
    let result = weight / (totalHeightMeters * totalHeightMeters);
    return result;
}

function showMessage() {
    let result = calculate();
    if (result) { // Only proceed if result is a valid number
        if (result < 18.5) {
            msg.innerHTML=`Underweight (${Math.floor(result)});
            <h4>You can try out these things if you are underweight</h4>
            <ul>
                <li>Eating More </li>
                <li>Eating Healthy Food </li>
                <li>Adding Calories to Meal</li>
                <li>Excersing</li>
            </ul>`;
        } else if (result >= 18.5 && result < 25) {
            msg.innerHTML = `Healthy Weight (${Math.floor(result)})
            <h4>Some tips to maintain if you have Healthy Weight</h4>
            <ul>
                <li>Eat Well</li>
                <li>Be Active</li>
                <li>Sleep Enough</li>
                <li>Avoid Mindless Eating</li>
            </ul>`;
        } else if (result >= 25 && result < 30) {
            msg.innerHTML= `Overweight (${Math.floor(result)})
            <h4>You can try out these things if you are OverWeight</h4>
            <ul>
                <li>Enroll yourself to Weight Loss Programs</li>
                <li>Watching Out on your calories consumption</li>
                <li>Eating healthy and nutritious food</li>
                <li>Excersise Daily</li>
            </ul>`;
        } else {
            msg.innerHTML= `Obesity (${Math.floor(result)})
            <h4>You can try out these things if you are Obese</h4>
            <ul>
                <li>Sleep Well</li>
                <li>Eating Healthy Food </li>
                <li>Lifestyle Changes</li>
                <li>Excersing</li>
            </ul>`;
        }
    }
}
function reset() {
    msg.innerText = " ";
    wgt.value = " ";
    hgtf.value = " ";
    hgtin.value = " ";
}
