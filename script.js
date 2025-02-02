document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById("loading-screen");

    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
        }, 1000);
    } else {
        console.error('Loading screen element not found.');
    }

    const productInput = document.getElementById('productInput');
    const productList = document.getElementById('productList');

    // Listen for input in the search field
    productInput.addEventListener('input', async () => {
        const query = productInput.value.toLowerCase().trim();
        productList.innerHTML = ''; // Clear the previous list

        if (query === '') {
            productList.classList.remove('visible'); // Hide the product list if no query
            return;
        }
        
        productList.classList.add('visible'); // Show the product list
    });
});


