const view = {}

view.loading = function () {
    document.getElementById('app').innerHTML = components.loading
}

// show components to screen
// showComponents('register')
view.showComponents = function (name) {
    // 1
    // switch(name) {
    //     case 'register' : {
    //         document.getElementById('app').innerHTML = components.register
    //         break
    //     }
    // }

    // 2
  let viewHandler = view[name]
  if(viewHandler instanceof Function) {
    viewHandler()
  }
}


view.setText = function (id, message) {
    document.getElementById(id).innerText = message
}

