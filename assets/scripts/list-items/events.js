const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
let tempId

const onCreateListItem = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createListItem(data)
    .then(ui.createListItemSuccessful) // do not need this
    .then(onGetList)
    .catch(ui.createListItemFailed)
}

const onGetList = () => {
  api.getListItems()
    .then(ui.getListSuccessful) // fill in html
    .catch(ui.getListFailed)
}

const onUpdateListItem = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateListItem(tempId, data)
    .then(onGetList)
    .then(() => $('#update-item-modal').modal('toggle'))
    .catch(ui.updateListItemFailed)
    .always(() => tempId = null)
}

const onDeleteListItem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteListItem(id)
    .then(onGetList)
    .catch(ui.deleteListItemFailed)
}
// needed because the event is within a modal which doesn't hold the id
const onGetItemId = (event) => {
  tempId = $(event.target).data('id')
}

const onToggleCompleted = (event) => {
  const id = $(event.target).data('id')
  const data = {
    list: {
      completed: event.target.checked
    }
  }
  api.updateListItem(id, data)
    .then(onGetList)
    .catch(console.error)
}

const addEventHandlers = () => {
  $('#create-list').on('submit', onCreateListItem)
  $('#update-item-form').on('submit', onUpdateListItem)
  $('#bucket-list').on('click', '.delete-item-button', onDeleteListItem)
  // get the ID of the list item and store it for use with onUpdateListItem
  $('#bucket-list').on('click', '.update-item-button', onGetItemId)
  $('#bucket-list').on('click', '.checkbox', onToggleCompleted)
  // when modal is closed, clear the form
  $('#update-item-modal').on('hidden.bs.modal', () => $('form').trigger('reset'))
}

module.exports = {
  addEventHandlers,
  onGetList
}
