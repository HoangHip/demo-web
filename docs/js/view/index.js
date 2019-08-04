const view = {}

view.loading = function () {
    document.getElementById('app').innerHTML = components.loading
}

view.noti = function() {
  document.getElementById('app').innerHTML = components.noti
}

view.showComponents = function (name) {

  let viewHandler = view[name]
  if(viewHandler instanceof Function) {
    viewHandler()
  }
}


view.setText = function (id, message) {
    document.getElementById(id).innerText = message
}

