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
            model.jobList.forEach((jl) => {
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
                        <hr class="w-70">
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

view.setJobDetail = function () {
    model.loadUser(model.jobDetail.company_name)
    console.log(model.jobDetail.company_name)

    setTimeout(() => {
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
    }, 500);
}

