const displayValue = document.getElementById("display-value")
let counterValue = document.getElementById("counter-value")
const incrementBtn = document.getElementById("increment-button")
const decrementBtn = document.getElementById("decrement-button")
const numbers = [0,1,2,3,4,5,6,7,8,9]
counterValue.value = 1

function createCounter() {
  let count = 0;
  return function (action) {
    if (action === "add") {
      count += parseInt(counterValue.value)
    } else if (action === "subtract") {
      count -= parseInt(counterValue.value)
    }
    return count
  }
}

const counter = createCounter();

incrementBtn.addEventListener("click", () => {
  displayValue.textContent = counter("add")
})

decrementBtn.addEventListener("click", () => {
  displayValue.textContent = counter("subtract")
})

document.addEventListener("click", () => {
    if (parseInt(displayValue.textContent) <= -1) {
        displayValue.style.color = "red"
    } else {
        displayValue.style.color = "black"
    }
})
