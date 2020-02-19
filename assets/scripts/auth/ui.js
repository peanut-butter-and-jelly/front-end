const store = require('./../store')
const listEvents = require('./../list-items/events')
const showToast = require('../../../lib/show-toast')

const signInSuccessful = function (response) {
  store.user = response.user
  $('.signed-out').hide()
  $('.signed-in').show()
  listEvents.onGetList()
}

const signInFailed = function () {
  const header = "Error!"
  const msg = "Email was invalid or password was incorrect"
  showToast(msg, header)
}

const signUpSuccessful = function () {
  const msg = "Successfully created an account and signed in"
  showToast(msg, "Success!")
}

const signUpFailed = function (error) {
  const header = "Error!"
  showToast(error.responseJSON.message, header)
}

const signOutSuccessful = function () {
  store.user = null
  $('.signed-out').show()
  $('.signed-in').hide()
}

const signOutFailed = function () {
  const header = "Error!"
  const msg = 'Failed to sign out, please try again'
  showToast(msg, header)
}
const changePasswordFailed = function () {
  const header = "Error!"
  const msg = 'Failed to change password, make sure they both match'
  showToast(msg, header)
}
const changePasswordSuccessful = function () {
  const msg = "Successfully changed password"
  const header = "Success!"
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
