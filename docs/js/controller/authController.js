controller.register = async function (registerInfo) {
    if (validateRegisterInfo(registerInfo)) {
        try {
            let resultCreateUser = await window.firebase.auth().createUserWithEmailAndPassword(
                registerInfo.email, registerInfo.password)

            firebase.auth().currentUser.updateProfile({
                displayName: registerInfo.firstname + " " + registerInfo.lastname
            })

            firebase.auth().currentUser.sendEmailVerification()
            view.showComponents('noti')
            setTimeout(function () { view.showComponents('userInfo'); }, 4000)

        } catch (err) {
            view.setText(config.MESSAGE_ERROR_ID, err.message || "Register failed!")
        }

    }
}


controller.logIn = async function (logInInfo) {
    if (validateLogInInfo(logInInfo)) {
        try {
            let result = await firebase.auth().signInWithEmailAndPassword(
                logInInfo.email,
                logInInfo.password
            )
            if (!result.user.emailVerified) {
                throw new Error('Please verify email first')
            } else {
                firebase.firestore().collection('users')
                    .where('owner', '==', firebase.auth().currentUser.email)
                    .get().then(function (snapshot) {
                        snapshot.docs.forEach(function (doc) {
                            let type = doc.data().type
                            let email = doc.data().owner
                            if (type == "DEV" && email == firebase.auth().currentUser.email) {
                                view.showComponents('jobList')
                            }
                            else if (type == "employer" && email == firebase.auth().currentUser.email) {
                                view.showComponents('employer')
                            }
                        })
                    })
            }
        } catch (err) {
            view.setText(config.MESSAGE_ERROR_ID, err.message || "Log in failed!")
        }
    }
}


