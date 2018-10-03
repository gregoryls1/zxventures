class GitApi {

    constructor() {}

    async getUser(userName) {

        let profileResponse = await fetch(`https://api.github.com/users/${userName}`)

        let repositoryResponse = await fetch(`https://api.github.com/users/${userName}/repos`)

        let profileData = await profileResponse.json()

        let repositoryData = await repositoryResponse.json()

        return {
            profile: profileData,
            repository: repositoryData
        }
    }
}