view.register = function () {
    document.getElementById('app').innerHTML = components.register

    let link = document.getElementById('form-link')
    let button = document.getElementById('form-btn')
    link.onclick = linkClickHandler
    button.onclick = buttonClickHandler

    function linkClickHandler() {
        view.showComponents('logIn')
    }

    function buttonClickHandler(e) {
        e.preventDefault()

        let form = document.getElementById(config.FORM_REGISTER_ID)
        let registerInfo = {
            firstname: form.firstname.value,
            lastname: form.lastname.value,
            email: form.email.value,
            password: form.password.value,
            confirmPassword: form.confirmPassword.value
        }
        if (!registerInfo.firstname) {
            view.setText(config.ERROR_FIRSTNAME_ID, 'Invalid firstname!')

        } else {
            view.setText(config.ERROR_FIRSTNAME_ID, '')
        }
        if (!registerInfo.lastname) {
            view.setText(config.ERROR_LASTNAME_ID, 'Invalid lastname!')
        } else {
            view.setText(config.ERROR_LASTNAME_ID, '')
        }
        if (!registerInfo.email) {
            view.setText(config.ERROR_EMAIL_ID, 'Invalid email!')
        } else {
            view.setText(config.ERROR_EMAIL_ID, '')
        }
        if (!registerInfo.password) {
            view.setText(config.ERROR_PWD_ID, 'Invalid password!')
        } else {
            view.setText(config.ERROR_PWD_ID, '')
        }
        if (!registerInfo.confirmPassword || registerInfo.password != registerInfo.confirmPassword) {
            view.setText(config.ERROR_CONFIRM_PWD_ID, 'Invalid confirm password!')
        } else {
            view.setText(config.ERROR_CONFIRM_PWD_ID, '')
        }
        if (validateRegisterInfo(registerInfo)) {
            controller.register(registerInfo)
        }
    }
}

view.logIn = function () {
    document.getElementById('app').innerHTML = components.logIn
    let link = document.getElementById('form-link')
    let button = document.getElementById('form-btn')
    link.onclick = linkClickHandler
    button.onclick = buttonClickHandler

    function linkClickHandler() {
        view.showComponents('register')
    }

    function buttonClickHandler(e) {
        e.preventDefault()
        let form = document.getElementById(config.FORM_LOG_IN_ID)
        let logInInfo = {
            email: form.email.value,
            password: form.password.value
        }

        if (!logInInfo.email) {
            view.setText(config.ERROR_EMAIL_ID, 'Invalid email!')
        } else {
            view.setText(config.ERROR_EMAIL_ID, '')
        }

        if (!logInInfo.password) {
            view.setText(config.ERROR_PWD_ID, 'Invalid password!')
        } else {
            view.setText(config.ERROR_PWD_ID, '')
        }
        if (validateLogInInfo(logInInfo)) {
            controller.logIn(logInInfo)
        }
    }
}

view.userInfo = function myFunction() {
    document.getElementById('app').innerHTML = components.userInfo

    let btn = document.getElementById('form-info-btn')
    let type = document.getElementById("user-detail")
    type.onchange = myFunction
    btn.onclick = buttonClickHandler
    function myFunction() {
        var x = document.getElementById("user-detail")

        var list = document.getElementById('user-form')
        if (x.value == 'employer') {
            let html = `<div class="form-group">
                    <input type="text" class="form-control" name="companyname" placeholder="Company name" required>
                    <div></div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="email" placeholder="Email" required>
                        <div></div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="introduction" placeholder="Introduction" required>
                        <div></div>
                    </div>
                    `
            list.innerHTML = html
        } else if (x.value == 'DEV') {
            let html = `<div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                </div>
                <select name="" class="custom-select" id="job-detail">
                    <option value="">Job</option>
                    <option value="tester">Tester</option>
                    <option value="fullstack">Fullstack</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="game">Game</option>
                </select>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="schoolname" placeholder="School name" required>
                <div></div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="major" placeholder="Major" required>
                <div></div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="awards" placeholder="Awards" required>
                <div></div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="job" placeholder="Job" required>
                <div></div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="company" placeholder="Company" required>
                <div></div>
            </div>
            <div class="form-group">
                <input type="date" class="form-control" name="from" value="1980-08-26">
                <div></div>
            </div>
            <div class="form-group">
                <input type="date" class="form-control" name="to" required>
                <div></div>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="achievements" placeholder="Achievements" required>
                <div></div>
            </div>
            `
            list.innerHTML = html
        }
    }
    function buttonClickHandler(e) {
        e.preventDefault()
        let form = document.getElementById(config.FORM_REGISTER_ID)
        let z = document.getElementById('job-detail')
        let type = document.getElementById("user-detail")

        if (type.value == "DEV") {
            let DEVinfo = {
                createdAt: new Date().toISOString(),
                owner: firebase.auth().currentUser.email,
                type: 'DEV',
                informations: {
                    education: {
                        schoolname: form.schoolname.value,
                        major: form.major.value,
                        awards: form.awards.value,
                    },
                    experience: {
                        achievements: form.achievements.value,
                        company: form.company.value,
                        from: form.from.value,
                        job: form.job.value,
                        to: form.to.value,
                    },
                    job: z.value
                }
            }
            firebase.firestore().collection('users').add(DEVinfo)
        } else {
            let employerInfo = {
                createdAt: new Date().toISOString(),
                owner: firebase.auth().currentUser.email,
                type: 'employer',
                informations: {
                    company_name: form.companyname.value,
                    email: form.email.value,
                    introduction: form.introduction.value
                }
            }
            firebase.firestore().collection('users').add(employerInfo)
        }
    }
}

// view.employerInfo = function() {
//     document.getElementById('app').innerHTML = components.userInfo

//     let btn = document.getElementById('form-info-btn')
//     let type = document.getElementById('x').value
//     view.showComponents('employerInfo')
//     btn.onclick = function (e) {
//         e.preventDefault()
//         let type = document.getElementById("x").value
//         let form = document.getElementById(config.FORM_REGISTER_ID)
//         let x = document.getElementById('job-detail')
//         let employerInfo = {
//             createdAt: new Date().toISOString(),
//             owner: firebase.auth().currentUser.email,
//             type: type,
//             informations: {
//                 company_name: form.companyname.value,
//                 email: form.email.value,
//                 introductions: form.introduction.value
//             }
//         }
//         firebase.firestore().collection('users').add(employerInfo)
//     }

// }

function validateRegisterInfo(registerInfo) {
    return registerInfo.email
        && registerInfo.password
        && registerInfo.firstname
        && registerInfo.lastname
        && registerInfo.confirmPassword == registerInfo.password
}


function validateLogInInfo(logInInfo) {
    return logInInfo.email
        && logInInfo.password
}