// Function to close the notification
function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.animation = 'slideUp 1s ease-in-out forwards';
    
    // Remove the notification from the DOM after animation
    setTimeout(() => {
        notification.style.display = 'none';
    }, 1000); // Wait for 1 second (animation duration)
}

