//focus on the first text field on load
const name = document.querySelector('#name');
name.focus();
//text field that will be revealed when the 'Other' option is selected from 'Job Role'
const other = document.querySelector('#other-job-role');
//Job Role select
const jobRole = document.querySelector('#title');


//initially hidden, input field that will show when other is selected
other.style.display= 'none';

//shows the input field when other is selected, and hides it when any other job role is selected
jobRole.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
        other.style.display = 'block';
  } else {
        other.style.display = 'none';
          }
  });

//variables to reference the 'design' element, 'color' element, and color element options.
  const design = document.querySelector('#design');
  const colors = document.querySelector('#color');
  const colorOptions = colors.children;

//initally disable color options
  colors.disabled = true;
  colorOptions[0].textContent = 'Please select a T-shirt color';

//event listener to give shirt color options depending on which design is selected
  design.addEventListener('change', (e) => {
      colors.disabled = false;

      for (let i = 0; i < colorOptions.length; i++) {
        const designSelection = e.target.value;
        const dataTheme = colorOptions[i].getAttribute('data-theme'); //https://stackoverflow.com/questions/65942968/storing-and-retrieving-a-theme-in-javascript-from-a-data-attribute


          if (designSelection === dataTheme) {
              colorOptions[i].hidden = false;
              colorOptions[i].setAttribute('selected', true);
            } else {
              colorOptions[i].hidden = true;
              colorOptions[i].removeAttribute('selected', false);
            }
      }
  });

//variables to reference the 'Register for Activites' element, 'Total $' element, and total cost.
  const activities = document.querySelector('#activities-box');
  const activitiesCost = document.querySelector('#activities-cost');
  let totalCost = 0;
//event listener to add the Total cost depening which checkboxes are selected.
  activities.addEventListener('change', (e) => {
      const dataCost = e.target.getAttribute('data-cost');
        if(e.target.checked === true){
            totalCost += parseInt(dataCost);
        } else(
            totalCost -= parseInt(dataCost)
        );
      activitiesCost.innerHTML = 'Total: $' +totalCost;
  });


//variables to reference paymentType, credit card, paypal, bitcoin
  const paymentType = document.querySelector('#payment');
  const creditCard = document.querySelector('#credit-card');
  const paypal = document.querySelector('#paypal');
  const bitcoin = document.querySelector('#bitcoin');
//initially hide paypal and bitcoin variables
  paypal.style.display = 'none';
  bitcoin.style.display = 'none';
//set the second child element and set the selected property
  paymentType.children[1].setAttribute('selected', 'selected');
//event listener detects when a change is made and displays the div element with the matches and hides the other 2.
  paymentType.addEventListener('change', (e) => {
      if (e.target.value === 'paypal') {
            paypal.style.display = 'block';
            bitcoin.style.display = 'none';
            creditCard.style.display = 'none';
      } else if
          (e.target.value === 'bitcoin') {
              bitcoin.style.display = 'block';
              paypal.style.display = 'none';
              creditCard.style.display = 'none';
      } else {
              creditCard.style.display = 'block';
              paypal.style.display = 'none';
              bitcoin.style.display = 'none';
      }
  });
//form validation variables
//name
const email = document.querySelector('#email');
//activites
const creditCardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvvNumber = document.querySelector('#cvv');
const form = document.querySelector('form');


//console.log(name);
//console.log(email);
//console.log(activities);
//console.log(creditCardNumber);
//console.log(zipCode);
//console.log(cvvNumber);



//function to check if the name field is valid using regex
const nameValidation = () => {
  const enteredName = name.value;
  const nameIsValid = /^[a-z]+$/.test(enteredName);
  return nameIsValid;
}

//function to check if the email field is valid using regex
const emailValidation = () => {
    const enteredEmail = email.value;
    const emailIsValid = /^[^@]+@[^@]+\.[a-z]+$/i.test(enteredEmail);
    return emailIsValid;
}

//function to check if the activies field is valid as long as atleast 1 activity is selected(total is not 0)
const activitiesValidation = () => {
    const activitiesIsValid = totalCost > 0;
    return activitiesIsValid;
}

