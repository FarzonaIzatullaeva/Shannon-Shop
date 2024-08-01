"use strict";
var $ = function(id) { return document.getElementById(id)};

// an array that contains information of each item
let items = [
    {
      name: "Beige Dress",
      price: 150,
      image: "images/bgdress.png"
    },
    {
      name: "Black Jacket",
      price: 200,
      image: "images/bljacket.png"
    },
    {
      name: "Brown Jacket",
      price: 200,
      image: "images/brjacket.png"
    },
    {
      name: "Green Blouse",
      price: 90,
      image: "images/grblouse.png"
    },
    {
        name: "Orange Dress",
        price: 140,
        image: "images/ordress.png"
    },
    {
        name: "Pink Dress",
        price: 190,
        image: "images/pndress.png"
    }

];

// array that creates empty array for storing itms in cart

let cart = [];

// function that pushes an item from the items array using its index to the cart array
function addItemToCart(index) {
  cart.push(items[index]);
}

// function that updates the items in the cart and updates the total cost
function updateCart() {
    let cartItems = $("items");
    let totalCost = $("total");
}


// updateCart func that organizes and sets up the cart functionality in my website. It adds the images of the dresses, and calculates the total with tax.  
function updateCart() {
    const cartItemsDiv = $("items");
    const totalCostDiv = $("total");
    let cartItemsHTML = "";
    let totalCost = 0;
    const TAX = 5; // tax is 5%
    cart.forEach((item, index) => {
      cartItemsHTML += `
        <div class="item">
          <img src="${item.image}">
          <p>${item.name}</p>
          <p>$${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
      totalCost += item.price + ((item.price)*(TAX/100)); // math operation
    });
    cartItemsDiv.innerHTML = cartItemsHTML;
    
    totalCostDiv.innerHTML = `Total cost with Tax: $${totalCost}`;
}

// these two functions add the items and removes the itmes from the cart after which calling the updateCart function in order to change the cart by removing or adding necessry pictures of clother and updating the price. 
function addItemToCart(index) {
  cart.push(items[index]);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function addItemToCart(index) {
  cart.push(items[index]);
  
  // Add item to local storage
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  cartData.push({
    name: items[index].name,
    price: items[index].price
  });
  localStorage.setItem("cartData", JSON.stringify(cartData));

  updateCart();
}
