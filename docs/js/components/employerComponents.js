components.employer = `
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
<br>
<div class="employer-container">
    <div class="content-container">
            <div class="post">
                <div class="head">Your Post</div>
                <div class="all-post" id="job-list">
                </div>
                <div>
                    <button type="button" id="new-post-btn">NEW POST</button>
                </div>
            </div>
    </div>
    <div class="cv-container">
        <div class="head">Applicant</div>
        <div id="all-cv">
            
        </div>
    </div>
    
</div>
`

components.newPost = `
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
<br>
<div class="post-container">
    <form id="dev-form">
        <div class="form-group" style="padding-top: 1rem;">
            <input type="text" name="title" class="form-control" placeholder="Title" required>
        </div>
        <div class="middle">
            <div class="form-group">
                <input type="text" name="salary" class="form-control" placeholder="Salary"
                    style="width: 380px" required>
            </div>
            <select name="" id="position" class="custom-select position" style="width: 380px"
                placeholder="Position">
                <option value="">Job</option>
                <option value="tester">Tester</option>
                <option value="full-stack">Fullstack</option>
                <option value="front-end">Frontend</option>
                <option value="back-end">Backend</option>
                <option value="game">Game</option>
            </select>
            <div class="form-group">
                <input type="text" name="location" class="form-control" style="width: 380px"
                    placeholder="Location" required>
            </div>
        </div>
        <div class="content">
            <div class="form-group">
                <h6>Content</h6>
                <textarea name="content" id="content" cols="180" rows="5" class="form-control"
                    required></textarea>
            </div>
            <div class="form-group">
                <h6>Describe</h6>
                <textarea name="describe" id="describe" cols="180" rows="5" class="form-control"
                    required></textarea>
            </div>
            <button type="submit" id="form-post-btn">Submit</button>
        </div>
    </form>
</div>
`