//function to check if the creditCardNumber field is valid using regex
const cardNumberValidation = () => {
    const enteredCardNumber = creditCardNumber.value;
    const cardNumberIsValid = /^\d{13,16}$/.test(enteredCardNumber);
    return cardNumberIsValid;
}

//function to check if the zipCode field is valid using regex
const zipcodeValidation = () => {
    const enteredZipCode = zipCode.value;
    const zipcodeIsValid = /^\d{5}$/.test(enteredZipCode);
    return zipcodeIsValid;
}

//function to check if the cvv field is valid using regex
const cvvValidation = () => {
    const enteredCVV = cvv.value;
    const cvvIsValid = /^\d{3}$/.test(enteredCVV);
    return cvvIsValid;
}


//console.log(nameIsValid);
//console.log(enteredEmail);
//console.log(enteredCardNumber);
//console.log(enteredZipCode);
//console.log(enteredCVV);
//console.log();


/*event listener that listens for the form to be submitted and calls validation fuctions
for name,email,activities,card number, zipcode, and cvv.
if enterd value is valid, the page is refreshed
if entered value is not valid, the page displays a validation error message*/
form.addEventListener('submit', event => {
//event.preventDefault();

if (!nameValidation()) {
    event.preventDefault();
    name.parentElement.classList.add('not-valid');
    name.parentElement.classList.remove('valid');
    name.parentElement.lastElementChild.style.display = 'block';
  } else {
  name.parentElement.classList.add('valid');
  name.parentElement.classList.remove('not-valid');
  name.parentElement.lastElementChild.style.display = 'none';
}

if (!emailValidation()) {
    event.preventDefault();
    email.parentElement.classList.add('not-valid');
    email.parentElement.classList.remove('valid');
    email.parentElement.lastElementChild.style.display = 'block';
  } else {
  email.parentElement.classList.add('valid');
  email.parentElement.classList.remove('not-valid');
  email.parentElement.lastElementChild.style.display = 'none';
}

if (!activitiesValidation()) {
    event.preventDefault();
    activities.parentElement.classList.add('not-valid');
    activities.parentElement.classList.remove('valid');
    activities.parentElement.lastElementChild.style.display = 'block';
  } else {
  activities.parentElement.classList.add('valid');
  activities.parentElement.classList.remove('not-valid');
  activities.parentElement.lastElementChild.style.display = 'none';
}

if (!cardNumberValidation()) {
    event.preventDefault();
    creditCardNumber.parentElement.classList.add('not-valid');
    creditCardNumber.parentElement.classList.remove('valid');
    creditCardNumber.parentElement.lastElementChild.style.display = 'block';
  } else {
  creditCardNumber.parentElement.classList.add('valid');
  creditCardNumber.parentElement.classList.remove('not-valid');
  creditCardNumber.parentElement.lastElementChild.style.display = 'none';
}


if (!zipcodeValidation()) {
    event.preventDefault();
    zipCode.parentElement.classList.add('not-valid');
    zipCode.parentElement.classList.remove('valid');
    zipCode.parentElement.lastElementChild.style.display = 'block';
  } else {
  zipCode.parentElement.classList.add('valid');
  zipCode.parentElement.classList.remove('not-valid');
  zipCode.parentElement.lastElementChild.style.display = 'none';
}


if (!cvvValidation()) {
    event.preventDefault();
    cvv.parentElement.classList.add('not-valid');
    cvv.parentElement.classList.remove('valid');
    cvv.parentElement.lastElementChild.style.display = 'block';
  } else {
  cvv.parentElement.classList.add('valid');
  cvv.parentElement.classList.remove('not-valid');
  cvv.parentElement.lastElementChild.style.display = 'none';
}
});


//as each input field is clicked, it has a visual focus
const activitiesCheckboxes = document.querySelectorAll("input[type='checkbox']"); //https://stackoverflow.com/questions/28667741/checkbox-select-using-queryselectorall-is-not-working/28667925
//console.log(activitiesCheckboxes)


for (let i=0; i < activitiesCheckboxes.length; i++) {
    activitiesCheckboxes[i].addEventListener('focus', event => {
        event.target.parentElement.classList.add('focus');
    });
    activitiesCheckboxes[i].addEventListener('blur', event => {
        event.target.parentElement.classList.remove('focus');
    });
}
