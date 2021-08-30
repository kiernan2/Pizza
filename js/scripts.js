function Pizza(size,toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCost = 0;
}

Pizza.prototype.calculateCost = function(pizza) {
  const pizzaSize = pizza.pizzaSize;
  const pizzaToppings = pizza.pizzaToppings;
  pizza.pizzaCost = ((30*pizzaSize) + (pizzaToppings.length() * (pizzaSize * 0.3)));
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]").val();
    const inputtedToppings = $("input#toppings").val().split(" ");
    let calculatedSize = 0;
    switch (inputtedSize) {
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
    console.log(typeof inputtedToppings);
    let newPizza = new Pizza(inputtedSize, inputtedToppings);
    newPizza.calculateCost(newPizza);
    console.log(newPizza)
  })
})