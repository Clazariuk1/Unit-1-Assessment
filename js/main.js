const displayValue = document.getElementById("display-value")
let counterValue = document.getElementById("counter-value")
const incrementBtn = document.getElementById("increment-button")
const decrementBtn = document.getElementById("decrement-button")

function createCounter() {
  let count = 0;

  return function (action) {
    if (action === "increment") {
      count ++ //parseInt(counterValue.textContent)
    } else if (action === "decrement") {
      count -- //parseInt(counterValue.textContent)
    }
    return count
  }
}

const counter = createCounter();

incrementBtn.addEventListener("click", () => {
  displayValue.textContent = counter("increment")
})

decrementBtn.addEventListener("click", () => {
  displayValue.textContent = counter("decrement")
})

document.addEventListener("click", () => {
    if (parseInt(displayValue.textContent) <= -1) {
        displayValue.style.color = "red"
    } else {
        displayValue.style.color = "black"
    }
})
