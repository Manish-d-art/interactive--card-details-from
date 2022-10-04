'use strict'
 
const Name=document.querySelector('#name');
const errorName=document.querySelector('.error-name');

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

let nameUpdate;
Name.addEventListener('keyup',function(){
  const nameValue=Name.value;
  if(/\d/.test(nameValue)){ 
    
    errorName.textContent="Invalid input";
    nameUpdate=nameValue.slice(0,nameValue.length-1);
    Name.value=nameUpdate;
    console.log(2);
  }
  else if(nameValue === ''){
    errorName.textContent="Name cannot be empty"; 
  }
  else{
    nameUpdate=nameValue;
    errorName.textContent="";
  }
});