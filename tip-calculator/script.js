const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");

function validateInputs() {
    let isValid = true;
    
    // Validate bill amount
    const billValue = parseFloat(billInput.value);
    if (isNaN(billValue) || billValue < 0) {
        billError.style.display = "block";
        isValid = false;
    } else {
        billError.style.display = "none";
    }

    // Validate tip percentage
    const tipValue = parseFloat(tipInput.value);
    if (isNaN(tipValue) || tipValue < 0 || tipValue > 100) {
        tipError.style.display = "block";
        isValid = false;
    } else {
        tipError.style.display = "none";
    }

    return isValid;
}

function calculateTotal() {
    if (!validateInputs()) {
        totalSpan.innerText = "0.00";
        return;
    }

    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

// Add event listeners
btnEl.addEventListener("click", calculateTotal);

// Calculate on Enter key press
[billInput, tipInput].forEach(input => {
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            calculateTotal();
        }
    });
    
    // Clear error message on input
    input.addEventListener("input", () => {
        validateInputs();
    });
});