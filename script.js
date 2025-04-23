document.getElementById('encode-button').addEventListener('click', function() {
    // Get client ID and client secret from input fields
    const clientId = document.getElementById('client-id').value;
    const clientSecret = document.getElementById('client-secret').value;

    if (clientId && clientSecret) {
        // Combine them with a colon
        const combined = `${clientId}:${clientSecret}`;

        // Encode the combined string to Base64
        const encodedResult = btoa(combined);

        // Display the result
        document.getElementById('result').textContent = encodedResult;
    } else {
        alert('Please fill in both Client ID and Client Secret.');
    }
});
