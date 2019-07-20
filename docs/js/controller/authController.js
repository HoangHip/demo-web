controller.register = async function (registerInfo) { // email, passwơrd, firstname, lastname
    if (validateRegisterInfo(registerInfo)) {
        // 1.Đăng ký người dùng
        // F2 -> sửa tất cả những thằng cùng tên ~ ctrl + D
        try {
            let resultCreateUser = await window.firebase.auth().createUserWithEmailAndPassword(
                registerInfo.email, registerInfo.password)
            // let result = resultCreateUser.user
            //2 dòng trên có thể tóm gọn lại thành -> 
            //  let { result } = await window.firebase.auth().createUserWithEmailAndPassword(registerInfo.email, registerInfo.password)

            // 2. Update thông tin người dùng
            firebase.auth().currentUser.updateProfile({
                displayName: registerInfo.firstname + " " + registerInfo.lastname
            })

            // 3.Gửi email xác nhận
            firebase.auth().currentUser.sendEmailVerification()

            // 4.Hiện thông báo
            view.setText(config.MESSAGE_SUCCESS_ID, "Register successfully!")
        } catch (err) { // err bình thường dưới dạng 1 obj trong đó có 1 trường tên là message thông báo lỗi
            view.setText(config.MESSAGE_ERROR_ID, err.message || "Register failed!")
        }

    }
}

// READ doc trên firebase về login và register
// *NOTE: Về làm css cho phần config.message_error và success // chat box

controller.logIn = async function (logInInfo) {
    if (validateLogInInfo(logInInfo)) {
        try {
            let result = await firebase.auth().signInWithEmailAndPassword(
                logInInfo.email,
                logInInfo.password
            )
            if (!result.user.emailVerified) {
                throw new Error('Please verify email first')
            } else {
                // TODO redirect to chat screen
                // view.showComponents('chat')

                // models.logIn(result.user)
                // // models.loadCOnversations
                // models.loadConversations(result.user.email)
                
            }
        } catch (err) {
            view.setText(config.MESSAGE_ERROR_ID, err.message || "Log in failed!")
        }
    }
}


controller.initAuth = function() {
    view.showComponents('loading')
    firebase.auth().onAuthStateChanged(async function(user) {
        if(user && user.emailVerified) {
            // chat
            view.showComponents('chat')
            
            models.logIn(user)
            models.loadConversations(user.email)
        } else {
            //login
            // !user || user && !user.emailVerified
            if(user) {
                await firebase.auth().signOut()
            }
            view.showComponents('logIn')
        }
    })
}