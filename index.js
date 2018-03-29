var MyForm = (function() {
    const form = document.querySelector('#myForm');
    const resultContainer = document.querySelector('#resultContainer');
    const submitBtn = form.submitButton;
    const fields = form.querySelectorAll('input');

    form.addEventListener('submit', submit)


    function validate(){
        console.log('validated');
        let regExp = /[0-9]+/;

    }


    function getData() {
        var fieldsInfo = {};
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            fieldsInfo[field.name] = field.value;
        }
        return fieldsInfo;
    }


    function setData(data) {
        var neededFields = ['phone', 'fio', 'email'];

        for (var k in data) {
            if (neededFields.indexOf(k) !== -1) {
                form[k].value = data[k];
            }
        }
    }


    function submit(e){
      e.preventDefault();
      console.log('submitted');
      validate();
    }
    return {
      validate: validate,
      getData: getData,
      setData: setData,
      submit: submit
    }
  }())

/*
- module revealing pattern
- самовызывающася функция
- глобальный объект https://learn.javascript.ru/global-object


  ECMA Script 6 (ES6)
    ()=> x*x;

array vs. nodelist*/
