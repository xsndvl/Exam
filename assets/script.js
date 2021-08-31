console.log('JavaScript code has loaded!')

let yourName = "Sergio Sandoval" 


let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

const gbfinal = document.getElementById("qty-gb")
const ccfinal = document.getElementById("qty-cc")
const sugarfinal = document.getElementById("qty-sugar")
const totalfinal = document.getElementById("qty-total")

document.getElementById('credit').textContent = `Created by ${yourName}`

//gb
document.getElementById('add-gb').addEventListener('click', function() {
    gb ++
    console.log('Ginger bread + button was clicked!')
})
document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0 ){
        gb --
        console.log('Ginger bread - button was clicked!')
    }
    
})

//cc
document.getElementById("add-cc").addEventListener("click", function(){
    cc ++
    console.log("Chocolate Chip + button was clicked!")
})
document.getElementById("minus-cc").addEventListener("click",function(){
    if (cc > 0){
        cc --
        console.log("Chocolate Chip - button was clicked!")
    }
    
})

//sugar
document.getElementById("add-sugar").addEventListener('click',function(){
    sugar ++
    console.log("Sugar Sprinkle + button was clicked!")
})
document.getElementById("minus-sugar").addEventListener('click',function(){
    if (sugar>0){
        sugar--
        console.log("Sugar Sprinkle - button was clicked!")
    }
})

//total
let total = sugar + cc + gb

gbfinal.textContent = gb
ccfinal.textContent = cc
sugarfinal.textContent = sugar
totalfinal.textContent = total


