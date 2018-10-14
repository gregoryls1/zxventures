let gitApi = new GitApi()

let layout = new Layout()

const USER = document.querySelector("#user")

USER.addEventListener("keyup", getUserInput, false)

function getUserInput(event) {

    let userName = event.target.value

    if (userName !== '') {

        gitApi.getUser(userName)
            .then(data => {

                if (data.profile.message == "Não encontrado") {
                    layout.showMessageError()

                } else {

                    layout.showProfile(data.profile)
                    layout.showRepository(data.repository)

                }
            })
    } else {
        layout.clearProfile()
    }
}