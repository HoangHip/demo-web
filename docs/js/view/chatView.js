view.chat = function () {
    document.getElementById('app').innerHTML = components.chat
    models.logIn(firebase.auth().currentUser)
    models.loadConversations(firebase.auth().currentUser.email)
    view.userName()
    let profileBtn = document.getElementById('profile')
    let messagesBtn = document.getElementById('messages')
    let signOutBtn = document.getElementById('sign-out')
    let homeBtn = document.getElementById('home-btn')

    profileBtn.onclick = function () {
        // view.showComponents('profile')
    }
    messagesBtn.onclick = function () {
        view.showComponents('chat')
    }
    signOutBtn.onclick = function () {
        firebase.auth().signOut()
    }
    homeBtn.onclick = function () {
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
    }

    let form = document.getElementById('form-chat')
    form.onsubmit = function (e) {
        e.preventDefault()
        let content = form.message.value
        form.reset()
        models.createMessage(content)
    }
}

view.addMessage = function (messageInfo) {
    if (messageInfo.owner && messageInfo.content) {
        let className = 'chat-message'

        if (messageInfo.owner == models.authUser.email) {
            className += ' your'
        }

        let html = `
        <div class="${className}">
            <span>${messageInfo.content}</span>
        </div>
        `

        let chatContent = document.getElementById('chat-content')
        chatContent.innerHTML += html
        view.scollToBottom('chat-content')
    }
}

view.clearMessages = function () {
    document.getElementById('chat-content').innerHTML = ''
}

view.listConversations = function (conversations) {
    // save old active-conversation
    let activeLi = document.getElementsByClassName('active-conversation')
    let activeLiId = null
    if (activeLi.length) {
        activeLiId = activeLi[0].id
    }
    // delete old conversation list
    let list = document.getElementById('conversation-list')
    list.innerHTML = ''

    if (conversations) {
        for (let conversation of conversations) {
            for (let user of conversation.users_Info) {
                if (user.email != models.authUser.email) {
                    let html = `
                    <div id="${conversation.id}">
                        <span>${user.name}</span>
                    </div>
                    `
                    list.innerHTML += html
                    break
                }
            }
        }

        if (activeLiId) {
            document.getElementById(activeLiId).classList.add('active-conversation')
        }

        for (let conversation of conversations) {
            let li = document.getElementById(conversation.id)
            li.onclick = function () {
                let oldLi = document.getElementsByClassName('active-conversation')
                if (oldLi.length) {
                    oldLi[0].classList.remove('active-conversation')
                }

                models.setCurrentActiveConversation(conversation)
                view.setDetails(conversation)
                li.classList.add('active-conversation')
            }
        }
    }
}

view.setDetails = function (conversation) {
    let details = document.getElementById('conversation-detail')
    details.innerHTML = ''
    firebase.firestore()
        .collection('posts')
        .where('content.title', '==', conversation.title)
        .get().then((snapshot) => {
            let doc = snapshot.docs[0].data()
            let html = `
            <h4 class="text-danger text-center">${doc.content.title}</h4>
            <div class="text-muted my-3">
                <div id="money">
                    <i class="fas fa-dollar-sign"></i>
                    <span>: ${doc.content.salary}</span>
                </div>
                <div id="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>: ${doc.content.location}</span>
                </div>
            </div>
            <p>${doc.content.describe}</p>
            `
            details.innerHTML = html
        })
}

view.clearDetails = function () {
    document.getElementById('conversation-detail').innerHTML = ''
}

view.scollToBottom = function (id) {
    let element = document.getElementById(id)
    element.scrollTop = element.scrollHeight - element.clientHeight
}