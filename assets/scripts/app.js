'use strict'

const authEvents = require('./auth/events.js')
const listItemEvents = require('./list-items/events.js')

$(() => {
  authEvents.addEventHandlers()
  listItemEvents.addEventHandlers()
  $('.signed-out').show()
  $('.signed-in').hide()
})
