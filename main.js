let buttons = document.getElementsByTagName("button")
console.log(buttons)

for (let button of buttons) {
    button.addEventListener("click", function (event){
        console.log(event.target.textContent);
        let newElement = document.createElement('p');
        newElement.classList.add('display');
        newElement.innerText = event.target.textContent;
        display.appendChild(newElement);
    })
}

// clear button


// math part  from equal button




