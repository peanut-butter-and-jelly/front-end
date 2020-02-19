const config = require('./../config')
const store = require('./../store')

const createListItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getListItems = function () {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateListItem = (tempId, data) => {
  return $.ajax({
    url: config.apiUrl + '/lists/' + tempId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteListItem = function (id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createListItem,
  getListItems,
  updateListItem,
  deleteListItem
}
