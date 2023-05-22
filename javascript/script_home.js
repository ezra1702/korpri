var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
        nav.classList.add('bg-biru')
    }else{
        nav.classList.remove('bg-biru')
    }
})

var sukses = document.querySelector('.sukses');
const btnKirim = document.querySelector('.btn-kirim')
const maaf = document.querySelector('.maaf');
const scriptURL = 'https://script.google.com/macros/s/AKfycbwQHsjSbafMrkxmKP7TB-z6LywNUupghMYKr98PkY65Su5iMhET7DRVkCTJdrP7wS5qFQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        sukses.classList.remove('d-none');
        form.classList.add('d-none')
})
    .catch(error => {
        console.error('Error!', error.message)
        maaf.document.remove('d-none')

    })
})
