$(document).ready(function () {
    $('#registrationForm').submit(function (e) {
        e.preventDefault();

        const formData = $(this).serialize();
        $.ajax({
            url: 'submit.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                $('#response').html(response).fadeIn();
                $('#registrationForm')[0].reset();
            },
            error: function () {
                $('#response').html('<p style="color:red;">Error processing your request.</p>').fadeIn();
            }
        });
    });
});
