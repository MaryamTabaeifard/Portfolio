let valueDisplays = document.querySelectorAll(".purecounter");


valueDisplays.forEach((valueDisplay) => {
  let startValue = parseInt(valueDisplay.getAttribute("data-purecounter-start"));
  let endValue = parseInt(valueDisplay.getAttribute("data-purecounter-end"));
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  },.1);
});