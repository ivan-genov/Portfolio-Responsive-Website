// Get the element with the id "sanddd"
var sanddd = document.getElementById("sanddd");

// Function to hide or show the sanddd element
function myFunction(x) {
  x.classList.toggle("change");

  if (sanddd.style.display === "none") {
    sanddd.style.display = "block";
    document.body.style.overflow = "hidden"; 
    window.scrollTo(0, 0);
  } else {
    sanddd.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
