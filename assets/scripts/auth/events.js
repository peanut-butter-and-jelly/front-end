const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// signs user up, if successful then use same data to trigger sign in
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(() => api.signIn(data))
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailed)
    .always(() => $('form').trigger('reset'))
}

// signs user in and gets all of their bucket list items
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailed)
    .always(() => $('form').trigger('reset'))
}

// just signs user out and sets token to null if successful
const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailed)
    .always(() => $('form').trigger('reset'))
}

// attempts to change password and notifies user of result
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
