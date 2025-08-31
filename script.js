let display = document.getElementById("display");













function hee(value) {
    if (value === "C") {
        display.value = ""; // agar C press hua → screen clear
    } 
    else if (value === "=") {
        try {
            display.value = eval(display.value); // agar = press hua → pura expression calculate
        } catch {
            display.value = "Error"; // agar calculation galat ho jaye
        }
    } 
    else {
        display.value += value; // warna jo button press hua usko screen par chipka do
    }
}

