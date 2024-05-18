// hijack.js
console.log("Hijack.js script loaded");

// Change the background color of the body
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "#f0f0f0";
});

// Example: Adding a new element to the page
document.addEventListener("DOMContentLoaded", function() {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<h1>Welcome to my Shopify store!</h1>";
    newDiv.style.textAlign = "center";
    newDiv.style.marginTop = "20px";
    document.body.appendChild(newDiv);
});
