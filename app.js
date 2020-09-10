console.log('hello')

let currentImgIndex = 0

const images = ['images/bernd.png', 'images/dulce.png', 'images/marloes.png', 'images/maxime.png', 'images/nadja.png',  'images/paul.png']

const mainImage = document.getElementById('mainImage')

console.log('mainImage')

mainImage.setAttribute('src', images[currentImgIndex])

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

console.log('next')
console.log('prev')

next.addEventListener('click', () => {
    if(currentImgIndex >= images.length - 1){
        currentImgIndex = 0
    } else {
        currentImgIndex += 1
    }
    mainImage.setAttribute('src', images[currentImgIndex])
    
})

prev.addEventListener('click', () => {
    if(currentImgIndex >= images.length - 1){
        currentImgIndex = 0
    } else {
        currentImgIndex += 1
    }
    mainImage.setAttribute('src', images[currentImgIndex])
  })

const scriptURL = 'https://script.google.com/macros/s/AKfycbxZp258TUvhXocnq57q7jhvC-Tt-ayWMwrX-xwmzl_WcvVIl1U/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {        })
        .catch(error => console.error('Error!', error.message))
})

const apiKey = "i9u5FoDahfPMI2LFAipRD3KXJ45afk0f"
const gifSearch = (event) => {
  event.preventDefault()
  const giphyResultsDiv = document.getElementById('giphy-results')
  const searchTerm = document.querySelector('input[name="search-term"]').value;
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`)
    .then(res => res.json())
    .then(res => {
        console.log(res.data)
      for(let i = 0; i < res.data.length; i++){
        const url = res.data[i].images.fixed_width.url;
        const image = document.createElement('img');
        image.setAttribute('src', url);
        giphyResultsDiv.appendChild(image);
      }
    })
}
document.querySelector("#search-form").addEventListener("submit", gifSearch)