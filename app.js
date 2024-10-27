function navigateTo(screen) {
    window.location.href = screen; // Redirect to the chosen screen
}

function toggleAuth() {
    alert("Sign Up / Log In functionality coming soon!");
}

// Fetch distance data from the server
async function fetchDistance() {
    try {
        const response = await fetch('http://localhost:3000/distance'); // Change to your server URL
        const data = await response.json();
        document.getElementById('distance-display').innerText = `Distance: ${data.distance} cm`;
    } catch (error) {
        console.error('Error fetching distance data:', error);
    }
}

// Call fetchDistance every second to update the displayed distance
setInterval(fetchDistance, 1000);
