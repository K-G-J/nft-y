async function loginFormHandler(event) {
  event.preventDefault()

  const email = document.querySelector('#email-login').value.trim()
  const password = document.querySelector('#password-login').value.trim()

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      document.location.replace('/dashboard/')
    } else {
      $('error-message').textContent = 'please check your email and password'
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault()

  const username = document.querySelector('#username-signup').value.trim()
  const email = document.querySelector('#email-signup').value.trim()
  const password = document.querySelector('#password-signup').value.trim()
  const wallet = document.querySelector('#wallet-signup').value.trim()

  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
        wallet
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      document.location.replace('/dashboard/')
    } else {
      $('error-message').textContent = 'please check your email and password and try again'
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler)

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)