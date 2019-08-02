controller.register = async function (registerInfo) { 
    if (validateRegisterInfo(registerInfo)) {
        try {
            let resultCreateUser = await window.firebase.auth().createUserWithEmailAndPassword(
                registerInfo.email, registerInfo.password)

            firebase.auth().currentUser.updateProfile({
                displayName: registerInfo.firstname + " " + registerInfo.lastname
            })

            firebase.auth().currentUser.sendEmailVerification()

            view.showComponents('userInfo')
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
                firebase.firestore().collection('users').get().then(function (snapshot) {
                    snapshot.docs.forEach(function (doc) {
                        let type = doc.data().type
                        let email = doc.data().owner
                        if ( type == "DEV" && email ==firebase.auth().currentUser.email) {
                            console.log('dev')
                        }
                        else if (type == "employer" && email ==firebase.auth().currentUser.email) {
                            console.log('employer')
                        }
                    })
                })
            }
        } catch (err) {
            view.setText(config.MESSAGE_ERROR_ID, err.message || "Log in failed!")
        }
    }
}

controller

// controller.initAuth = function() {
//     view.showComponents('logIn')
    // firebase.auth().onAuthStateChanged(async function(user) {
    //     if(user && user.emailVerified) {
    //         console.log('login-x')
    //         // to do             
    //         models.logIn(user)
    //     } else {
    //         if(user) {
    //             await firebase.auth().signOut()
    //         }
    //         view.showComponents('logIn')
    //     }
    // })
// }