document.getElementById('encode-button').addEventListener('click', function() {
    // Get client ID, client secret, and output type from input fields
    const clientId = document.getElementById('client-id').value;
    const clientSecret = document.getElementById('client-secret').value;
    const outputType = document.getElementById('output-type').value;

    if (clientId && clientSecret) {
        // Combine them with a colon
        const combined = `${clientId}:${clientSecret}`;

        // Encode the combined string to Base64
        const encodedResult = btoa(combined);

        // Display the result based on the selected output type
        let result;
        if (outputType === "raw") {
            result = encodedResult;
        } else if (outputType === "auth-header") {
            result = `Authorization: Basic ${encodedResult}`;
        }

        document.getElementById('result').textContent = result;
    } else {
        alert('Please fill in both Client ID and Client Secret.');
    }
});
