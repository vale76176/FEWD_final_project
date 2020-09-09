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
        .then(() => {
            //This is where you write your code




            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})

// const form = document.getElementById('application-form')
// // console.log(form)
// const state = document.getElementById('state')
// // console.log(state)
// const error = document.querySelector('#error')
// // console.log(error)
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     // console.log('this may work')
//     if(state.value !== 'NJ'){
//         error.innerText = 'Error: Applicant must reside in NJ'
//         error.style.color = 'red'
//         // alert('Hey we don\'t use alerts anymore')
//     } else {
//         error.innerText = ""
//     }
// })
// -------- html



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