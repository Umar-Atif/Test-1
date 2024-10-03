var input = document.querySelector("#input");
var output = document.querySelector("#output");
var select = document.querySelector("#dropdown");

function convert(){
    if(select.value == "celcius"){
        output.innerHTML += `<h3>${input.value} Celcius is equal to ${(input.value * 9 / 5) + 32} Farenheit <br></h3>`
    }
    else{
        output.innerHTML += `<h3>${input.value} Farenheit is equal to ${(input.value - 32) * 5 / 9} Celcuis <br></h3>`
    }
}