#### _Pizza Parlor_

#### By _**Kiernan Beattie**_

## Description

_Determine the pizza size and the toppings you want_

## Setup/Installation Requirements

* _clone this repo with `git clone https://github.com/kiernan2/Pizza.git` in a command prompt_
* _open index.html in any browser_

## Known Bugs

* _N/A_

## Technologies Used

* HTML
* JS
* JQuery
* CSS
* Bootstrap

## License

_Licensed under the MIT License_
_©Kiernan Beattie 2021_

## Contact Information

_kiernan1994@gmail.com_

## Specs
```js
Describe: Pizza()

Test: "A basic test to see if the constructors working"
Code:
new Pizza("", [])
Expected Output: { pizzaSize: "", pizzaToppings: (0) […], pizzaSizeMultiplier: 0, pizzaCost: 0 }

Describe: calculateSize()

Test: "See if it returns the appropriate size multiplier"
Code:
let testPizza = new Pizza("small",[])
testPizza.calculateSize()
testPizza
Expected Output: { pizzaSize: "small", pizzaToppings: (0) […], pizzaSizeMultiplier: 0.75, pizzaCost: 0 }

Code:
let testPizza = new Pizza("medium",[])
testPizza.calculateSize()
testPizza
Expected Output: { pizzaSize: "medium", pizzaToppings: (0) […], pizzaSizeMultiplier: 1, pizzaCost: 0 }

Code:
let testPizza = new Pizza("large",[])
testPizza.calculateSize()
testPizza
Expected Output: { pizzaSize: "large", pizzaToppings: (0) […], pizzaSizeMultiplier: 1.5, pizzaCost: 0 }

Code:
let testPizza = new Pizza("double",[])
testPizza.calculateSize()
testPizza
Expected Output: { pizzaSize: "double", pizzaToppings: (0) […], pizzaSizeMultiplier: 2, pizzaCost: 0 }

Describe: calculateCost()

Test: "It should return 30 for a standard pizza"
Code:
let testPizza = new Pizza(("medium",[]))
testPizza.calculateCost()
Expected Output: { pizzaSize: "medium", pizzaToppings: (0) […], pizzaSizeMultiplier: 1, pizzaCost: 30 }

Test: "It should return 60 for a Double sized pizza"
Code:
let testPizza = new Pizza(("double",[]))
testPizza.calculateCost()
testPizza
Expected Output: { pizzaSize: 2, pizzaToppings: (0) […], pizzaSizeMultiplier: 0, pizzaCost: 60 }

Test: "It should return 39 for a pizza with one topping"
Code:
let testPizza = new Pizza(("medium",["x"]))
testPizza.calculateCost()
testPizza
Expected Output: { pizzaSize: 1, pizzaToppings: (1) […], pizzaSizeMultiplier: 0, pizzaCost: 39 }

Test: "It should return 78 for a Double pizza with one topping"
Code:
let testPizza = new Pizza(("double",["x"]))
testPizza.calculateCost()
testPizza
Expected Output: { pizzaSize: 2, pizzaToppings: (1) […], pizzaSizeMultiplier: 0, pizzaCost: 78 }

Test: "It should return 48 for a pizza with two toppings"
let testPizza = new Pizza(("medium",["x","y"]))
testPizza.calculateCost()
testPizza
Expected Output: { pizzaSize: 1, pizzaToppings: (2) […], pizzaSizeMultiplier: 0, pizzaCost: 48 }
```