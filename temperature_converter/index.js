document.getElementById("Celcius").addEventListener("input", convertTemp);
document.getElementById("Fahrenheit").addEventListener("input", convertTemp);
document.getElementById("Kelvin").addEventListener("input", convertTemp);

function convertTemp(event){
    let changedBox = event.target.id; // which input box was changed
    let value = parseFloat(event.target.value); // get the value from that box

    if (changedBox === "Celcius" && !isNaN(value)){
        document.getElementById("Fahrenheit").value = (value * 9/5 + 32).toFixed(2);
        document.getElementById("Kelvin").value = (value + 273.15).toFixed(2);
    }
    else if (changedBox === "Fahrenheit" && !isNaN(value)){
        document.getElementById("Celcius").value = ((value - 32) * 5/9).toFixed(2);
        document.getElementById("Kelvin").value = ((value - 32) * 5/9 + 273.15).toFixed(2);
    }
    else if (changedBox === "Kelvin" && !isNaN(value)){
        document.getElementById("Celcius").value = (value - 273.15).toFixed(2);
        document.getElementById("Fahrenheit").value = ((value - 273.15) * 9/5 + 32).toFixed(2);
    }

}