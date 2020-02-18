const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateListItem = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createListItem(data)
    .then(ui.createListItemSuccessful)
    .catch(ui.createListItemFailed)
}

const onGetList = () => {
  api.getListItems()
    .then(ui.getListSuccessful) // fill in html
    .catch(ui.getListFailed)
}
const addEventHandlers = () => {
  $('#create-list').on('submit', onCreateListItem)
}

module.exports = {
  addEventHandlers,
  onGetList
}
