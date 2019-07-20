view.chat = function () {
    document.getElementById('app').innerHTML = components.chat
    // events
    // dat ten len name-label
    // dat su kien cho sign-out-btn

    let form = document.getElementById(config.FORM_CHAT_ID)
    let nameLabel = document.getElementById(config.NAV_NAME_LABEL)
    let signOutBtn = document.getElementById(config.NAV_SIGN_OUT_BTN)
    let addConversationBtn = document.getElementById(config.ADD_CONVERSATION_BTN)

    form.onsubmit = formOnSubmit
    nameLabel.innerText = firebase.auth().currentUser.email
    signOutBtn.onclick = signOut
    addConversationBtn.onclick = function () {
        view.showComponents('addConversation')
    }

    let mediaQueryResult = window.matchMedia('screen and (max-width:600px)')
    let btnAddConversation = document.getElementById(config.ADD_CONVERSATION_BTN)

    // if(mediaQueryResult.matches) {
    //     btnAddConversation.innerText = '+'
    // } else {
    //     btnAddConversation.innerText = 'Add conversation'
    // }

    mediaQueryResult.addListener(mediaQueryHandler)

    function formOnSubmit(e) {
        e.preventDefault()

        let value = form.message.value
        form.message.value = ''
        models.createMessage(value)
        // 1. Mình chat
        // view.addMessage({
        //     content: value,
        //     owner: models.authUser.email
        // })

        // setTimeout(botChat, 1000)
        // form.message.value = ''

        // function botChat() {
        //     view.addMessage({
        //         content: value,
        //         owner: 'bot'
        //     })
    }
    function signOut() {
        firebase.auth().signOut()
        models.clear()
    }

    function mediaQueryHandler(mediaQuery) {
        if (mediaQuery.matches) {
            btnAddConversation.innerText = '+'
        } else {
            btnAddConversation.innerText = 'Add conversation'
        }
    }
}

view.addConversation = function () {
    let conversationContainer = document.getElementById(config.ADD_CONVERSATION_CONTAINER_ID)
    if (conversationContainer) {
        conversationContainer.innerHTML = components.addConversationForm
        // event for btn cancel & add
        let cancelBtn = document.getElementById(config.ADD_CONVERSATION_CANCEL_BTN_ID)
        let form = document.getElementById(config.ADD_CONVERSATION_FORM_ID)

        cancelBtn.onclick = cancelBtnClickHandler
        form.onsubmit = formSubmitHandler

        function cancelBtnClickHandler() {
            let html = `<button id="${config.ADD_CONVERSATION_BTN}">Add conversation</button>`
            conversationContainer.innerHTML = html

            let btnAdd = document.getElementById(config.ADD_CONVERSATION_BTN)
            btnAdd.onclick = function () {
                view.showComponents('addConversation')
            }
        }

        async function formSubmitHandler(e) {
            e.preventDefault()
            let friendEmail = form.friendEmail.value
            // name of conversation
            // validate email
            if (friendEmail.toLowerCase().trim() == models.authUser.email) {
                return view.setText(config.ADD_CONVERSATION_ERROR_ID, 'Duplicate email!')
            }
            let validationEmailExist = await firebase.auth().fetchSignInMethodsForEmail(friendEmail)
            if (!validationEmailExist.length) {
                return view.setText(config.ADD_CONVERSATION_ERROR_ID, 'Email not exists!')
            }

            let conversation = {
                name: "", // TODO
                createdAt: new Date().toISOString(),
                messages: [],
                users: [
                    friendEmail,
                    models.authUser.email
                ]
            }
            models.addConversation(conversation)
            // create conversation on db vs users [friendEmail, currentEmail]
            cancelBtnClickHandler()
        }
    }
}

view.addMessage = function (messageInfo) {
    if (messageInfo.content && messageInfo.owner) {
        let className = "chat-message"
        if (messageInfo.owner == models.authUser.email) {
            className += " your"
        }
        let html = `
            <div class="${className}">
                <span>${messageInfo.content}</span>
            </div>
        `
        document.getElementById(config.CHAT_CONTENT).innerHTML += html
    }
}

view.clearMessages = function () {
    document.getElementById(config.CHAT_CONTENT).innerHTML = ''
}

view.listConversations = function (conversations) {
    let list = document.getElementById(config.CONVERSATION_LIST_ID)
    list.innerHTML = ''
    for (let conversation of conversations) {
        let html = `
        <li id="${conversation.id}">
            <span>${conversation.name} - ${conversation.users.length} members</span>
        </li>
        `
        list.innerHTML += html

        // let li = document.getElementById(conversation.id)
        // li.onclick = liClickHandler

        // function liClickHandler() {
        //     models.setActiveConversation(conversation)
        // }
    }
    for (let conversation of conversations) {
        let li = document.getElementById(conversation.id)
        li.onclick = liClickHandler

        function liClickHandler() {
            models.setActiveConversation(conversation)
        }
    }
}
