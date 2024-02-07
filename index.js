const headerText = document.querySelector('.header-title');
const yearText = document.querySelector('.year');
const openBtn = document.querySelector('.action-btn');
const closeBtn = document.querySelector('.modal_header i')
var modal = document.querySelector('.modal')
const fireWork = document.querySelector('.pyro')



const changeColor = () => {
    headerText.style.color =
    headerText.style.color == "pink" ? "yellow" : "pink";
    headerText.style.transition = '0.5s'
    yearText.style.color =
    yearText.style.color == "pink" ? "yellow" : "pink";
    yearText.style.transition = '0.5s'
}

const changeSize = () => {
    openBtn.style.transform =
    openBtn.style.transform == "scale(1.1)" ? "scale(0.9)" : "scale(1.1)"
    openBtn.style.transition = '0.65s'

}

setInterval (() => {
    changeSize()
},700)
setInterval(() => {
    changeColor()
},300)

function hideModal () {
  
    modal.classList.add('hide')

}
function showModal () {
    modal.classList.remove('hide')
}
openBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click',hideModal)


const hideFireWork = () => {
    fireWork.style.display = 'none'
}

const showFireWork = () => {
    fireWork.style.display = 'block'
}

// toTop.onclick = function () {
//     window.scrollTo({
//         top:0,
//         behavior: 'smooth'
//     })
// }






