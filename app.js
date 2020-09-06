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
  


// const scriptURL = 'source google page form'
// const form = document.querySelector('form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => console.log('Success!', response))
//         .then(() => {
//           })
//         .catch(error => console.error('Error!', error.message))
// })