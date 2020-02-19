const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // on successful sign up, use the data to then sign in
  api.signUp(data)
    // .then means it was successful so we can use the same data to sign in
    .then(() => api.signIn(data))
    .then(ui.signInSuccessful)
    .catch(ui.signUpFailed)
    .always(() => $('form').trigger('reset'))
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailed)
    .always(() => $('form').trigger('reset'))
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailed)
    .always(() => $('form').trigger('reset'))
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailed)
    .always(() => $('form').trigger('reset'))
}

const addEventHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-pw').on('submit', onChangePassword)
}

module.exports = {
  addEventHandlers
}
