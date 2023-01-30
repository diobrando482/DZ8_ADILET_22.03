const btns = document.querySelectorAll('.btn')
function showAnswer (e){
    let elem = e.target
    elem.classList.toggle('show')
    if (elem.classList.contains('show')){
        elem.innerText = 'показать ответ'
    }else{
        elem.innerText = 'скрыть ответ'
    }
    elem.previousElementSibling.classList.toggle('hide-answer')
}
btns.forEach(btn => btn.addEventListener('click',showAnswer))