components.register = `
<section class="register-container">
    <div class="form-container">
        <div class="logo">
            <span>Techkids Chat</span>
        </div>
    
        <div class="form-wrapper">
            <form id="${config.FORM_REGISTER_ID}">
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" name="${config.INPUT_FIRSTNAME_NAME}" placeholder="First name" >
                        <div class="error-message" id='${config.ERROR_FIRSTNAME_ID}'></div>                        
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="${config.INPUT_LASTNAME_NAME}" placeholder="Last name" >
                        <div class="error-message" id='${config.ERROR_LASTNAME_ID}'></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="email" name="${config.INPUT_EMAIL_NAME}" placeholder="Email" >
                    <div class="error-message" id='${config.ERROR_EMAIL_ID}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="${config.INPUT_PWD_NAME}" placeholder="Password" >
                    <div class="error-message" id='${config.ERROR_PWD_ID}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="${config.INPUT_CONFIRM_PASSWORD_NAME}" placeholder="Confirm password" >
                    <div class="error-message" id='${config.ERROR_CONFIRM_PWD_ID}'></div>
                </div>
                <div id="${config.MESSAGE_ERROR_ID}"></div>
                <div id="${config.MESSAGE_SUCCESS_ID}"></div>
                <div class="form-footer">
                    <a href="#" id="form-link">Already have an account? Login</a>
                    <button type="submit" id="form-btn">Register</button>
                </div>
            </form>
        </div>
    </div>
</section>
`

components.logIn = `
<section class="log-in-container">
    <div class="form-container">
        <div class="logo">
            <span>Techkids Chat</span>
        </div>

        <div class="form-wrapper">
            <form id="${config.FORM_LOG_IN_ID}">
                <div class="input-wrapper">
                    <input type="email" name="${config.INPUT_EMAIL_NAME}" placeholder="Email">
                    <div class="error-message" id='${config.ERROR_EMAIL_ID}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="${config.INPUT_PWD_NAME}" placeholder="Password" >
                    <div class="error-message" id='${config.ERROR_PWD_ID}'></div>
                </div>
                <div id="${config.MESSAGE_ERROR_ID}"></div>
                <div class="form-footer">
                    <a href="#" id="form-link">Not yet have an account? Register</a>  
                    <button type="submit" id="form-btn" >Log in</button>
                </div>
            </form>
        </div>
    </div>
</section>
`