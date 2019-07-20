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
        // if (!validateLastName(registerInfo.lastname)) {
        if (!registerInfo.lastname) { // !registerInfo.lastname : mạnh hơn (ktra cả trường hợp = null || "" || underf 
            view.setText(config.ERROR_LASTNAME_ID, 'Invalid lastname!')
        } else {
            view.setText(config.ERROR_LASTNAME_ID, '')
        }
        // if (registerInfo.email == '') {
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
        // TODO
        if (validateRegisterInfo(registerInfo)) {
            // console.log(validateRegisterInfo(registerInfo))
            // do register
            controller.register(registerInfo)
        }
    }
}

view.logIn = function() {
    document.getElementById('app').innerHTML = components.logIn
    let link = document.getElementById('form-link')
    let button = document.getElementById('form-btn')
    link.onclick = linkClickHandler
    button.onclick = buttonClickHandler

    function linkClickHandler() {
        view.showComponents('register')
    }

    function buttonClickHandler(e) { // e or event
        e.preventDefault()
        let form = document.getElementById(config.FORM_LOG_IN_ID)
        let logInInfo = {
            email: form.email.value,
            password: form.password.value
        }

        if (!logInInfo.email) {
            // document.getElementById(config.ERROR_EMAIL_ID).innerText = 'Invalid email!'
            view.setText(config.ERROR_EMAIL_ID, 'Invalid email!')
        } else {
            // document.getElementById(config.ERROR_EMAIL_ID) = ''
            view.setText(config.ERROR_EMAIL_ID, '')
        }

        if (!logInInfo.password) {
            view.setText(config.ERROR_PWD_ID, 'Invalid password!')
        } else {
            view.setText(config.ERROR_PWD_ID, '')
        }
        // TODO
        if (validateLogInInfo(logInInfo)) {
            // do log in 
            controller.logIn(logInInfo)
        }
    }
}

// /**
//  *  @return true |false
//  *  @param {String} email
//  */

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// function validatePassword(password) {
//     var re = /^[0-9a-zA-Z]{8,}$/;
//     return re.test(String(password).toLowerCase());
// }

/**
 * @returns true if all register valid
 * @returns else false
 * @param {Object} registerInfo : email, firstname, lastname, password, confirmPassword
 */
function validateRegisterInfo(registerInfo) {
    return registerInfo.email
        && registerInfo.password
        && registerInfo.firstname
        && registerInfo.lastname
        && registerInfo.confirmPassword == registerInfo.password
}

/**
 * @returns true if all login valid
 * @returns else false
 * @param {Object} loginInfo : email, firstname,
 */
function validateLogInInfo(logInInfo) {
    return logInInfo.email
        && logInInfo.password
}