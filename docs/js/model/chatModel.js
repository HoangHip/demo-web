models.loadConversations = function (email) {
    firebase.firestore()
        .collection('conversations')
        .where('users', 'array-contains', email)
        .onSnapshot(function (snapshot) {
            if (!models.conversations) {
                //first loading

                // let conversations = []
                // for (let doc of snapshot.docs) {
                //     let conversation = doc.data()
                //     conversation.id = doc.id
                //     conversations.push(conversation)
                // }

                let conversations = snapshot.docs.map(function (doc) {
                    let conversation = doc.data()
                    conversation.id = doc.id
                    return conversation
                })
                models.conversations = conversations
                if (conversations.length) {
                    models.setActiveConversation(conversations[0])
                }
            } else {
                // doc change
                for (let docChange of snapshot.docChanges()) {
                    if (docChange.type == 'modified') {
                        let conversation = docChange.doc.data()
                        // title = '' , cratedAt = Date,
                        // user = [email], messages = [message]
                        conversation.id = docChange.doc.id
                        let foundIndex = models.conversations.findIndex(function (cvst) {
                            return conversation.id = cvst.id
                        })
                        if (foundIndex >= 0) {
                            models.conversations[foundIndex] = conversation
                        }
                        if (models.currentActiveConversation
                            && conversation.id == models.currentActiveConversation.id) {
                            models.setActiveConversation(conversation)
                        }
                    }
                    // type = 'removed'
                    // type = 'add'
                    if (docChange.type == 'added') {
                        let conversation = docChange.doc.data()
                        conversation.id = docChange.doc.id

                        models.conversations.push(conversation)
                    }
                }
            }
            view.listConversations(models.conversations)
        })
}

models.setActiveConversation = function (conversation) {
    models.currentActiveConversation = conversation
    view.clearMessages()
    if (conversation.messages) {
        for (let message of conversation.messages) {
            view.addMessage(message)
        }
    }
}

models.createMessage = function (content) {
    let message = {
        content: content,
        createdAt: new Date().toISOString(),
        owner: models.authUser.email
    }
    if (models.currentActiveConversation) {
        firebase.firestore()
            .collection('conversations')
            .doc(models.currentActiveConversation.id)
            .update({
                messages: firebase.firestore.FieldValue.arrayUnion(message)
            })
    }
}

models.addConversation = async function (conversation) {
    let result = await firebase.firestore()
        .collection('conversations')
        .add(conversation)
    console.log(result)
}