const store = require('./../store')
const listEvents = require('./../list-items/events')

const signInSuccessful = function (response) {
  store.user = response.user
  $('.signed-out').hide()
  $('.signed-in').show()
  listEvents.onGetList()
}

const signInFailed = function () {
  console.log('Failed to sign in') // TODO: add user message
}

const signUpSuccessful = function () {
  console.log('Sign up successful')
}

const signUpFailed = function () {
  console.log('Failed to sign up')
}

const signOutSuccessful = function () {
  store.user = null
  $('.signed-out').show()
  $('.signed-in').hide()
  console.log('Sign out successful')
}

const signOutFailed = function () {
  console.log('Failed to sign out')
}
const changePasswordFailed = function () {
  console.log('failed to change pw')
}
const changePasswordSuccessful = function () {
  console.log('successfully changed pw')
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
