controller.initAuth = function () {
    view.showComponents('home')
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
                            console.log('employer')
                        }
                    })
                })
            models.logIn(user)
        } else {
            if (user) {
                await firebase.auth().signOut()
            }
            view.showComponents('logIn')
        }
    })
}