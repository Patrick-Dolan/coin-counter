
import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// function amountTocoins(amount, coins) {
//   if (amount === 0) {
//     return [];
//   } else {
//     if (amount >= coins[0]) {
//       left = (amount - coins[0]);
//       return [coins[0]].concat( amountTocoins(left, coins) );
//     } else {
//       coins.shift();
//       return amountTocoins(amount, coins);
//     }
//   }
// } 

const coinCounterRecursion = (num) => {
  if (isNaN(num)) {
    return "Please enter a number.";
  }
  if (num === 0) {
    return "";
  } else if (num > .24) {
    const quarters = Math.floor(num / .25);
    console.log(num - (quarters * .25));
    return `${quarters} quarters`  + coinCounterRecursion((num - (quarters * .25)).toFixed(2));
  } else if (num > .09) {
    const dimes = Math.floor(num / .10);
    return ` ${dimes} dimes`  + coinCounterRecursion((num - (dimes * .10)).toFixed(2));
  } else if (num > .04) {
    const nickels = Math.floor(num / .05);
    return ` ${nickels} nickels`  + coinCounterRecursion((num - (nickels * .05)).toFixed(2));
  } else {
    const pennies = Math.floor(num / .01);
    return ` ${pennies} pennies`;
  }
};

$(() => {
  $("form#coinForm").on("submit", (event) => {
    event.preventDefault();
    const amountToConvert = parseFloat($("input#money").val());
    const convertedAmount = coinCounterRecursion(amountToConvert);
    $(".result").text(convertedAmount);
    $(".changeContainer").show();
  });
});
