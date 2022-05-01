import throttle from "lodash.throttle";

const formKey = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));
    // {
    //     formData[name] = value;
    // });

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

// form.addEventListener('input', throttle(onInput => {
//     formData.email = form.elements.email.value;
//     formData.message = form.elements.message.value;
//     localStorage.setItem('formKey', JSON.stringify(formData));
// }, 1000),
// );

function fillTheForm() {
    let parsedFilters = localStorage.getItem('formKey');
    if (parsedFilters) {
        const { email, message } = JSON.parse(parsedFilters);
        form.email.value = email;
        form.message.value = message;
        formData.email = email;
        formData.message = message;
    }

}