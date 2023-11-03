// Add this JavaScript after your existing script
function openLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "block";
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}


// Get references to the buttons
const kg15Button = document.getElementById('kg15');
const kg30Button = document.getElementById('kg30');
const list30kg = document.getElementById("list30kg");
const list15kg = document.getElementById("list15kg");

// Add click event listeners to the buttons
kg15Button.addEventListener('click', function () {
    // Remove the border from kg30 button
    kg30Button.style.border = 'none';
    list30kg.style.display = "none";

    // Add a border to kg15 button
    kg15Button.style.border = '2px solid black';
    list15kg.style.display = "block"
});

kg30Button.addEventListener('click', function () {
    // Remove the border from kg15 button
    kg15Button.style.border = 'none';
    list15kg.style.display = "none";

    // Add a border to kg30 button
    kg30Button.style.border = '2px solid black';
    list30kg.style.display = "block";
});



const tree15kg = document.getElementById('tree15kg');
const tree60kg = document.getElementById('tree60kg');
const tree60=document.getElementById("tree60");
const tree15=document.getElementById("tree15");


// Add click event listeners to the buttons
tree15kg.addEventListener('click', function () {
    // Remove the border from kg30 button
    tree60kg.style.border = 'none';
    tree60.style.display = "none";

    // Add a border to kg15 button
    tree15kg.style.border = '2px solid black';
    tree15.style.display = "contents"
});

tree60kg.addEventListener('click', function () {
    // Remove the border from kg15 button
    tree15kg.style.border = 'none';
    tree15.style.display = "none";

    // Add a border to kg30 button
    tree60kg.style.border = '2px solid black';
    tree60.style.display = "contents";
});
