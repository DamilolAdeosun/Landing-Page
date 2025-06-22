function getStarted() {
  // Add smooth scrolling or confirmation before redirect
  const confirmation = confirm("Would you like to proceed to the contact page?");
  if (confirmation) {
      window.location.href = "contact.html";
  }
}

// Add event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add any initialization code here
  console.log("Portfolio loaded successfully");
});