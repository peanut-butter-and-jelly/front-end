// shows an  toast with a custom msg and header, default header is "error"
const showToast = function (msg, header) {
  $('.toast-header').text(header)
  $('.toast').toast('show')
  $('.toast-body').text(msg)
}

module.exports = showToast
