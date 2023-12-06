//your JS code here. If required.
 // Get the input field by id
    const fnameInput = document.getElementById('fname');

    // Add a blur event listener to the input field
    fnameInput.addEventListener('blur', function() {
      // Convert the content to uppercase when the input field loses focus
      this.value = this.value.toUpperCase();
    });