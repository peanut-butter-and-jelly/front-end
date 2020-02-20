const showToast = require('../../../lib/show-toast')
const listItemsTemplate = require('./../templates/list-items.handlebars')

// shows toast for error handling
const createListItemFailed = function () {
  const header = 'Error!'
  const msg = 'Failed to create an item, please try again'
  showToast(msg, header)
}

// use handlebars template to show all list items
const getListSuccessful = function (response) {
  const listHTML = listItemsTemplate({ lists: response.lists })
  $('#bucket-list').html(listHTML)
  if (response.lists.length === 0) {
    $('#message').text('Welcome, please make your bucket list!')
  } else {
    $('#message').text('Bucket List')
  }
}

// shows toast for error handling
const getListFailed = function () {
  const header = 'Error!'
  const msg = 'Failed to get your items, please refresh to try again'
  showToast(msg, header)
}

// shows toast for error handling
const updateListItemFailed = function () {
  const header = 'Error!'
  const msg = 'Failed to update your item, please try again'
  showToast(msg, header)
}

// shows toast for error handling
const deleteListItemFailed = function () {
  const header = 'Error!'
  const msg = 'Failed to delete your item, please try again'
  showToast(msg, header)
}

const onGetItemIdSuccessful = (data) => {
  const title = data.list.title
  const description = data.list.description
  $('#update-title').val(title)
  $('#update-description').val(description)
}

const onGetItemIdFailed = () => {
  const header = "Error!"
  const msg = "Failed to get bucket list item, please try again"
  showToast(msg, header)
}

module.exports = {
  createListItemFailed,
  getListSuccessful,
  getListFailed,
  deleteListItemFailed,
  updateListItemFailed,
  onGetItemIdSuccessful,
  onGetItemIdFailed
}
