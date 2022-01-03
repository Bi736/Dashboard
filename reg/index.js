
let boxOne = document.getElementById('first');
let boxTwo = document.getElementById('last');
let record = document.getElementById('bookList');
let checkOne = document.getElementById('radioOne');
let checkTwo = document.getElementById('radioTwo');
let checkThree = document.getElementById('radioThree');
let checkFour = document.getElementById('radioFour');
let checkFive = document.getElementById('radioFive');
let boxThree = document.getElementById('national');
let Submit = document.getElementById('submit');

let validFirstname = document.getElementById('validFirst');
let validLastname = document.getElementById('validlast');
let validCountryuname = document.getElementById('validCountry');
let validIdname = document.getElementById('validId');
let lastButton = document.getElementById('last-btn');


let data = Submit.addEventListener('click',function(e){

    e.preventDefault();
    
    if((boxOne.value == '') || (boxOne.value == Number) || (boxOne.value == null) || (boxOne.value == undefined)){
       alert('Please enter your first name');
    }
    if((boxTwo.value == '') || (boxTwo.value == Number) || (boxTwo.value == null) || (boxTwo.value == undefined)){
     alert('Please enter your last name');
    }
    if((boxThree.value == '') || (boxThree.value == Number) || (boxThree.value == null) || (boxThree.value == undefined)){
        alert('Please enter your national id');
       }
   

    let newRow = document.createElement('tr');

    let newFirst = document.createElement('th');
    newFirst.innerHTML = boxOne.value;
    newRow.appendChild(newFirst);
    newFirst.style.color = 'green';
    newFirst.style.padding = '12px 20px';
    newFirst.style.background = 'white';
    newFirst.style.border = '2px solid black';
    newFirst.style.marginTop = '20px';
    newFirst.style.height = '10px';
    newFirst.style.width = '10px';


    
    let newLast = document.createElement('th');
    newLast.innerHTML = boxTwo.value;
    newRow.appendChild(newLast);
    newLast.style.color = 'green';
    newLast.style.padding = '12px 20px';
    newLast.style.background = 'white';
    newLast.style.border = '2px solid black';
    newLast.style.marginTop = '20px';
    newLast.style.height = '10px';
    newLast.style.width = '10px';

    
    let newId = document.createElement('th');
    newId.innerHTML = boxThree.value;
    newRow.appendChild(newId);
    newId.style.color = 'green';
    newId.style.padding = '12px 20px';
    newId.style.background = 'white';
    newId.style.border = '2px solid black';
    newId.style.marginTop = '20px';
    newId.style.height = '10px';
    newId.style.width = '10px';



    record.appendChild(newRow);


});


lastButton.addEventListener('click',function(e){
    e.preventDefault();
    console.log('hello')
    if(boxOne.value == ''||null||undefined && boxTwo.value == ''||null||undefined && boxThree.value ==''||null||undefined){
        alert('Plese give your all data');
    }
})


