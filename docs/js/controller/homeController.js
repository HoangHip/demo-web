controller.initAuth = function () {
    view.showComponents('loading')
firebase.auth().onAuthStateChanged(async function (user) {
        if (user && user.emailVerified) {
            firebase.firestore().collection('users')
                .where('owner', '==', firebase.auth().currentUser.email)
                .get().then(function (snapshot) {
                    snapshot.docs.forEach(function (doc) {
                        let type = doc.data().type
                        if (type == "DEV") {
                            view.showComponents('jobList')
                        }
                        else if (type == "employer") {
                            view.showComponents('employer')
                        }
                    })
                })
            models.logIn(user)
        } else {
            view.showComponents('home')
        }
    })
}