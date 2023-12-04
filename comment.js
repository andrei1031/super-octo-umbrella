document.addEventListener('DOMContentLoaded', function () {
    var surveyForm = document.getElementById('commentForm');

    surveyForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = new FormData(commentForm);
        formData.forEach(function (value, key) {
            console.log(key, ':', value);
        });
        alert('Thank you!')
        alert('Comment submitted successfully!');
        surveyForm.reset(); 
    });
});