components.chat = `
<nav class="main-nav">
    <span id="${config.NAV_NAME_LABEL}"></span>
    <button id="${config.NAV_SIGN_OUT_BTN}">Sign out</button>
</nav>
<div class="chat-screen">
    <section class="conversation-list" >
        <ul id="${config.CONVERSATION_LIST_ID}">
        </ul>
        <div id="${config.ADD_CONVERSATION_CONTAINER_ID}">
            <button id="${config.ADD_CONVERSATION_BTN}">Add conversation</button>
        </div>
    </section>
    <section class="chat-container">
        <div class="chat-header">
            <h3>MindX</h3>
        </div>
        <div class="chat-content" id="${config.CHAT_CONTENT}">
        </div>
        <div class="form-wrapper">
            <form id="${config.FORM_CHAT_ID}">
                <div class="input-wrapper">
                    <input type="text" name="message">
                </div>
                <button class="chat-submit-btn" type="submit">Send</button>
            </form>
        </div>
        <div class="error-message" id="${config.MESSAGE_ERROR_ID}"></div>
    </section>
    <section class="conversation-details" id="${config.CONVERSATION_DETAILS_ID}">
        <button id="${config.LEAVE_CONVERSATION_BTN}">Leave conversation</button>
    </section>
</div>
`

components.addConversationForm = `
<form id="${config.ADD_CONVERSATION_FORM_ID}"> 
    <div class="input-wrapper">
         <input name="friendEmail" placeholder="Friend email"/>
         <div id="${config.ADD_CONVERSATION_ERROR_ID}" class="error-message"></div>
    </div>
    <button id="${config.ADD_CONVERSATION_CANCEL_BTN_ID}" type="button">Cancel</button>
    <button id="${config.ADD_CONVERSATION_SUBMIT_BTN_ID}">Add</button>
</form>
`