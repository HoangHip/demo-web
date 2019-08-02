view.home = function () {
    document.getElementById('app').innerHTML = components.home

    let started_btn = document.getElementById('started-btn')

    started_btn.onclick = startedbuttonClickHandler

    function startedbuttonClickHandler() {
        view.showComponents('logIn')
    }
}

