

const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


document.addEventListener("DOMContentLoaded", function() {
    var exp
    andTrigger = document.getElementById("expandTrigger");
    var hiddenContent = document.querySelector(".hidden-content");
    var arrow = expandTrigger.querySelector(".arrow");

    expandTrigger.addEventListener("click", function() {
        if (hiddenContent.style.maxHeight) {
            hiddenContent.style.maxHeight = null;
            arrow.textContent = "▼";
        } else {
            hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
            arrow.textContent = "▲";
        }
    });
});


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});


// Tabs.js
const darkModeToggle = document.querySelector('.dark-mode');

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    updateDarkMode();
});

function updateDarkMode() {
    document.body.classList.toggle('dark-mode-variables', isDarkMode);
    darkModeToggle.querySelector('span:nth-child(1)').classList.toggle('active', isDarkMode);
    darkModeToggle.querySelector('span:nth-child(2)').classList.toggle('active', isDarkMode);
}

updateDarkMode(); // Apply dark mode on page load



// Function to close the notification
function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.animation = 'slideUp 1s ease-in-out forwards';
    
    // Remove the notification from the DOM after animation
    setTimeout(() => {
        notification.style.display = 'none';
    }, 1000); // Wait for 1 second (animation duration)
}






