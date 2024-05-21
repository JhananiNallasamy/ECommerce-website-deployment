document.addEventListener("DOMContentLoaded", function() {
    const feBoxes = document.querySelectorAll("#feature .fe-box");

    feBoxes.forEach(function(feBox) {
        feBox.addEventListener("click", function() {
            feBox.classList.add("clicked");
        });
    });
});
