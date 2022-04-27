import throttle from "lodash.throttle";

const formKey = "feedback-form-state";

// import { Value } from "sass";

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, name) =>  {
        formData[name] = value;
    });

});

form.addEventListener('reset', () => {
    localStorage.removeItem('formKey')
});

form.addEventListener('change', event => {
    let parsedFilters = localStorage.getItem('formKey');
    parsedFilters = parsedFilters ? JSON.parse
    (parsedFilters) : [ ];
    parsedFilters[event.target.name] = event.target.value;

    if (parsedFilters) {
        localStorage.setItem('formKey', JSON.stringify(parsedFilters));
    }
});

function fillTheForm() {
    let parsedFilters = localStorage.getItem('formKey');
    if (parsedFilters) {
        const { email, message } = JSON.parse(enteredData);
        form.email.value = email;
        form.message.value = message;
        formData.email = email;
        formData.message = message;
    }

}