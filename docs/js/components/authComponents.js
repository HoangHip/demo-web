components.register = `
<section class="register-container">
<div class="form-container">
    <div class="logo">
        <span>Sign up</span>
    </div>

    <div class="form-wrapper">
        <form id="${config.FORM_REGISTER_ID}">
            <div class="name-wrapper">
                <div class="form-group">
                    <input type="text" class="form-control user-input" name="${config.INPUT_FIRSTNAME_NAME}"
                        style="width:368px;" placeholder=" First name">
                    <div class="error-message" id='${config.ERROR_FIRSTNAME_ID}'></div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control user-input" name="${config.INPUT_LASTNAME_NAME}"
                        style="width:368px;" placeholder=" Last name">
                    <div class="error-message" id='${config.ERROR_LASTNAME_ID}'></div>
                </div>
            </div>
            <div class="form-group">
                <input type="email" class="form-control user-input" name="${config.INPUT_EMAIL_NAME}"
                    style="width:368px;" placeholder=" Email">
                <div class="error-message" id='${config.ERROR_EMAIL_ID}'></div>
            </div>
            <div class="form-group">
                <input type="password" class="form-control user-input" name="${config.INPUT_PWD_NAME}"
                    style="width:368px;" placeholder=" Password">
                <div class="error-message" id='${config.ERROR_PWD_ID}'></div>
            </div>
            <div class="form-group">
                <input type="password" class="form-control user-input"
                    name="${config.INPUT_CONFIRM_PASSWORD_NAME}" style="width:368px;" placeholder=" Confirm password">
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
        <span>Sign In</span>
    </div>

    <div class="form-wrapper">
        <form id="${config.FORM_LOG_IN_ID}">
            <div class="form-group">
                <input type="email" name="${config.INPUT_EMAIL_NAME}" class="form-control user-input"
                    aria-describedby="emailHelp" style="width:368px;" placeholder="Email">
                <div class="error-message" id='${config.ERROR_EMAIL_ID}'></div>
            </div>
            <div class="form-group">
                <input type="password" class="form-control user-input" name="${config.INPUT_PWD_NAME}"
                    style="width:368px;" placeholder="Password">
                <div class="error-message" id='${config.ERROR_PWD_ID}'></div>
            </div>
            <div id="${config.MESSAGE_ERROR_ID}"></div>
            <div class="form-footer">
                <a href="#" id="form-link">Not yet have an account? Register</a>
                <button type="submit" id="form-btn">Log in</button>
            </div>
        </form>
    </div>
</div>
</section>
`

components.userInfo = `
<section class="information-container">
    <div class="form-container">
        <form id="form-register">
            <div class="input-group-prepend user-input" style="width:368px;">
                <div class="input-group mb-3 " >
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">You are</label>
                    </div>
                    <select name="" class="custom-select" id="user-detail" >
                        <option value="DEV">DEV</option>
                        <option value="employer">Employer</option>
                    </select>

                </div>
            </div>
            <div id="user-form">
                <div class="input-group mb-3 user-input " style="width:368px;">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Current job</label>
                    </div>
                    <select name="" class="custom-select" id="job-detail">
                        <option value="">Job</option>
                        <option value="tester">Tester</option>
                        <option value="fullstack">Fullstack</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="game">Game</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control user-input" name="schoolname"  style="width:368px;" placeholder="School name" required>
                    <div></div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control user-input" name="major" style="width:368px;" placeholder="Major" required>
                    <div></div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control user-input" name="awards" style="width:368px;" placeholder="Awards" required>
                    <div></div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control user-input" name="job" style="width:368px;" placeholder="Job" required>
                    <div></div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control user-input" name="company" style="width:368px;" placeholder="Company" required>
                    <div></div>
                </div>
                <div class="form-group">
                    <input type="date" class="form-control user-input" name="from" style="width:368px;" value="1980-08-26">
                    <div></div>
                </div>
                <div class="form-group">
                    <input type="date" class="form-control user-input" name="to" style="width:368px;" required>
                    <div></div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control user-input" name="achievements" style="width:368px;" placeholder="Achievements" required>
                    <div></div>
                </div>
            </div>
                <div class="form-footer">
                    <button type="submit" id="form-info-btn">Submit</button>
                </div>
        </form>
    </div>
</section>
`

