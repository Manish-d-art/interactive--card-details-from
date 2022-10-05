'use strict'
 
const Name=document.querySelector('#name');
const errorName=document.querySelector('.error-name');
const cardOwner=document.querySelector('.card-details__text');

const cardNumber=document.querySelector('#card-number');
const errorCardNumber=document.querySelector('.error-card-no');
const cardNum=document.querySelector('.card__text2');

const month=document.querySelector('#month');
const monthError=document.querySelector('.error-month');

const year=document.querySelector('#year');
const errorYear=document.querySelector('.error-year');

const cvc=document.querySelector('#cvc');
const errorCVC=document.querySelector('.error-cvc');

const formFillUp=document.querySelector('.form-fill-up');
const cradCompleteState=document.querySelector('.card-complete-state');


//name input
let nameUpdate;
Name.addEventListener('keyup',function(){
  const nameValue=Name.value;
  cardOwner.textContent="";

  if(/\d/.test(nameValue)){ 
    errorName.textContent="Invalid input";
    nameUpdate=nameValue.slice(0,nameValue.length-1);
    Name.value=nameUpdate;
    cardOwner.textContent=nameUpdate;
  }
  else if(nameValue === ''){
    errorName.textContent="Name cannot be empty"; 
  }
  else{
    nameUpdate=nameValue;
    cardOwner.textContent=nameUpdate;
    errorName.textContent="";
  }
});

//card number input
let numberUpdate="";
cardNumber.addEventListener('keyup',function(evt){
  const cardNumberValue=cardNumber.value;
  if(cardNumberValue === ''){
    errorCardNumber.textContent="Please enter card number";
  }
  if((evt.key === " "))
      cardNumber.value=numberUpdate;

  else if(isNaN(cardNumberValue)){
      cardNumber.value=numberUpdate;
    errorCardNumber.textContent="wrong format, numbers only";
  }
  else if(cardNumberValue === ''){
    errorCardNumber.textContent="Card number cannot be empty";
  }
  
  else{
    errorCardNumber.textContent="";
    numberUpdate=cardNumberValue;
    cardNum.textContent=numberUpdate;
  }
  
});

