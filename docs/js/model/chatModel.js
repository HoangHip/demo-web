models.loadConversations = function (email) {
    firebase.firestore()
        .collection('conversations')
        .where('users', 'array-contains', email)
        .orderBy('upToDate')
        .onSnapshot((snapshot) => {
            if (!models.conversations) {
                // first load
                models.conversations = snapshot.docChanges().map((docChange) => {
                    let conversation = docChange.doc.data()
                    conversation.id = docChange.doc.id
                    return conversation
                })

                models.conversations.reverse()
                console.log(models.conversations[1])

                if (models.conversations) {
                    models.setCurrentActiveConversation(models.conversations[0])
                }

            } else {
                // change load
                for (let docChange of snapshot.docChanges()) {
                    if (docChange.type == 'modified') {
                        let conversation = docChange.doc.data()
                        conversation.id = docChange.doc.id

                        let foundIndex = models.conversations.findIndex((cvst) => {
                            return cvst.id == conversation.id
                        })
                        if (foundIndex >= 0) {
                            models.conversations.splice(foundIndex, 1) // delete the element of array
                            models.conversations.unshift(conversation) // add element to the first of array
                        }


                        if (models.currentActiveConversations
                            && models.currentActiveConversations.id == conversation.id) {
                            models.setCurrentActiveConversation(conversation)
                        }
                    }

                    // added
                    if (docChange.type == 'added') {
                        let conversation = docChange.doc.data()
                        conversation.id = docChange.doc.id
                        // add conversation to the first of array
                        models.conversations.unshift(conversation)

                        models.setCurrentActiveConversation(conversation)
                        // view.listConversations(model.conversations)
                    }
                }

            }
            view.listConversations(models.conversations)
        })
}

models.setCurrentActiveConversation = function (conversation) {
    models.currentActiveConversations = conversation
    view.clearMessages()

    if (conversation.messages) {
        for (let message of conversation.messages) {
            view.addMessage(message)
        }
    }
}

models.createMessage = function (content) {
    let message = {
        owner: models.authUser.email,
        content: content,
        createAt: new Date().toISOString()
    }

    firebase.firestore()
        .collection('conversations')
        .doc(models.currentActiveConversations.id)
        .update({
            messages: firebase.firestore.FieldValue.arrayUnion(message),
            upToDate: new Date().toISOString()
        })
}


models.addConversation = function (conversation) {
    firebase.firestore()
        .collection('conversations')
        .add(conversation)
}