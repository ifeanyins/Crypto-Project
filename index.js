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


let speakersImgTxt = document.getElementById('speakers')

let imgArr = [
  {
    img:"https://images.weserv.nl/?url=emamo.com/storage/avatars/45/23/180010_5e909ddd39d50a98c2216165a7ff4523.jpg&w=400&h=400",
    h2txt:' Aaron guss',
    h4txt:'MINGs Music Enterprises LLC',
    paragraph:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
  },
  {
    img:"https://images.weserv.nl/?url=emamo.com/storage/avatars/5d/71/179495_90565705f8014d566989bf0b05d95d71.jpg&w=400&h=400",
    h2txt:' Abel Czupor',
    h4txt:'RadioShzck',
    paragraph:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
  },
  {
    img:"https://images.weserv.nl/?url=emamo.com/storage/avatars/52/e5/180296_7f553e459f800d4de35b1d841d8e52e5.jpg&w=400&h=400",
    h2txt:'Adam Amin',
    h4txt:'CEO & Founder, Affectiva',
    paragraph:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
  },
  {
    img:"https://images.weserv.nl/?url=emamo.com/storage/avatars/aa/ba/179746_458d354d5149641fa54a0a3f0235aaba.jpg&w=400&h=400",
    h2txt:'Aaron Lane',
    h4txt:'MINGs Music Enterprises LLC',
    paragraph:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
  },
  {
    img:"https://images.weserv.nl/?url=emamo.com/storage/avatars/16/09/179285_7d272ed485eb9f82b314eaf835201609.jpg&w=400&h=400",
    h2txt:'John Wolf',
    h4txt:'Run it Wild Founder Inc',
    paragraph:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
  },
  {
    img:"images/IMG_4588.JPG",
    h2txt:'Ifeanyi NS',
    h4txt:'NS Crypto Company Founder Inc',
    paragraph:' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
  }
];

let generateImage =()=>{
  return (speakersImgTxt.innerHTML = imgArr.map((ns)=>{
    let { img, h2txt, h4txt, paragraph } = ns; 
  return `
  <div class="firstguest">
    <div class="speakers-img" id="speaker"> 
        <img src=${img} height="200px" alt="first guest"  class="speakers-img">
    </div>
    <div class="first-one">
    let {img,h2txt,h4txt,paragraph} = x;
        <h2 class="aaron"> ${h2txt} </h2>
        <h4 class="ming"> ${h4txt} </h4>
        <p class="featured-txt"> 
        ${paragraph}
        </p>
    </div>
</div>
    `
}).join(''));
};

generateImage();