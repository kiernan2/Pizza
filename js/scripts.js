function Pizza(size,toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaSizeMultiplier = 0;
  this.pizzaCost = 0;
}

Pizza.prototype.calculateCost = function() {
  this.pizzaCost = ((30 * this.pizzaSizeMultiplier) + (this.pizzaToppings.length * (this.pizzaSizeMultiplier * 9)));
}

Pizza.prototype.calculateSize = function() {
  let calculatedSize = 0;
  console.log(this.pizzaSize)
  switch (this.pizzaSize) {
    case ("small"):
      calculatedSize = 0.75;
      break;
    case ("medium"):
      calculatedSize = 1;
      break;
    case ("large"):
      calculatedSize = 1.5;
      break
    case ("double"):
      calculatedSize = 2;
      break
    default:
      calculatedSize = 1;
  }
  this.pizzaSizeMultiplier = calculatedSize;
}

// UI Logic
function displayPizza(pizza) {
  const output = $("div#output");
  const htmlForPizza = "<li> You ordered a " + pizza.pizzaSize + " with " + pizza.pizzaToppings + " it costs " + pizza.pizzaCost + "</li>";
  output.html(htmlForPizza);
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedToppings = $("input#toppings").val().split(" ");
    let newPizza = new Pizza(inputtedSize, inputtedToppings);
    newPizza.calculateSize();
    newPizza.calculateCost();
    console.log(newPizza);
    displayPizza(newPizza);
  })
})