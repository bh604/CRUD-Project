const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
  // Send PUT Request here
  fetch('/quotes', {
    method: 'put'
  })
})