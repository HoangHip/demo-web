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





    const add_post = (post, id) => {
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
        
    }



    //get data
    db.collection('posts').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            const doc = change.doc
            if (change.type == 'added') {
                add_post(doc.data(), doc.id)
                // models.applicantList.push(doc.data().applicant)
            }
        })
    })
    // view.cvList = function () {
    //     document.getElementById('all-cv').innerHTML = ''
    //     db.collection('users').where()
    // }
}