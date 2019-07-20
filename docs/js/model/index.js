const models = {
    authUser: null,
    conversations: null,
    currentActiveConversation: null
}


models.clear = function () {
    models.authUser = null
    models.conversations = null
    models.currentActiveConversation = null
}



