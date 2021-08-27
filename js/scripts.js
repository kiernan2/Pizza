function Pizza() {
  this.pizzaSize = 0;
  this.pizzaToppings = [];
  this.pizzaCost = 0;
}

Pizza.prototype.calculateCost = function(pizza) {
  const pizzaSize = pizza.pizzaSize;
  const pizzaToppings = pizza.pizzaToppings;
  pizza.pizzaCost = ((30*pizzaSize) + (pizzaToppings.length() * (pizzaSize * 0.3));

}