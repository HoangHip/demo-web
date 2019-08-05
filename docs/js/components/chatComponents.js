components.chat = `
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
        <a href="#" class="navbar-brand">
            <h3 id="home-btn">LOGO</h3>
        </a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#main-nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <i class="fas fa-user-circle fa-3x nav-link"></i>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">

                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" id="profile">Profile</a>
                        <a class="dropdown-item" href="#" id="messages">Messages</a>
                        <a class="dropdown-item" href="#" id="sign-out">Sign out</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="container">
    <div class="row py-4 chat-screen">
        <div class="col-sm-4 col-lg-3">
            <div class="conversation-list text-center" id="conversation-list">
                
            </div>
        </div>
        <div class="col-sm-8 col-lg-6">
            <div class="chat-container">
                <h3 class="mb-4 text-center">Chat Room</h3>
                <div class="chat-content" id="chat-content">
                    
                </div>
                <form action="" id="form-chat">
                    <div class="form-group">
                        <input type="text" class="form-control" name="message">
                    </div>
                    <button class="btn btn-outline-success">Send</button>
                </form>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="conversation-detail p-2" id="conversation-detail">
                
            </div>
        </div>
    </div>
</div>
`