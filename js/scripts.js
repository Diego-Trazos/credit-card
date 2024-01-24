const nameInputElement = document.getElementById('name');
const numberInputElement = document.getElementById('number');
const monthInputElement = document.getElementById('month');
const yearInputElement = document.getElementById('year');
const cvcInputElement = document.getElementById('cvc');
const buttonConfirmElement = document.getElementById('button-confirm');

const inputsElementsIndex = [
  'nameInputElement',
  'numberInputElement',
  'monthInputElement',
  'yearInputElement',
  'cvcInputElement'
];
const inputsElements = [
  nameInputElement,
  numberInputElement,
  monthInputElement,
  yearInputElement,
  cvcInputElement
];

const nameOutputElement = document.getElementById('card-name');
const numberOutputElement = document.getElementById('card-number');
const monthOutputElement = document.getElementById('card-month');
const yearOutputElement = document.getElementById('card-year');
const cvcOutputElement = document.getElementById('card-cvc');

const outputsElements = [
  nameOutputElement,
  numberOutputElement,
  monthOutputElement,
  yearOutputElement,
  cvcOutputElement
];

const nameAlertElement = document.getElementById('alert-name');
const numberAlertElement = document.getElementById('alert-number');
const monthAlertElement = document.getElementById('alert-month');
const yearAlertElement = document.getElementById('alert-year');
const cvcAlertElement = document.getElementById('alert-cvc');

const alertsElements = [
  nameAlertElement,
  numberAlertElement,
  monthAlertElement,
  yearAlertElement,
  cvcAlertElement
];

const cardTexts = ['PAQUITA SALAS', '0000 0000 0000 0000', '00', '00', '000'];

const printTextCard = event => {
  const index = inputsElementsIndex.indexOf(`${event.target.id}InputElement`);
  if (event.target.value === '') {
    outputsElements[index].textContent = cardTexts[index];
  } else {
    outputsElements[index].textContent =
      inputsElements[index].value.toUpperCase();
  }
};

const validateForm = () => {
  for (let i = 0; i < inputsElements.length; i++) {
    if (inputsElements[i].value === '') {
      inputsElements[i].classList.add('wrong-input');
      alertsElements[i].classList.add('show');
    } else {
      inputsElements[i].classList.remove('wrong-input');
      alertsElements[i].classList.remove('show');
    }
  }

  for (let i = 1; i < inputsElements.length; i++) {
    console.log(inputsElements[i].value);
    if (!inputsElements[i].value.match(/^[0-9]+$/)) {
      inputsElements[i].classList.add('wrong-input');
    }
  }
  //Función con la animación de validación
};

nameInputElement.addEventListener('input', printTextCard);
numberInputElement.addEventListener('input', printTextCard);
monthInputElement.addEventListener('input', printTextCard);
yearInputElement.addEventListener('input', printTextCard);
cvcInputElement.addEventListener('input', printTextCard);

buttonConfirmElement.addEventListener('click', validateForm);
