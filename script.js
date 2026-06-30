const signupPage = document.getElementById("signupPage");
const homePage = document.getElementById("homePage");
const signupForm = document.getElementById("signupForm");
const skipBtn = document.getElementById("skipBtn");

function goHome() {
    signupPage.classList.add("hidden");
    homePage.classList.remove("hidden");
}

// Handle sign up button
signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh
    goHome();
});

// Handle "Skip for Testing" button
skipBtn.addEventListener("click", function () {
    goHome();
});
