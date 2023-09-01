document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
  
    searchButton.addEventListener("click", function() {
      const searchTerm = searchInput.value;
      if (searchTerm.trim() !== "") {
        alert(`You searched for: ${searchTerm}`);
      } else {
        alert("Please enter a search term.");
      }
    });
  });
  