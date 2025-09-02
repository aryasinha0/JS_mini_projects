function tipCalculator() {
    
    // Get values from inputs each time form is submitted
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        document.getElementById("total").innerText = "Please enter valid numbers.";
        return false;
    }

    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalAmount = billAmount + tipAmount;

    document.getElementById("total").innerText = "Total Amount: $" + totalAmount.toFixed(2);
    return false;
}
