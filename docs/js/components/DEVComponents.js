components.jobList = `
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
                        User-name
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
<div class="jumbotro">
    <div class="container">
        <div class="row text-center">
            <div class="col-md-9 col-lg-6">
                <div class="finding">
                    <div class="display-4 text-white mb-3 recuitment">Recuitment</div>
                    <form id="form-finding">
                        <div class="form-group">
                            <input type="search" name="search" class="form-control" placeholder="Search for more infomation">
                        </div>
                        <button class="btn btn-warning">Search</button>
                    </form>
                    <div class="example">
                        <button class="btn btn-outline-light" id="tester">Tester</button>
                        <button class="btn btn-outline-light" id="full-stack">Full stack</button>
                        <button class="btn btn-outline-light" id="front-end">Front-end</button>
                        <button class="btn btn-outline-light" id="back-end">Back-end</button>
                        <button class="btn btn-outline-light" id="game">Game</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row text-center job-list" id="job-list">

    </div>
</div>
`

components.jobDetail = `

`