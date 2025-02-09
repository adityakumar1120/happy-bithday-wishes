const btn = document.querySelector('.btn')
const flameWrapper = document.querySelector('.flame-wrapper')
const containerElem = document.querySelector('.container')
const popupElem = document.querySelector('.popup-cont')
const main = document.querySelector('main')
const snowFallAnimation = document.querySelector('.snow-ball-container')
const yesBtn = document.querySelector('.yes-btn a')
const submitBtn = document.querySelector('.submit')
const proposalElem = document.querySelector('.proposal-cont')
const codeInputElem = document.querySelector('#code-input')
let audio = new Audio
audio.src = `/audios/perfect song.unknown`
audio.preload = 'auto'

btn.addEventListener('click' , ()=>{
    flameWrapper.classList.add('hidden')
    btn.style.background = `linear-gradient(135deg, #f63b26 10%, #F5AF19 100%)`
    setTimeout(()=>{
        containerElem.children[0].classList.add('hidden')
        containerElem.children[1].classList.add('hidden')
        setTimeout(()=>{
            containerElem.classList.add('none')
            popupElem.classList.remove('none')
            setTimeout(() => {
                const codeElem = document.querySelector('.code')
                codeElem.classList.add('scale-1')
            }, 10000);
        },100)
    },700)
    setTimeout(()=>{
            audio.play()
            snowFallAnimation.innerHTML = `   <div class="snow-ball"></div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>`
    },1000)
})

codeInputElem.addEventListener('input', (e)=>{
    document.querySelector('.err').classList.add('hidden')
})

submitBtn.addEventListener('click', ()=>{
    if(parseInt(codeInputElem.value) === 2202 || codeInputElem.value.toLowerCase() == 'grishma') {
        popupElem.classList.add('none')
        document.querySelector('.err').classList.add('hidden')
        proposalElem.classList.remove('none')
        snowFallAnimation.innerHTML = ''
    } else{
        document.querySelector('.err').classList.remove('hidden')
    }
})

function sendMessage(){
    const botToken = '7938079168:AAH0KyHm5wA6az2RJe77ysNqOSQY0Qi5_6k'
    const chatId = '5095518327'
    const message = 'grishma said yes❤️'
    const encodedMessage = encodeURIComponent(message);

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodedMessage}`)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res);
    })
    .catch(console.log())
}
yesBtn.addEventListener('click' ,(e)=>{
    snowFallAnimation.innerHTML = `   <div class="snow-ball"></div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>
      <div class="snow-ball">❤️</div>`
      sendMessage()
})

