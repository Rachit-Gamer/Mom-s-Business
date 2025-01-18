document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    function validateForm() {
        let valid = true;
        if (nameInput.value.trim() === '') {
            valid = false;
            alert('Name is required.');
        }
        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            valid = false;
            alert('Valid email is required.');
        }
        if (messageInput.value.trim() === '') {
            valid = false;
            alert('Message is required.');
        }
        return valid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function submitForm() {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent successfully!');
                form.reset();
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
    }
});