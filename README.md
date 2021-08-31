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
calculateSize("small")
Expected Output: 0.75

calculateSize("medium")
Expected Output: 1

calculateSize("large")
Expected Output: 1.5

calculateSize("double")
Expected Output: 2

Describe: calculateCost()

Test: "It should return 30 for a standard pizza"
Code:
calculateCost(1,[])
Expected Output: 30

Test: "It should return 60 for a Double sized pizza"
Code:
calculateCost(1,[])
Expected Output: 60

Test: "It should return 39 for a pizza with one topping"
Code:
calculateCost:(1,[x])
Expected Output: 39

Test: "It should return 78 for a Double pizza with one topping"
Code:
calculateCost(2,[x])
Expected Output: 78

Test: "It should return 48 for a pizza with two toppings"
Code:
calculateCost(1,[x,y])
Expected Output: 48
```