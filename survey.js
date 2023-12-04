document.addEventListener('DOMContentLoaded', function () {
    var surveyForm = document.getElementById('surveyForm');

    surveyForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = new FormData(surveyForm);
        formData.forEach(function (value, key) {
            console.log(key, ':', value);
        });
        alert('Thank you!')
        alert('Survey submitted successfully!');
        surveyForm.reset(); 
    });
});
