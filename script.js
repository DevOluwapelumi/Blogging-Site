// Retrieve progress from localStorage or initialize to 0
let progress = parseInt(localStorage.getItem("progress")) || 0;

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const shareBtn = document.getElementById("shareBtn");

// Update the progress bar on page load
updateProgressBar();

shareBtn.addEventListener("click", function () {
  if (progress < 100) {
    progress += 20; // Increment progress by 20%
    localStorage.setItem("progress", progress); // Save progress to localStorage
    updateProgressBar();

    // Redirect to WhatsApp
    const websiteURL = "https://yourwebsite.com";
    const message = `Check out this amazing website: ${websiteURL}`;
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.location.href = whatsappURL;
    }, 500); // Small delay for visual feedback
  }
});

// Update the progress bar and display the percentage
function updateProgressBar() {
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;

  if (progress === 100) {
    shareBtn.textContent = "Sharing Complete";
    shareBtn.disabled = true; // Disable the button at 100%
  }
}
