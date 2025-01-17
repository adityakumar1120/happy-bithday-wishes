const btn = document.querySelector('.btn')
const flameWrapper = document.querySelector('.flame-wrapper')

btn.addEventListener('click' , ()=>{
    flameWrapper.classList.add('hidden')
    btn.style.background = `linear-gradient(135deg, #f63b26 10%, #F5AF19 100%)`
})