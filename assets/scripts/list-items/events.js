const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
let tempId

const onCreateListItem = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createListItem(data)
    .then(ui.createListItemSuccessful)
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
  //.finally(console.log)
}

const onDeleteListItem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteListItem(id)
    .then(onGetList)
    .catch(ui.deleteListItemFailed)
}

const getItemId = (event) => {
  tempId = $(event.target).data('id')
  console.log('HERE IS THE ID' + tempId)
}

const addEventHandlers = () => {
  $('#create-list').on('submit', onCreateListItem)
  $('#update-item-form').on('submit', onUpdateListItem)
  $('#bucket-list').on('click', '.delete-item-button', onDeleteListItem)
  // get the ID of the list item and store it for use with onUpdateListItem
  $('#bucket-list').on('click', '.update-item-button', getItemId)
}

module.exports = {
  addEventHandlers,
  onGetList
}
