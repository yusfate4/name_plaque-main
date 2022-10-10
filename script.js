// Adding variables to store our data
const userInput = document.querySelector(".field-input");
const userLeterPreview = document.querySelector(".plaque-prev");
const userPricePreview = document.querySelector("#plaquePrice");
const userBuy = document.querySelector(".buy-submit");
const userInputCheck = document.querySelector(".check_input");
const userBuySuccess = document.querySelector(".buy_success");

// Refactoring with Arrow Function
const countLeters = (some_data) => {
  const price = some_data.replace(" ", "").length * 5; // price of each letter
  userLeterPreview.textContent = some_data;
  userPricePreview.textContent = "$" + price;

  // To reset the empty box when letter is entered
  userInputCheck.textContent = ''
  userInputCheck.style.backgroundColor = ''

  // print success when the user input letter
  userBuySuccess.textContent = "Success!!!"
  userBuySuccess.style.backgroundColor = 'green'
  // Warn user for exceeding letters
   if (userInput.value.length > 15) {
    userBuySuccess.textContent = "You have Exceeded the number of  available Letters !!!"
    userBuySuccess.style.backgroundColor = 'red'
  
 }
};

userInput.oninput = (e) => {
  countLeters(e.target.value);
};

// BuyNow functions
const buyNow = () => {
  // check if the input field is empty;
  if (userInput.value.length === 0) {
    userInputCheck.textContent = "Enter a new text !!!!!";
    userInputCheck.style.backgroundColor = "brown";
    userBuySuccess.textContent = "";
    userBuySuccess.style.backgroundColor = "";
  }

  // if the input field value is equal to the default text
  else if (userInput === userLeterPreview) {
    userInputCheck.textContent = "Enter a new text !!!!!";
    userInputCheck.style.backgroundColor = "brown";
    userBuySuccess.textContent = "";
    userBuySuccess.style.backgroundColor = "";
  } else {
    userBuySuccess.textContent = "Thank you for patronizing us";
    userBuySuccess.style.backgroundColor = "purple";
  }

  // If letter length is greater than 15, tell the user that they exceeded the number of available letters.
  if (userInput.value.length > 15) {
    userBuySuccess.textContent =
      "We have 15 letters left in stock, and you have exceeded the limit.";
    userBuySuccess.style.backgroundColor = "red";
  }
};

userBuy.addEventListener("click", buyNow);
