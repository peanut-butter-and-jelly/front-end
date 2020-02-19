const showToast = require('../../../lib/show-toast')
const listItemsTemplate = require('./../templates/list-items.handlebars')

const createListItemFailed = function () {
  const header = "Error!"
  const msg = "Failed to create an item, please try again"
  showToast(msg, header)
}

const getListSuccessful = function (response) {
  const listHTML = listItemsTemplate({ lists: response.lists })
  $('#bucket-list').html(listHTML)
}

const getListFailed = function () {
  const header = "Error!"
  const msg = "Failed to get your items, please refresh to try again"
  showToast(msg, header)
}
const updateListItemFailed = function (error) {
  const header = "Error!"
  const msg = "Failed to update your item, please try again"
  showToast(msg, header)
}

const deleteListItemFailed = function (error) {
  const header = "Error!"
  const msg = "Failed to delete your item, please try again"
  showToast(msg, header)
}


module.exports = {
  createListItemFailed,
  getListSuccessful,
  getListFailed,
  deleteListItemFailed,
  updateListItemFailed
}
