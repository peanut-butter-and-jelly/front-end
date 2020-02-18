const store = require('./../store')

const createListItemSuccessful = function (response) {
  console.log('Item created')
}

const createListItemFailed = function () {
  console.log('Did not create')
}

module.exports = {
  createListItemSuccessful,
  createListItemFailed
}