document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting normally
    
    // Collect form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
  
    // Send data to Google Apps Script using Fetch API
    fetch('https://script.google.com/macros/s/AKfycbyn9AI4luU2oNj0C64Iu2FVx8TIaqK0SkgJ-RWdO8VjtIhrBqYiGKTu6wv1xVmnLBYJ/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Send JSON data
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert('Data submitted successfully!');
    }).catch(function (error) {
        alert('Error submitting data: ' + error);
    });
});

