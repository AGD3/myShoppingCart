let userName = prompt("What is your name?");

let productOne = prompt("Please enter the name of the first product.");

let productOnePrice = Number(prompt("Please enter the price of the first product."));

let productTwo = prompt("Please enter the name of the second product.");

let productTwoPrice = Number(prompt("Please enter the price of the second product."));

let productThree = prompt("Please enter the name of the third product.");

let productThreePrice = Number(prompt("Please enter the price of the third product."));

if (Number(productOnePrice) <= 0) {
    alert("The price of product one can not be 0.");
    prompt("Please enter a valid price for product one.");
}

let subTotal = Number(productOnePrice) + Number(productTwoPrice) + Number(productThreePrice);
console.log(subTotal);

let grandTotal = subTotal * (1.0625);

prompt(userName," Your grand total is:" + " $" + grandTotal);