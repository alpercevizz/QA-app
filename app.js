const questions = document.querySelectorAll(".question");
const darkModeButton = document.querySelector('#checkbox');

questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if(item !== question) {
                item.classList.remove("show-text");
            }

            question.classList.toggle("show-text");
        })
    })
})

if(sessionStorage.getItem("mode") == "dark") {
    isDarkMode();
} else {
    isNotDarkMode();
}

darkModeButton.addEventListener('change', () => {
    if(darkModeButton.checked) {
        isDarkMode();
    } else {
        isNotDarkMode();
    }
});


function isDarkMode() {
    const isQuestionDarkMode = document.querySelector(".questions");
    isQuestionDarkMode.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
    darkModeButton.checked = true;
    sessionStorage.setItem("mode", 'dark');
}

function isNotDarkMode() {
    const isQuestionDarkMode = document.querySelector(".questions");
    isQuestionDarkMode.classList.remove('dark-mode');
    document.body.classList.remove('dark-mode');
    darkModeButton.checked = false;
    sessionStorage.setItem("mode", "light");
}

