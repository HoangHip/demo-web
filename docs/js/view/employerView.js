view.newPost = function() {
    document.getElementById('app').innerHTML = components.newPost
    
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
        owner : firebase.auth().currentUser.email,
        company_name : name
    }
    
    db.collection('posts').add(ct)
        .then(() => console.log('Successfully'))
        .catch((err) => console.log(err))
    form.reset()
})
}


view.employer = function() {
    document.getElementById('app').innerHTML = components.employer

}