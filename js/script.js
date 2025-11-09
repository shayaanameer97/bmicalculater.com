const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');
const weightError = document.getElementById('weightError');
const heightError = document.getElementById('heightError');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');

function validateInput(value, errorElement) {
  if (!value || value <= 0) {
    errorElement.style.display = 'block';
    errorElement.textContent = 'Please enter a valid positive number.';
    return false;
  } else {
    errorElement.style.display = 'none';
    return true;
  }
}

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  const isWeightValid = validateInput(weight, weightError);
  const isHeightValid = validateInput(heightCm, heightError);

  if (!isWeightValid || !isHeightValid) {
    resultDiv.className = 'result show';
    resultDiv.textContent = 'Correct the errors above.';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);

  let category = '';
  let categoryClass = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    categoryClass = 'underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
    categoryClass = 'normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    categoryClass = 'overweight';
  } else {
    category = 'Obese';
    categoryClass = 'obese';
  }

  // Animate result display by fading in text
  resultDiv.className = 'result ' + categoryClass + ' show';
  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}

function resetForm() {
  weightInput.value = '';
  heightInput.value = '';
  weightError.style.display = 'none';
  heightError.style.display = 'none';
  resultDiv.className = 'result';
  resultDiv.textContent = '';
}

calculateBtn.addEventListener('click', calculateBMI);
resetBtn.addEventListener('click', resetForm);
