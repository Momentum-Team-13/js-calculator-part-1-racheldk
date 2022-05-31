let buttons = document.getElementsByClassName("button")
console.log(buttons)
const display = document.getElementById("display")
const clear = document.getElementById("C")
const equals = document.getElementById("equals")
const decimal = document.getElementById("decimal")

//make the buttons do things//
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        let newElement = document.createElement('span');
        newElement.innerText = event.target.textContent;
        display.appendChild(newElement);
    })
}

//make C button work
clear.addEventListener("click", function (event){
    console.log(event.target);
    display.innerHTML = "";
})

// math part  from equal button that totally works
equals.addEventListener("click", function (event){
    let equation = display.textContent;
    console.log(eval(equation));
    display.textContent = math.eval(equation);
}
)


// "0."" when . clicked and nothing in the display  
decimal.addEventListener("click", function (event)
{ if(display.innerText === "") {
    display.textContent = "0."
    console.log("0.")
} 
else {
console.log(event.target.textContent);
        let newElement = document.createElement('span');
        newElement.innerText = event.target.textContent;
        display.appendChild(newElement);
}
}
)




//Trying to do the try...catch for errors - not yet working
// equals.addEventListener("click", function (event){
//     try {
//         let equation = display.textContent
//         if(eval(equation) === 2 ) throw "Oops!";
//     } catch (error) {
//         display.textContent = eval(equation);
//         console.log("catch");
//     }
// })
    
    
    // trying things 
    // let equation = display.textContent;
    // if(eval(equation) === 4) {
    //     console.log(4);
    //     display.textContent = "Oops!"
    // } else {
    // console.log(eval(equation));
    // display.textContent = eval(equation);
    // }
