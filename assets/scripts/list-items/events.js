const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// needed because we use a modal which isn't tied to the handlebars generated
// elements to update
let tempId

// create a new item and store it in db, if successful get the updated list
const onCreateListItem = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createListItem(data)
    .then(() => $('#create-item-modal').modal('toggle'))
    .then(onGetList)
    .catch(ui.createListItemFailed)
}

// get all list items owned by user (api knows owner based on token)
const onGetList = () => {
  api.getListItems()
    .then(ui.getListSuccessful) // fill in html
    .catch(ui.getListFailed)
}

// needed because the event is within a modal which doesn't hold the id
const onGetItemId = (event) => {
  tempId = $(event.target).data('id')
}

// use the form data of modal to update the list item using the stored ID
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

// delete the list item using the handlebars data-id attr
const onDeleteListItem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteListItem(id)
    .then(onGetList)
    .catch(ui.deleteListItemFailed)
}

// if a user clicks the checkbox, make an api call to toggle its completed state,
// if successful, get the updated list which will now show it with different styling
const onToggleCompleted = (event) => {
  const id = $(event.target).data('id')
  const data = {
    list: {
      completed: event.target.checked
    }
  }
  api.updateListItem(id, data)
    .then(onGetList)
    .catch(ui.updateListItemFailed)
}

const addEventHandlers = () => {
  $('#create-list').on('submit', onCreateListItem)
  $('#update-item-form').on('submit', onUpdateListItem)
  $('#bucket-list').on('click', '.delete-item-button', onDeleteListItem)
  // get the ID of the list item and store it for use with onUpdateListItem
  $('#bucket-list').on('click', '.update-item-button', onGetItemId)
  $('#bucket-list').on('click', '.checkbox', onToggleCompleted)

  // when modal is closed, clear the form
  // $('#update-item-modal').on('hidden.bs.modal', () => $('form').trigger('reset'))

  $('.modal').on('hidden.bs.modal', () => $('form').trigger('reset'))
}

module.exports = {
  addEventHandlers,
  onGetList
}
