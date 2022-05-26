let buttons = document.getElementsByClassName("button")
console.log(buttons)
const display = document.getElementById("display")
const clear = document.getElementById("C")
const equals = document.getElementById("equals")

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.textContent);
        let newElement = document.createElement('p');
        newElement.innerText = event.target.textContent;
        display.appendChild(newElement);
    })
}

clear.addEventListener("click", function (event){
    console.log(event.target);
    display.innerHTML = "";
})

// math part  from equal button
equals.addEventListener("click", function (event){
    let equation = display.textContent;
    console.log(eval(equation));
    display.textContent = eval(equation);
}
)

