const btn = document.querySelector('.btn')
const flameWrapper = document.querySelector('.flame-wrapper')
const containerElem = document.querySelector('.container')
const popupElem = document.querySelector('.popup-cont')
const main = document.querySelector('body')

btn.addEventListener('click' , ()=>{
    flameWrapper.classList.add('hidden')
    btn.style.background = `linear-gradient(135deg, #f63b26 10%, #F5AF19 100%)`
    setTimeout(()=>{
        containerElem.children[0].classList.add('hidden')
        containerElem.children[1].classList.add('hidden')
        setTimeout(()=>{
            containerElem.classList.add('none')
            popupElem.classList.remove('none')
        },100)
    },700)
})

function getWindowInnerWidth(){
    const windowInnerheight = window.outerHeight
    main.style.height = `${windowInnerheight}px`
}

window.addEventListener('resize', (e)=>{
    getWindowInnerWidth()
})