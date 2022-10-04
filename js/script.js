'use strict'
 
const Name=document.querySelector('#name');
const errorName=document.querySelector('.error-name');
const cardOwner=document.querySelector('.card-details__text');

const cardNumber=document.querySelector('#card-number');
const errorCardNumber=document.querySelector('.error-card-no');

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
    // console.log(2);
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
let numberUpdate;
cardNumber.addEventListener('keyup',function(evt){
  const cardNumberValue=cardNumber.value;
  
  if(cardNumberValue === ''){
    errorCardNumber.textContent="Please enter card number";
  }

  else if( (evt.which < 48 || evt.which > 57)){
    if(!(evt.key === 'Backspace'))
      cardNumber.value=numberUpdate;
    errorCardNumber.textContent="wrong format, numbers only";
  }
  
  else{
    errorCardNumber.textContent="";
    numberUpdate=cardNumberValue;
  }
});