//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Function to apply preferences
function applyPreferences() {
  const fontsize = getCookie("fontsize") || "16";
  const fontcolor = getCookie("fontcolor") || "#000000";

  // Apply the preferences to the root element
  document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
  document.documentElement.style.setProperty("--fontcolor", fontcolor);

  // Set the form fields to match saved preferences
  document.getElementById("fontsize").value = fontsize;
  document.getElementById("fontcolor").value = fontcolor;
}

// Event listener for form submission
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  const fontsize = document.getElementById("fontsize").value;
  const fontcolor = document.getElementById("fontcolor").value;

  // Save preferences as cookies
  setCookie("fontsize", fontsize, 365);
  setCookie("fontcolor", fontcolor, 365);

  // Apply the preferences
  applyPreferences();
});

// Apply preferences on page load
applyPreferences();
