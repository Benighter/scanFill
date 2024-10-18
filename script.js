// QR Code Scanning and Autofill
function onScanSuccess(decodedText, decodedResult) {
    // Display scan result
    const resultsDiv = document.getElementById('qr-reader-results');
    resultsDiv.innerText = `Scan result: ${decodedText}`;

    // Simulate data parsing and autofill
    try {
        const formData = parseQRData(decodedText);

        if (formData) {
            autoFillCredentials(formData);
            resultsDiv.classList.remove('error');
        } else {
            throw new Error('Invalid QR Data');
        }
    } catch (error) {
        resultsDiv.innerText = "Error: Invalid QR code format.";
        resultsDiv.classList.add('error');
    }
}

// Initialize the QR Code scanner
let scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
scanner.render(onScanSuccess);

// Autofill function
function autoFillCredentials(formData) {
    document.getElementById('name').value = formData.name || "John Doe"; // Default or stored value
    document.getElementById('email').value = formData.email || "john.doe@example.com";
}

// QR parsing logic (assuming QR contains JSON)
function parseQRData(data) {
    try {
        return JSON.parse(data); // Example: '{"name": "John", "email": "john@example.com"}'
    } catch (error) {
        console.error("Error parsing QR data:", error);
        return null;
    }
}

// Form submission logic
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Simulate successful form submission
        const responseMsg = `Form submitted successfully with Name: ${name}, Email: ${email}`;
        showResponseMessage(responseMsg, 'success');
    } else {
        // Display error if form is incomplete
        const errorMsg = "Please fill out both Name and Email fields.";
        showResponseMessage(errorMsg, 'error');
    }
});

// Show response message
function showResponseMessage(message, type) {
    const responseDiv = document.getElementById('form-response');
    responseDiv.innerText = message;

    if (type === 'success') {
        responseDiv.classList.remove('error');
    } else {
        responseDiv.classList.add('error');
    }
}
