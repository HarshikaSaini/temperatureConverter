let Celsius = document.getElementById('tempCel');
let Fahrenheit = document.getElementById('tempFar');

Celsius.oninput=function(){
   let result1 = (parseFloat(Celsius.value) * 9) / 5 + 32;
   Fahrenheit.value=parseFloat(result1.toFixed(2));
}

