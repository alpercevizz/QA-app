const questions = document.querySelectorAll(".question");

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

const darkMode = document.querySelector('input');
darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
})
