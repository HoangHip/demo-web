view.newPost = function () {
    document.getElementById('app').innerHTML = components.newPost
    view.userName()
    let profileBtn = document.getElementById('profile')
    let messagesBtn = document.getElementById('messages')
    let signOutBtn = document.getElementById('sign-out')
    let homeBtn = document.getElementById('home-btn')

    homeBtn.onclick = function () {
        view.showComponents('employer')
    }

    profileBtn.onclick = function () {
    }
    messagesBtn.onclick = function () {
        view.showComponents('chat')
    }
    signOutBtn.onclick = function () {
        firebase.auth().signOut()
    }

    let name = null
    db.collection('users')
        .where('owner', '==', firebase.auth().currentUser.email)
        .get().then((snapshot) => {
            let a = snapshot.docs
            name = a[0].data().informations.company_name
        })

    const form = document.querySelector('#dev-form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        const now = new Date()
        const ct = {
            content: {
                content: form.content.value,
                describe: form.describe.value,
                location: form.location.value,
                position: form.position.value,
                salary: form.salary.value,
                title: form.title.value,
            },
            createdAt: new Date().toISOString(),
            owner: firebase.auth().currentUser.email,
            company_name: name,
            applicant: []
        }

        db.collection('posts').add(ct)
            .then(() => console.log('Successfully'))
            .catch((err) => console.log(err))
        alert('Done!!')
        view.showComponents('employer')
    })
}


view.employer = function (docs) {
    document.getElementById('app').innerHTML = components.employer
    view.userName()
    let profileBtn = document.getElementById('profile')
    let messagesBtn = document.getElementById('messages')
    let signOutBtn = document.getElementById('sign-out')
    let newPostBtn = document.getElementById('new-post-btn')
    let homeBtn = document.getElementById('home-btn')

    homeBtn.onclick = function () {
        view.showComponents('employer')
    }

    profileBtn.onclick = function () {
    }
    messagesBtn.onclick = function () {
        view.showComponents('chat')
    }
    signOutBtn.onclick = function () {
        firebase.auth().signOut()
    }
    newPostBtn.onclick = function () {
        view.showComponents('newPost')
    }
    const dev_name = document.querySelectorAll('.name')
    const all_post = document.querySelector('.all-post')
    const dev_list = document.getElementById('all-cv')

    const array_dev = []
    dev_name.forEach(dev => array_dev.push(dev))





    const add_post = (post, id, applicant) => {
        let html = `
    <div class="child-post card" id ="${id}">
        <div class="company-name d-flex justify-content-center">${post.company_name}</div>
            <div class="img-post">
            </div>
            <div class="card-body">
                <h5 class="card-title text-danger">${post.content.title}</h5>
                <h6 class="text-info">${post.content.salary}</h6>
                <h6 class="text-info">${post.content.location}</h6>
                <p class="card-text">${post.content.describe}</p>
            </div>
        </div>
    </div>
    `
        all_post.innerHTML += html

        setTimeout(() => {
            let job = document.getElementById(id)
            job.onclick = async function (e) {
                document.getElementById('all-cv').innerHTML = ''
                console.log(id)

                e.preventDefault()
                // let b = []
                // haha = function () {
                //     return new Promise(function (solve, reject) {
                //         firebase.firestore()
                //             .collection('posts')
                //             // .where('id', '==', id)
                //             .get().then((snapshot) => {
                //                 console.log(snapshot.docs)
                //                 let docs = snapshot.docs
                //                 docs.forEach((doc) => {
                //                     if (doc.data().applicant[0]) {
                //                         console.log(doc.data().applicant)
                //                         b.push(doc.data().applicant)
                //                     }
                //                 })
                //                 console.log(b[0])
                //                 solve(docs)
                //             })
                //     })
                // }
                // let hehe = await haha()

                for (i of applicant) {
                    firebase.firestore()
                        .collection('users')
                        .where('owner', '==', i)
                        .get().then((snapshot) => {
                            console.log('ok')
                            let user = snapshot.docs[0].data()
                            let allCv = document.getElementById('all-cv')
                            let html = `
                                    <div class="card">
                                        <h6 class="mb-0">${user.owner}</h6>
                                        <hr id="card-hr">
                                        <div class="card-body">
                                            <h5 class="card-title text-danger">${user.informations.job}</h5>
                                            <h6 class="text-info">Experience</h6>
                                            <p class="card-text">Company: ${user.informations.experience.company}</p>
                                            <p class="card-text">From: ${user.informations.experience.from} to ${user.informations.experience.to}</p>
                                            <p class="card-text">Job: ${user.informations.experience.job}</p>
                                            <h6 class="text-info">Education</h6>
                                            <p class="card-text">School name:${user.informations.education.schoolname}</p>
                                        </div>
                                        <div class="selector">
                                            <button type="button" class="btn btn-primary btn-sm ">Accept</button>
                                            <button type="button" class="btn btn-danger btn-sm ">Deny</button>
                                            <button type="button" class="btn btn-info btn-sm ">More Detail</button>
                                        </div>
                                    </div>
                                                `

                            allCv.innerHTML += html
                        })
                }
            }

        }, 500);
    }



    //get data
    db.collection('posts').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            const doc = change.doc
            if (change.type == 'added') {
                add_post(doc.data(), doc.id, doc.data().applicant)
                console.log(doc.data().applicant)
            }
        })
    })
}

// view.cvList = function (a) {
//     let userInfo = null
//     db.collection('users')
//         .where('owner', '==', a)
//         .get().then((snapshot) => {
//             let z = snapshot.docs
//             userInfo = z[0].data()
//             let allCv = document.getElementById('all-cv')
//             let html = `
//                             <div class="card">
//                                 <h6 class="mb-0">${userInfo.owner}</h6>
//                                 <hr id="card-hr">
//                                 <div class="card-body">
//                                     <h5 class="card-title text-danger">${userInfo.informations.job}</h5>
//                                     <h6 class="text-info">Experience</h6>
//                                     <p class="card-text">Company: ${userInfo.informations.experience.company}</p>
//                                     <p class="card-text">From: ${userInfo.informations.experience.from} to ${userInfo.informations.experience.to}</p>
//                                     <p class="card-text">Job: ${userInfo.informations.experience.job}</p>
//                                     <h6 class="text-info">Education</h6>
//                                     <p class="card-text">School name:${userInfo.informations.education.schoolname}</p>
//                                 </div>
//                                 <div class="selector">
//                                     <button type="button" class="btn btn-primary btn-sm ">Accept</button>
//                                     <button type="button" class="btn btn-danger btn-sm ">Deny</button>
//                                     <button type="button" class="btn btn-info btn-sm ">More Detail</button>
//                                 </div>
//                             </div>
//             `

//             allCv.innerHTML += html
//         })
// }