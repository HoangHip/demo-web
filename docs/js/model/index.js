const models = {
    authUser: null,
    employerUser: null,

    jobList: [],
    jobDetail: null,

    authUser: null,
    conversations: null,
    currentActiveConversations: null
}


models.clear = function () {
    models.authUser = null
    models.conversations = null
    models.currentActiveConversation = null
}



