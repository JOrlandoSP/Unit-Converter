const convertBtn = document.querySelector("#convert-btn")

const meterFeet = 3.281;
const literGallon = 0.264;
const kilogramPound = 2.204;

const rMeterFeet = document.getElementById("meter-feet")
const rLiterGallon = document.querySelector("#liter-gallon")
const rKiloPound = document.querySelector("#kilo-pound")

convertBtn.addEventListener("click", convert)

function convert(){
    const inputEl = document.querySelector("#input-el").value;
    rMeterFeet.textContent = `${inputEl} meters = ${(inputEl*meterFeet).toFixed(3)} feet | ${inputEl} feet = ${(inputEl/meterFeet).toFixed(3)} meters`
    rLiterGallon.innerText = `${inputEl} liters = ${(inputEl*literGallon).toFixed(3)} gallons | ${inputEl} gallons = ${(inputEl/literGallon).toFixed(3)} liters`
    rKiloPound.innerText = `${inputEl} kilos = ${(inputEl*kilogramPound).toFixed(3)} pounds | ${inputEl} pounds = ${(inputEl/kilogramPound).toFixed(3)} kilos`
}