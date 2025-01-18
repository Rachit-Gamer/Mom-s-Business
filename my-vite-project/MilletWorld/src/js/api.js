// This file integrates with the backend API to fetch or send data.

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust the base URL as needed

// Function to fetch product data
async function fetchProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to submit contact form data
async function submitContactForm(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting contact form:', error);
    }
}

// Exporting functions for use in other modules
export { fetchProducts, submitContactForm };