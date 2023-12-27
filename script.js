document.addEventListener('DOMContentLoaded', function () {
  const formContainer = document.querySelector('.container');
  const pageHeader = document.createElement('h1');
  pageHeader.textContent = 'CREATE AN ACCOUNT';
  document.body.insertBefore(pageHeader, formContainer);

  const form = document.createElement('form');
  form.setAttribute('id', 'registrationForm');

  const formHeader = document.createElement('h2');
  formHeader.textContent = 'We always keep your name and email address \nprivate';
  formHeader.style.whiteSpace = 'pre-line';
  form.appendChild(formHeader);

  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('class', 'clas-input');
  const leftColumn = document.createElement('div');
  leftColumn.classList.add('column');
  const rightColumn = document.createElement('div');
  rightColumn.classList.add('column');

  const firstnameInput = createInput('text', 'firstname', 'First name');
  firstnameInput.classList.add('column-input');
  const lastnameInput = createInput('text', 'lastname', 'Last name');
  lastnameInput.classList.add('column-input');
  const displaynameInput = createInput('text', 'displayname', 'Display name');
  displaynameInput.classList.add('column-input');

  const emailInput = createInput('email', 'email', 'Email Address');
  emailInput.classList.add('column-input');
  const passwordInput = createInput('password', 'password', 'Password');
  passwordInput.classList.add('column-input');
  const passwordconfirmationInput = createInput('password', 'passwordconfirmation', 'Password Confirmation ');
  passwordconfirmationInput.classList.add('column-input');
  displaynameInput.addEventListener('click', () => console.log('I am Human'));

  leftColumn.appendChild(firstnameInput);
  leftColumn.appendChild(displaynameInput);
  leftColumn.appendChild(passwordInput);

  rightColumn.appendChild(lastnameInput);
  rightColumn.appendChild(emailInput);
  rightColumn.appendChild(passwordconfirmationInput);

  var containerDivSeller = document.createElement('div');
  var containerDivBuyer = document.createElement('div');
  const JoinLabel = document.createElement('label');
  const [BuyerRadio, creativeleLabel] = createRadio('Buyer', 'creative', 'Join As a Buyer');
  const buyerText = document.createElement('p');
  buyerText.textContent = 'I am looking for a Name. Logo or Tagline for my business, brand or product.';
  const [SellerRadio, ideasLabel] = createRadio('Seller', 'ideas', 'Join As a Creative or Marketplace Seller');
  const sellerText = document.createElement('p');
  sellerText.textContent = 'I plan to submit name ideas. Logo designs or sell names in Domain Marketplace.';

  const radioContainer = document.createElement('div');
  const textContainer = document.createElement('div');

  containerDivBuyer.appendChild(BuyerRadio);
  containerDivBuyer.appendChild(creativeleLabel);
  containerDivBuyer.appendChild(buyerText);

  containerDivSeller.appendChild(SellerRadio);
  containerDivSeller.appendChild(ideasLabel);
  containerDivSeller.appendChild(sellerText);

  radioContainer.appendChild(containerDivBuyer);
  radioContainer.appendChild(containerDivSeller);

  containerDivBuyer.setAttribute('class', 'container-radio');
  containerDivSeller.setAttribute('class', 'container-radio');

  const subscribeLabel = document.createElement('label');
  subscribeLabel.textContent = 'Allow Squaledhlep to send marketing/promotional offers from time to time';
  const subscribeCheckbox = createCheckbox('subscribe');

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Create account';

  inputContainer.appendChild(leftColumn);
  inputContainer.appendChild(rightColumn);
  form.appendChild(inputContainer);

  form.appendChild(radioContainer);
  form.appendChild(subscribeCheckbox);
  form.appendChild(subscribeLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(submitButton);

  formContainer.appendChild(form);
  formContainer.insertBefore(pageHeader, formContainer.firstChild);

  firstnameInput.addEventListener('blur', function () {
    resetErrors();
    if (!this.value) {
      addErrorMessage(this, 'Field cannot be empty');
    }
  });

  lastnameInput.addEventListener('blur', function () {
    resetErrors();
    if (!this.value) {
      addErrorMessage(this, 'Field cannot be empty');
    }
  });

  emailInput.addEventListener('blur', function () {
    resetErrors();
    if (!isValidEmail(this.value)) {
      addErrorMessage(this, 'Please check the format of email address');
    }
  });

  passwordInput.addEventListener('blur', function () {
    resetErrors();
    if (!isValidPassword(this.value)) {
      addErrorMessage(this, 'Invalid password format');
    }
  });

  passwordconfirmationInput.addEventListener('blur', function () {
    resetErrors();
    if (this.value !== passwordInput.value) {
      addErrorMessage(this, 'Passwords do not match');
    }
  });


  function addErrorMessage(element, message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;


    element.classList.add('error-border');

    element.parentNode.insertBefore(errorMessage, element.nextSibling);
  }

  function resetErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    const errorBorders = document.querySelectorAll('.error-border');
    errorBorders.forEach(element => element.classList.remove('error-border'));
  }

  function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)*@[A-Za-z0-9]+(\.[A-Za-z]{2,5}){1,2}$/;
    return emailRegex.test(email);
  }
  

  function isValidPassword(password) {
    const passwordRegex = /^[A-Za-z0-9_]{8,15}$/;
    return passwordRegex.test(password);
  }
});


function createInput(type, name, placeholder) {
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', name);
  input.setAttribute('placeholder', placeholder);
  input.setAttribute('required', true);
  return input;
}

function createRadio(name, value, label) {
  const radio = document.createElement('input');
  radio.setAttribute('type', 'radio');
  radio.setAttribute('name', name);
  radio.setAttribute('value', value);

  const radioLabel = document.createElement('label');
  radioLabel.textContent = label;

  return [radio, radioLabel];
}

function createCheckbox(name) {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', name);
  return checkbox;
}
