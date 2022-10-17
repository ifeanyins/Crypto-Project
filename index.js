const show = document.getElementById('unviel');

const btn = document.querySelector('.join');

btn.addEventListener('click', () => {
  show.style.display = 'block'
  setTimeout(() => {
    show.style.display = 'none'
  }, 5000)
})


const reveal = document.getElementById('reveal')
const butn = document.querySelector('.thirdlayer-btn');

butn.addEventListener('click', () => {
  reveal.style.display = 'block'
  setTimeout(() => {
    reveal.style.display = 'none'
  }, 5000)
})
