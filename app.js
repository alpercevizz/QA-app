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

// const chk = document.getElementById('chk');

// chk.addEventListener('change', () => {
//   document.body.classList.toggle('dark');
//   console.log(document.querySelectorAll('.card'));
//   document.querySelectorAll('.card').forEach((item, index) => {
//     document.querySelectorAll('.card')[index].classList.toggle('carddark')
//   })

//   document.querySelector('#navbar').classList.toggle('carddark');
//   document.querySelector('#search').classList.toggle('dark');
//   document.querySelectorAll(".flip-card-back").forEach((item) => {
//       item.classList.toggle("carddark")
//   })
// });