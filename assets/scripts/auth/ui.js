const store = require('./../store')

const signInSuccessful = function (response) {
  store.user = response.user
  console.log('Successfully signed in')
}

const signInFailed = function () {
  console.log('Failed to sign in')
}

const signUpSuccessful = function () {
  console.log('Sign up successful')
}

const signUpFailed = function () {
  console.log('Failed to sign up')
}

module.exports = {
  signInSuccessful,
  signInFailed,
  signUpSuccessful,
  signUpFailed
}