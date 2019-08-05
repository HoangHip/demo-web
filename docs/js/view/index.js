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

view.userName = function () {
  let html = `
  ${firebase.auth().currentUser.displayName}
  `
  document.getElementById('navbarDropdown').innerHTML = html
}

view.setText = function (id, message) {
    document.getElementById(id).innerText = message
}

