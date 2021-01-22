/* eslint-disable */
import "bootstrap";
import "./style.css";

const CREDIT_CARD = document.querySelector("#creditCard");
const CVC = document.querySelector("#cvc");
const AMOUNT = document.querySelector("#amount");

const NAME = document.querySelector("#name");
const LASTNAME = document.querySelector("#lastname");

const CITY = document.querySelector("#city");
const STATE = document.querySelector("#state");
const POSTAL_CODE = document.querySelector("#postalCode");

const MESSAGE = document.querySelector("#message");
const SUBMIT_BUTTON = document.querySelector("form");

window.onload = () => {
  console.log(SUBMIT_BUTTON);
  isValidCreditCard();
  isValidCVC();
  isValidAmount();
  isValidName();
  isValidLastName();
  sendForm();
};

const sendForm = () => {
  SUBMIT_BUTTON.addEventListener("submit", event => {
    preventDefault();
    console.log("submit");
    let allInputs = document.querySelectorAll("input");
  });
};

const isValidCreditCard = () => {
  CREDIT_CARD.addEventListener("focusout", event => {
    checkOnlyNumbers(CREDIT_CARD.value) &&
    CREDIT_CARD.value.length >= 15 &&
    CREDIT_CARD.value.length <= 19 &&
    checkCreditCardNumber(CREDIT_CARD.value)
      ? validInputStyle(CREDIT_CARD)
      : invalidInputStyle(CREDIT_CARD);
  });
};

const isValidCVC = () => {
  CVC.addEventListener("focusout", event => {
    checkOnlyNumbers(CVC.value) &&
    (CVC.value.length == 3 || CVC.value.length == 4)
      ? validInputStyle(CVC)
      : invalidInputStyle(CVC);
  });
};

const isValidAmount = () => {
  AMOUNT.addEventListener("focusout", event => {
    Number(AMOUNT.value) && AMOUNT.value > 1000
      ? validInputStyle(AMOUNT)
      : invalidInputStyle(AMOUNT);
  });
};

const isValidName = () => {
  NAME.addEventListener("focusout", event => {
    checkOnlyString(NAME.value)
      ? validInputStyle(NAME)
      : invalidInputStyle(NAME);
  });
};

const isValidLastName = () => {
  LASTNAME.addEventListener("focusout", event => {
    checkOnlyString(LASTNAME.value)
      ? validInputStyle(LASTNAME)
      : invalidInputStyle(LASTNAME);
  });
};

const invalidInputStyle = input => {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};

const validInputStyle = input => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const checkOnlyNumbers = textNumber => {
  return Number(textNumber) % 1 == 0;
};

const checkOnlyString = text => {
  return /^[a-zA-Z]+$/.test(text);
};

const checkCreditCardNumber = cardNumber => {
  let s = 0;
  let doubleDigit = false;
  for (let index = cardNumber.length - 1; index >= 0; index--) {
    let digit = +cardNumber[index];
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    s += digit;
    doubleDigit = !doubleDigit;
  }
  return s % 10 == 0;
};
