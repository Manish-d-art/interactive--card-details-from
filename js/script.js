'use strict'
 
const Name=document.querySelector('#name');
const errorName=document.querySelector('.error-name');
const cardOwner=document.querySelector('.card-details__text');

const cardNumber=document.querySelector('#card-number');
const errorCardNumber=document.querySelector('.error-card-no');
const cardNum=document.querySelector('.card__text2');

const month=document.querySelector('#month');
const monthError=document.querySelector('.error-month');
const dateMonth=document.querySelector('.date-month');

const year=document.querySelector('#year');
const errorYear=document.querySelector('.error-year');
const dateYear=document.querySelector('.date-year');

const cvc=document.querySelector('#cvc');
const errorCVC=document.querySelector('.error-cvc');
const cvcNum=document.querySelector('.card__text1');

const confirmBtn=document.querySelector('#btn');

const formFillUp=document.querySelector('.form-fill-up');
const formCompleteState=document.querySelector('.card__complete-state');


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
    // Name.style.border="thin solid red";
    // Name.style.border = "thick solid red ";
  }
  else if(nameValue === ''){
    errorName.textContent="Name cannot be empty"; 
    // Name.style.border="1px solid $activeInputBorder";
  }
  else{
    nameUpdate=nameValue;
    cardOwner.textContent=nameUpdate;
    errorName.textContent="";
  }
});

//card number input
let numberUpdate="";
cardNumber.addEventListener('input',function(e){
  e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  let cardNumberValue=cardNumber.value;
  
  // if(isNaN(cardNumberValue)){
  //     cardNumber.value=numberUpdate;
  //     errorCardNumber.textContent="wrong format, numbers only";
  // }
  
   if(cardNumberValue === ''){
    errorCardNumber.textContent="Card number cannot be empty";
    numberUpdate=cardNumberValue;
    cardNum.textContent=""
    // .padStart(16,0).replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
    ;
  }
  
  else{
    errorCardNumber.textContent="";
    numberUpdate=cardNumberValue;
    cardNum.textContent=numberUpdate
    // .padEnd(16,0).replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
    ;
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
    dateMonth.textContent="00";
    
  }
  else{
    monthError.textContent="";
    monthUpdate=monthValue;
    dateMonth.textContent=monthUpdate.padStart(2,0);
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
    dateYear.textContent="00";
  }
  
  else{
    errorYear.textContent="";
    yearUpdate=yearValue;
    dateYear.textContent=yearUpdate.padStart(2,0);
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
    cvcNum.textContent="";
  }
  else{
    errorCVC.textContent="";
    cvcUpdate=cvcValue;
    cvcNum.textContent=cvcUpdate;
    if(count2<3)
      count2++;
  }
});

//confirm btn
const displayMessage=(target1,target2,text1,text2='1px solid red') =>{
  target1.textContent=text1;
  target2.style.border=text2;
}

confirmBtn.addEventListener('click',function(e){
  e.preventDefault();
  if(Name.value===""){
    // errorName.textContent="Name cannot be empty"; 
    displayMessage(errorName,Name,"Name cannot be empty");
    //  Name.style.border = "1px solid red ";
  }
  else if(!(/\s/g.test(Name.value))){
    displayMessage(errorName,Name,"Enter fullname");
    // errorName.textContent="Enter fullname";
    // Name.style.border = "1px solid red ";
  }
  
  if((cardNumber.value.length !== 19)){
    errorCardNumber.textContent="Must be of 16-digits";
    cardNumber.style.border = "1px solid red ";
  }
  if((cvc.value.length < 3)){
    errorCVC.textContent="Must be of 3-digits";
    cvc.style.border = "1px solid red ";
  }
  if(month.value>12 || month.value<1){
    monthError.textContent="Invalid month";
    month.style.border = "1px solid red ";
  }
  if(year.value<22){
    errorYear.textContent="Invalid year";
    year.style.border = "1px solid red ";
  }
  
  if((/\s/g.test(Name.value)) && (cardNumber.value.length === 19) && (month.value<=12 || month.value>=1) && (year.value > 22) ){
    formFillUp.classList.add('hidden');
    formCompleteState.classList.remove('hidden');
    formCompleteState.style.animation="anim .5s ease-in-out ";
  }
});

