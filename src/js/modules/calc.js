function calc() {
  'use strict';
  
  let person = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    placeSum = 0;

  person.addEventListener('input', function () {
    personsSum = +this.value;
    calc(+this.value);
  });

  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    calc();
  });

  place.addEventListener('input', function () {
    placeSum = this.options[this.selectedIndex].value;
    calc();
  });

  function calc() {
    if (restDays.value == '' || person.value == '') {
      totalValue.innerHTML = 'Вы не заполнили одно из полей!';
    } else if (placeSum < 1) {
      totalValue.innerHTML = 'Выберите направление!';
    } else {
      totalValue.innerHTML = personsSum * daysSum * 10000 * placeSum;
    }
  }
}

export default calc;
