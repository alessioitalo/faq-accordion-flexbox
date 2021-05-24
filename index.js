const questions = document.querySelectorAll('.faq__question');

questions.forEach(question=>{
    question.addEventListener('click', ()=>{
        question.parentElement.querySelector('.faq__answer').classList.toggle('not-hidden')
        question.parentElement.querySelector('.faq__question').classList.toggle('active')
        question.parentElement.querySelector('.arrow').classList.toggle('rotate')
        // question.parentElement.querySelector('.arrow').style.transform = 'rotate(180deg)'
    })
})