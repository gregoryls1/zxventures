class GitApi {

    constructor() {}

    async getUser(userName) {

        let profileResponse = await fetch(`https://api.github.com/users/${userName}`)

        let repositoryResponse = await fetch(`https://api.github.com/users/${userName}/repos`)

        let repositoryOnlyResponse = await fetch(`https://api.github.com/repos/${userName}`)

        let profileData = await profileResponse.json()

        let repositoryData = await repositoryResponse.json()

        let repositoryOnlyData = await repositoryOnlyResponse.json()

        return {
            profile: profileData,
            repository: repositoryData,
            repositoryOnly: repositoryOnlyData
        }
    }
}