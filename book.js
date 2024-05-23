function openModal() {
    document.getElementById("bookingModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
  }
  
  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    closeModal();
    window.location.href = "webpage4.html";
  });
  
  