class Layout {

    constructor() {

        this.profileSection = document.querySelector("#profile")
    }

    showProfile(user) {

        this.profileSection.innerHTML = `
            <div class="profile">
            <div class="profile-avatar">
                <img src="./assets/download.png" alt="">
                <h3>Gregory Lima</h3>
                <div class="profile-follow">
                    <div class="profile-followers">
                        <p>Followers: 0</p>
                    </div>
                    <div class="profile-followings">
                        <p>Followings: 2</p>
                    </div>
                </div>
            </div>
            <div class="profile-information">
                <div class="profile-bio">
                    <p><span>Bio:</span> Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Dolores similique repudiandae
                        impedit deserunt rem reprehenderit repellat dolorem
                        libero commodi doloremque.</p>
                </div>
                <div class="profile-email">
                    <p><span>Email:</span> contatogregory@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="repository" id="repository"></div>
        `
    }

    showRepository(repos) {

        let output = ''

        repos.forEach(repo => {
            output += `
            <div class="repository-title">
                <h3>Repositorios</h3>
            </div>
            <div class="repository-information">
                <div class="repository-name">
                    <p>zxventures</p>
                </div>
                <div class="repository-stars">
                    <p>star: 3</p>
                </div>
                <div class="repository-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate saepe neque ea ducimus, cum odio.</p>
                </div>
                <div class="repository-link">
                    <p>https://github.com/gregoryls1/apicriptomoeda</p>
                </div>
            </div>
            `
        })

        document.querySelector("#repository") = output
    }

}