const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFarenheit = document.getElementById("toFarenheit");
const result =document.getElementById("result");
let temp;

function convert(){

    if(toFarenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp =(temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textConten =  "Select a unit";
    }
 
}