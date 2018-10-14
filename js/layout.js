class Layout {

    constructor() {

        this.profileSection = document.querySelector("#profile")
    }

    showProfile(user) {

        this.profileSection.innerHTML = `
            <div class="profile">
            <div class="profile-avatar">
                <img src=${user.avatar_url} alt="">
                <h3>${user.name == null ? 'Sem nome' : user.name}</h3>
                <div class="profile-follow">
                    <div class="profile-followers">
                        <p>Followers: ${user.followers}</p>
                    </div>
                    <div class="profile-followings">
                        <p>Followings: ${user.following}</p>
                    </div>
                </div>
            </div>
            <div class="profile-information">
                <div class="profile-bio">
                    <p><span>Bio:</span> ${user.bio == null ? 'Sem bio' : user.bio}</p>
                </div>
                <div class="profile-email">
                    <p><span>Email:</span> ${user.email == null ? 'Sem e-mail' : user.email}</p>
                </div>
            </div>
        </div>
        `
    }

    showRepository(repository) {

        let output = ''

        repository.forEach(repo => {
            output += `
            <div class="repository-information">
                <div class="repository-name">
                    <p>${repo.name}</p>
                </div>
                <div class="repository-stars">
                    <p>star: ${repo.stargazers_count}</p>
                </div>
                <div class="repository-language">
                    <p>linguagem: ${repo.language}</p>
                </div>
                <div class="repository-description">
                    <p>${repo.description === null ? 'Repositorio sem descrição' : repo.description}
                    </p>
                </div>
                <div class="repository-link">
                    <a href="${repo.html_url}" target="_blank"><p>${repo.html_url}</p></a>
                </div>
            </div>
            `
        })

        document.querySelector("#repository").innerHTML = output
    }

    showMessageError() {

        this.clearMessageError()

        let alertDiv = document.createElement("div")

        alertDiv.classList.add("alert", "alert-danger")

        alertDiv.append("Usuário não existe!")

        const CONTAINER_TITLE = document.querySelector(".container-title")

        CONTAINER_TITLE.insertBefore(alertDiv, CONTAINER_TITLE.firstElementChild)

        setTimeout(this.clearMessageError, 2000)
    }

    clearMessageError() {

        const CURRENT_ALERT = document.querySelector(".alert")
        if (CURRENT_ALERT) {
            CURRENT_ALERT.remove()
        }
    }

    clearProfile() {

        while (this.profileSection.firstChild) {
            this.profileSection.removeChild(this.profileSection.firstChild)
        }
    }
}