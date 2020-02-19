// const store = require('./../store')
const listItemsTemplate = require('./../templates/list-items.handlebars')

const createListItemSuccessful = function (response) {
  console.log('Item created')
}

const createListItemFailed = function () {
  console.log('Did not create')
}

const getListSuccessful = function (response) {
  console.log(response)
  const listHTML = listItemsTemplate({ lists: response.lists })
  $('#bucket-list').html(listHTML)
}

const getListFailed = function () {
  console.log('Did not get')
}
const updateListItemFailed = function (error) {
  console.error(error)
}

const deleteListItemFailed = function (error) {
  console.error(error)
}


module.exports = {
  createListItemSuccessful,
  createListItemFailed,
  getListSuccessful,
  getListFailed,
  deleteListItemFailed,
  updateListItemFailed
}
