

// post-collection
models.loadJobs = function () {
    firebase.firestore()
        .collection('posts')
        .orderBy('createdAt')
        .onSnapshot((snapshot) => {
            let docChanges = snapshot.docChanges()
            if (!models.jobList[0]) {
                // the first load
                docChanges.forEach((docChange) => {
                    let post = docChange.doc.data()
                    post.id = docChange.doc.id
                    models.jobList.push(post)
                })
            }
            view.showJob(models.jobList)
        })
}


// user-collection
models.loadUser = function (name) {
    return new Promise (function(solve, reject) {
        firebase.firestore()
        .collection('users')
        .where('informations.company_name', '==', name)
        .get().then((snapshot) => {
            let docs = snapshot.docs
            if (docs) {
                // models.employerUser = docs[0].data()
                solve(docs[0].data())
            }
        })
    })
}

