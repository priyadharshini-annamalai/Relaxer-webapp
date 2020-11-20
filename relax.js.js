const cointainer = document.querySelector('.container')
const text = document.querySelector('#text')
const totaltime = 7500
const breathtime = (totaltime / 5)*2
const holdtime = totaltime / 5
breathanimation()
function breathanimation () {
    text.innerHTML = 'Breathe In!'
    document.getElementsByClassName("container");
    setTimeout(() => {
        text.innerHTML = 'Hold'
        setTimeout(( )=> {
            text.innerText = 'Breathe out'
        document.getElementsByClassName("container");

        },holdtime)
    },breathtime)
}
setInterval(breathanimation,totaltime)