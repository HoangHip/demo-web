view.jobList = function () {
    document.getElementById('app').innerHTML = components.jobList
    models.loadJobs()

    let profileBtn = document.getElementById('profile')
    let messagesBtn = document.getElementById('messages')
    let signOutBtn = document.getElementById('sign-out')
    let form = document.getElementById('form-finding')

    profileBtn.onclick = function () {
    }
    messagesBtn.onclick = function () {
        view.showComponents('chat')
    }
    signOutBtn.onclick = function () {
        firebase.auth().signOut()
    }
    form.onsubmit = function (e) {
        e.preventDefault()
        let value = form.search.value

        if (value) {
            let newJobList = []
            models.jobList.forEach((jl) => {
                if (jl.content.position.toLowerCase() == value.toLowerCase()) {
                    newJobList.push(jl)
                }
            })
            if (newJobList) {
                view.showJob(newJobList)
            }
        }

    }

    // choice-btn
    function defaultChoiceBtn(name) {
        let choice = document.getElementById(name)
        choice.onclick = function () {
            form.search.value = name
        }
    }
    defaultChoiceBtn('tester')
    defaultChoiceBtn('full-stack')
    defaultChoiceBtn('front-end')
    defaultChoiceBtn('back-end')
    defaultChoiceBtn('game')

    // reset home-btn
    let homeBtn = document.getElementById('home-btn')
    homeBtn.onclick = function () {
        view.showComponents('jobList')
    }
}

view.showJob = function (docs) {
    document.getElementById('job-list').innerHTML = ''
    if (docs) {
        docs.forEach((doc) => {
            let html = `
            <div class="col-sm-4 col-lg-3" id="${doc.id}">
                    <div class="card">
                        <h6 class="mb-0">${doc.company_name}</h6>
                        <img src="../images/company-img.webp"  class="card-img-top">
                        <hr id="card-hr">
                        <div class="card-body">
                            <h5 class="card-title text-danger">${doc.content.title}</h5>
                            <h6 class="text-info">${doc.content.salary}</h6>
                            <h6 class="text-info">${doc.content.location}</h6>
                            <p class="card-text">${doc.content.describe}</p>
                        </div>
                    </div>
            </div>
            `
            document.getElementById('job-list').innerHTML += html
        })

        docs.forEach((doc) => {
            let job = document.getElementById(doc.id)
            job.onclick = function () {
                models.jobDetail = doc
                view.showComponents('jobDetail')
            }
        })
    }
}

view.jobDetail = async function () {
    models.employerUser = await models.loadUser(models.jobDetail.company_name)

    let html = view.setJobDetail()
    document.getElementById('app').innerHTML = html

    let profileBtn = document.getElementById('profile')
    let messagesBtn = document.getElementById('messages')
    let signOutBtn = document.getElementById('sign-out')

    profileBtn.onclick = function () {
        // view.showComponents('profile')
    }
    messagesBtn.onclick = function () {
        view.showComponents('chat')
    }
    signOutBtn.onclick = function () {
        firebase.auth().signOut()
    }

    let applyBtn = document.getElementById('apply-btn')
    let homeBtn = document.getElementById('home-btn')

    homeBtn.onclick = function () {
        view.showComponents('jobList')
    }
    applyBtn.onclick = function () {
        // do something

        alert('Apply successfully, please wait for responding!')
    }

}

view.setJobDetail = function () {
    let html = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
        <a href="#" class="navbar-brand">
            <h3 id="home-btn">LOGO</h3>
        </a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#main-nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <i class="fas fa-user-circle fa-3x nav-link"></i>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
                        User-name
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" id="profile">Profile</a>
                        <a class="dropdown-item" href="#" id="messages">Messages</a>
                        <a class="dropdown-item" href="#" id="sign-out">Sign out</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    <br>
    <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
                <img src="../images/company-img.webp" class="img-fluid">
                <h4 id="company-name">${models.jobDetail.company_name}</h4>
                <hr>
                <h5 class="text-danger">Information</h5>
                <p class="text-left">${models.employerUser.informations.introduction}</p>
            </div>
            <div class="col-md-8">
                <h1 class="display-4 text-danger">${models.jobDetail.content.title}</h1>
                <div class="text-muted text-left my-3">
                    <h4 id="money">
                        <i class="fas fa-dollar-sign"></i>
                        <span>: ${models.jobDetail.content.salary}</span>
                    </h4>
                    <h4 id="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>: ${models.jobDetail.content.location}</span>
                    </h4>
                </div>
                <div class="content">
                    <h2>The Job</h2>
                    <p class="text-left">${models.jobDetail.content.content}</p>
                </div>
                <button class="btn btn-success" id="apply-btn">Apply Now!</button>
            </div>
        </div>
    </div>
    `
    return html
}

