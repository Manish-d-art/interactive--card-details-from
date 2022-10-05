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
let count1=0;
cardNumber.addEventListener('keyup',function(evt){
  const cardNumberValue=cardNumber.value;
  if(cardNumberValue === ''){
    errorCardNumber.textContent="Please enter card number";
    cardNum.textContent=numberUpdate;
  }
  if((evt.key === " "))
      cardNumber.value=numberUpdate;

  else if(isNaN(cardNumberValue)){
      cardNumber.value=numberUpdate;
      errorCardNumber.textContent="wrong format, numbers only";
  }
  else if(cardNumberValue === ''){
    errorCardNumber.textContent="Card number cannot be empty";
    numberUpdate=cardNumberValue;
    cardNum.textContent=numberUpdate;
  }
  else{
    errorCardNumber.textContent="";
    numberUpdate=cardNumberValue;
    cardNum.textContent=numberUpdate;
    if(count1<16)
    count1++;
  }
  
});

//month
let  monthUpdate="";
month.addEventListener('keyup',function(evt){
  const monthValue=month.value;
  if(isNaN(monthValue)){
    monthError.textContent="Wrong format";
    month.value=monthUpdate;
  }
  else if(monthValue === ""){
    monthError.textContent="can't be blank";
    month.value="";
    monthUpdate="";

  }
  else{
    monthError.textContent="";
    monthUpdate=monthValue;
   

  }
});
//year
let  yearUpdate="";
year.addEventListener('keyup',function(evt){
  const yearValue=year.value;
  if(isNaN(yearValue)){
    errorYear.textContent="Wrong format";
    year.value=yearUpdate;
  }
  else if(yearValue === ""){
    errorYear.textContent="can't be blank";
    year.value="";
    yearUpdate="";
  }
  else{
    errorYear.textContent="";
    yearUpdate=yearValue;
  }
});

//cvc
let  cvcUpdate="";
let count2=0;
cvc.addEventListener('keyup',function(evt){
  const cvcValue=cvc.value;
  if(isNaN(cvcValue)){
    errorCVC.textContent="Wrong format";
    cvc.value=cvcUpdate;
  }
  else if(cvcValue === ""){
    errorCVC.textContent="can't be blank";
    cvc.value="";
    cvcUpdate="";
  }
  else{
    errorCVC.textContent="";
    cvcUpdate=cvcValue;
    if(count2<3)
      count2++;
  }
});

