const store = require('./../store')
const listEvents = require('./../list-items/events')
const showToast = require('../../../lib/show-toast')

// change the view, store the user, get the user's list
const signInSuccessful = function (response) {
  store.user = response.user
  $('.signed-out').hide()
  $('.signed-in').show()
  listEvents.onGetList()

}

// shows toast for error handling
const signInFailed = function () {
  const header = 'Error!'
  const msg = 'Email was invalid or password was incorrect'
  showToast(msg, header)
}

// notifies user that their credentials were used to sign in
const signUpSuccessful = function (response) {
  store.user = response.user
  const msg = 'Successfully created an account and signed in'
  showToast(msg, 'Success!')
  $('.signed-out').hide()
  $('.signed-in').show()
  listEvents.onGetList()
}

// shows toast for error handling
const signUpFailed = function (error) {
  const header = 'Error!'
  showToast(error.responseJSON.message, header)
}

// set stored user to null, change view
const signOutSuccessful = function () {
  store.user = null
  $('.signed-out').show()
  $('.signed-in').hide()
}

// shows toast for error handling
const signOutFailed = function () {
  const header = 'Error!'
  const msg = 'Failed to sign out, please try again'
  showToast(msg, header)
}

// shows toast for error handling
const changePasswordFailed = function () {
  const msg = 'Failed to change password, please enter your current password in old password field'
  $('#change-password-feedback').text(msg)
}

// inform user of successful password change
const changePasswordSuccessful = function () {
  const msg = 'Successfully changed password'
  const header = 'Success!'
  showToast(msg, header)
}

module.exports = {
  signInSuccessful,
  signInFailed,
  signUpSuccessful,
  signUpFailed,
  signOutFailed,
  signOutSuccessful,
  changePasswordSuccessful,
  changePasswordFailed
}
